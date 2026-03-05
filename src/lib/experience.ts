import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content/experience");

export interface ExperienceFrontmatter {
  title: string;
  company: string;
  period: string;
  type: "professional" | "personal";
  role: string;
  summary: string;
  stack: string[];
  portfolioSlugs?: string[];
  order: number;
}

export interface ExperienceItem {
  frontmatter: ExperienceFrontmatter;
}

function validateExperienceFrontmatter(
  data: Record<string, unknown>,
  filename: string,
): ExperienceFrontmatter {
  const err = (msg: string): never => {
    throw new Error(`Invalid frontmatter in ${filename}: ${msg}`);
  };

  for (const field of [
    "title",
    "company",
    "period",
    "role",
    "summary",
  ] as const) {
    if (typeof data[field] !== "string") {
      err(
        data[field] === undefined || data[field] === null
          ? `missing required field '${field}'`
          : `field '${field}' must be a string`,
      );
    }
  }

  if (data.type !== "professional" && data.type !== "personal") {
    err(
      data.type === undefined || data.type === null
        ? "missing required field 'type'"
        : "field 'type' must be \"professional\" or \"personal\"",
    );
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

  if (typeof data.order !== "number") {
    err(
      data.order === undefined || data.order === null
        ? "missing required field 'order'"
        : "field 'order' must be a number",
    );
  }

  if (data.portfolioSlugs !== undefined && data.portfolioSlugs !== null) {
    if (
      !Array.isArray(data.portfolioSlugs) ||
      !data.portfolioSlugs.every((v: unknown) => typeof v === "string")
    ) {
      err("field 'portfolioSlugs' must be a string array");
    }
  }

  return {
    title: data.title as string,
    company: data.company as string,
    period: data.period as string,
    type: data.type as "professional" | "personal",
    role: data.role as string,
    summary: data.summary as string,
    stack: data.stack as string[],
    order: data.order as number,
    ...(data.portfolioSlugs !== undefined && data.portfolioSlugs !== null
      ? { portfolioSlugs: data.portfolioSlugs as string[] }
      : {}),
  };
}

export function getAllExperience(): ExperienceItem[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        frontmatter: validateExperienceFrontmatter(
          data as Record<string, unknown>,
          filename,
        ),
      };
    })
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}
