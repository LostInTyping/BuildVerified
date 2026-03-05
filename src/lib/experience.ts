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

export function getAllExperience(): ExperienceItem[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return { frontmatter: data as ExperienceFrontmatter };
    })
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}
