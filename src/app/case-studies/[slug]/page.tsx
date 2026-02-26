import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { mdxComponents } from "@/components/mdx-components";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study" };
  return {
    title: study.frontmatter.title,
    description: study.frontmatter.outcome,
  };
}

export function generateStaticParams() {
  const studies = getAllCaseStudies();
  return studies.map((s) => ({ slug: s.frontmatter.slug }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/case-studies"
        className="text-sm text-accent transition-colors hover:text-accent-hover"
      >
        &larr; All Case Studies
      </Link>
      <p className="mt-8 text-xs font-medium uppercase tracking-wider text-text-muted">
        {study.frontmatter.clientType}
      </p>
      <h1 className="mt-2 text-4xl font-bold">{study.frontmatter.title}</h1>
      <p className="mt-2 text-lg text-text-secondary">
        {study.frontmatter.role}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {study.frontmatter.stack.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-border bg-bg-card px-3 py-1 text-xs text-text-muted"
          >
            {tool}
          </span>
        ))}
      </div>
      <div className="mt-12">
        <MDXRemote source={study.content} components={mdxComponents} />
      </div>
    </main>
  );
}
