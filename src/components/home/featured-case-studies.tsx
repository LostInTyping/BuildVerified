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
                className="group block rounded-lg border border-border bg-bg-card p-6 transition-all hover:border-accent hover:bg-bg-card-hover"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                    {study.frontmatter.clientType}
                  </p>
                  <span className="shrink-0 font-mono text-4xl font-bold text-text-muted transition-colors group-hover:text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-text-primary transition-colors group-hover:text-accent">
                  {study.frontmatter.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {study.frontmatter.outcome}
                </p>
                <p className="mt-4 text-xs text-accent">Read case study &rarr;</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
