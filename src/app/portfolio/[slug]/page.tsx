import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllPortfolioItems,
  getPortfolioItemBySlug,
} from "@/lib/portfolio";
import { getAllExperience } from "@/lib/experience";
import { mdxComponents } from "@/components/mdx-components";
import Link from "next/link";
import { PortfolioLinks } from "@/components/portfolio-links";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);
  if (!item) return { title: "Portfolio" };
  return {
    title: item.frontmatter.title,
    description: item.frontmatter.outcome,
  };
}

export function generateStaticParams() {
  const items = getAllPortfolioItems();
  return items.map((s) => ({ slug: s.frontmatter.slug }));
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);
  if (!item) notFound();

  const parentExperience = getAllExperience().find((e) =>
    e.frontmatter.portfolioSlugs?.includes(slug),
  );

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/portfolio"
        className="text-sm text-accent transition-colors hover:text-accent-hover"
      >
        &larr; All Portfolio
      </Link>
      {parentExperience && (
        <p className="mt-6 text-xs text-text-muted">
          <Link
            href="/experience"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            {parentExperience.frontmatter.company}
          </Link>
          <span className="mx-1.5">&middot;</span>
          {parentExperience.frontmatter.period}
        </p>
      )}
      <p
        className={`${parentExperience ? "mt-3" : "mt-8"} text-xs font-medium uppercase tracking-wider text-text-muted`}
      >
        {item.frontmatter.clientType}
      </p>
      <h1 className="mt-2 text-4xl font-bold">{item.frontmatter.title}</h1>
      <p className="mt-2 text-lg text-text-secondary">
        {item.frontmatter.role}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.frontmatter.stack.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-border bg-bg-card px-3 py-1 text-xs text-text-muted"
          >
            {tool}
          </span>
        ))}
      </div>
      <PortfolioLinks links={item.frontmatter.links} className="mt-5" />
      <div className="mt-12">
        <MDXRemote source={item.content} components={mdxComponents} />
      </div>
    </main>
  );
}
