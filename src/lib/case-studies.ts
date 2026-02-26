import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content/case-studies");

export type CaseStudyLinkKind =
  | "public_reference"
  | "restricted_access"
  | "client_site";

export interface CaseStudyLink {
  label: string;
  url: string;
  kind: CaseStudyLinkKind;
  note?: string;
}

export interface CaseStudyFrontmatter {
  title: string;
  slug: string;
  clientType: string;
  role: string;
  stack: string[];
  highlights: string;
  outcome: string;
  links?: CaseStudyLink[];
  featured: boolean;
  order: number;
}

export interface CaseStudy {
  frontmatter: CaseStudyFrontmatter;
  content: string;
}

export function getAllCaseStudies(): CaseStudy[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      return {
        frontmatter: data as CaseStudyFrontmatter,
        content,
      };
    })
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  const allStudies = getAllCaseStudies();
  return allStudies.find((s) => s.frontmatter.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getAllCaseStudies().filter((s) => s.frontmatter.featured);
}
