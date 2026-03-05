import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

export function getAllPortfolioItems(): PortfolioItem[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      return {
        frontmatter: data as PortfolioFrontmatter,
        content,
      };
    })
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
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
