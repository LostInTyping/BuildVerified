import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { validateScenarioCoverage } from "@/lib/terminal-scenarios";

const contentDir = path.join(process.cwd(), "src/content/portfolio");

export type PortfolioLinkKind =
  | "public_reference"
  | "restricted_access"
  | "client_site";

export interface PortfolioLink {
  label: string;
  url: string;
  kind: PortfolioLinkKind;
  note?: string;
}

export interface PortfolioFrontmatter {
  title: string;
  slug: string;
  clientType: string;
  role: string;
  stack: string[];
  highlights: string;
  outcome: string;
  links?: PortfolioLink[];
  featured: boolean;
  order: number;
}

export interface PortfolioItem {
  frontmatter: PortfolioFrontmatter;
  content: string;
}

const VALID_LINK_KINDS: readonly PortfolioLinkKind[] = [
  "public_reference",
  "restricted_access",
  "client_site",
];

function validatePortfolioFrontmatter(
  data: Record<string, unknown>,
  filename: string,
): PortfolioFrontmatter {
  const err = (msg: string): never => {
    throw new Error(`Invalid frontmatter in ${filename}: ${msg}`);
  };

  for (const field of [
    "title",
    "slug",
    "clientType",
    "role",
    "highlights",
    "outcome",
  ] as const) {
    if (typeof data[field] !== "string") {
      err(
        data[field] === undefined || data[field] === null
          ? `missing required field '${field}'`
          : `field '${field}' must be a string`,
      );
    }
  }

  if (
    !Array.isArray(data.stack) ||
    !data.stack.every((v: unknown) => typeof v === "string")
  ) {
    err(
      data.stack === undefined || data.stack === null
        ? "missing required field 'stack'"
        : "field 'stack' must be a string array",
    );
  }

  if (typeof data.featured !== "boolean") {
    err(
      data.featured === undefined || data.featured === null
        ? "missing required field 'featured'"
        : "field 'featured' must be a boolean",
    );
  }

  if (typeof data.order !== "number") {
    err(
      data.order === undefined || data.order === null
        ? "missing required field 'order'"
        : "field 'order' must be a number",
    );
  }

  if (data.links !== undefined && data.links !== null) {
    if (!Array.isArray(data.links)) {
      err("field 'links' must be an array");
    }
    for (const [i, link] of (data.links as unknown[]).entries()) {
      if (typeof link !== "object" || link === null) {
        err(`field 'links[${i}]' must be an object`);
      }
      const l = link as Record<string, unknown>;
      if (typeof l.label !== "string") {
        err(`field 'links[${i}].label' must be a string`);
      }
      if (typeof l.url !== "string") {
        err(`field 'links[${i}].url' must be a string`);
      }
      if (
        typeof l.kind !== "string" ||
        !VALID_LINK_KINDS.includes(l.kind as PortfolioLinkKind)
      ) {
        err(
          `field 'links[${i}].kind' must be one of: ${VALID_LINK_KINDS.join(", ")}`,
        );
      }
      if (l.note !== undefined && l.note !== null && typeof l.note !== "string") {
        err(`field 'links[${i}].note' must be a string`);
      }
    }
  }

  return {
    title: data.title as string,
    slug: data.slug as string,
    clientType: data.clientType as string,
    role: data.role as string,
    stack: data.stack as string[],
    highlights: data.highlights as string,
    outcome: data.outcome as string,
    featured: data.featured as boolean,
    order: data.order as number,
    ...(data.links !== undefined && data.links !== null
      ? { links: data.links as PortfolioLink[] }
      : {}),
  };
}

export function getAllPortfolioItems(): PortfolioItem[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const items = files
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      return {
        frontmatter: validatePortfolioFrontmatter(
          data as Record<string, unknown>,
          filename,
        ),
        content,
      };
    })
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);

  // Validate terminal scenario coverage at build time
  if (process.env.NODE_ENV === "production") {
    validateScenarioCoverage(items.map((item) => item.frontmatter.slug));
  }

  return items;
}

export function getPortfolioItemBySlug(
  slug: string,
): PortfolioItem | undefined {
  const allItems = getAllPortfolioItems();
  return allItems.find((s) => s.frontmatter.slug === slug);
}

export function getFeaturedPortfolioItems(): PortfolioItem[] {
  return getAllPortfolioItems().filter((s) => s.frontmatter.featured);
}
