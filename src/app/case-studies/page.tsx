import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata = {
  title: "Case Studies",
  description: "NDA-safe deep dives into real QA engineering projects.",
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Case Studies</h1>
      <p className="mt-4 max-w-2xl text-text-secondary">
        Deep dives into real projects. Details sanitized for NDA compliance —
        workflows and outcomes are accurate.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {caseStudies.map((study) => (
          <Link
            key={study.frontmatter.slug}
            href={`/case-studies/${study.frontmatter.slug}`}
            className="group rounded-lg border border-border bg-bg-card p-6 transition-all hover:border-border-hover hover:bg-bg-card-hover"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
              {study.frontmatter.clientType}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-text-primary group-hover:text-accent">
              {study.frontmatter.role}
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              {study.frontmatter.outcome}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.frontmatter.stack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
