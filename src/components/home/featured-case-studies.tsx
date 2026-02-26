import Link from "next/link";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import { FadeIn } from "@/components/fade-in";

export function FeaturedCaseStudies() {
  const studies = getFeaturedCaseStudies();

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
            Case Studies
          </h2>
          <Link
            href="/case-studies"
            className="text-sm text-accent transition-colors hover:text-accent-hover"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {studies.map((study, index) => (
            <FadeIn key={study.frontmatter.slug} delay={index * 0.1}>
              <Link
                href={`/case-studies/${study.frontmatter.slug}`}
                className="group block rounded-lg border border-border bg-bg-card p-6 transition-all hover:border-border-hover hover:bg-bg-card-hover"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  {study.frontmatter.clientType}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-text-primary group-hover:text-accent">
                  {study.frontmatter.role}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {study.frontmatter.outcome}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
