import type { Metadata } from "next";
import Link from "next/link";
import { getAllExperience } from "@/lib/experience";
import { getAllPortfolioItems } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Timeline of professional and personal QA engineering work by Ben Armour.",
  openGraph: {
    title: "Experience",
    description:
      "Timeline of professional and personal QA engineering work by Ben Armour.",
    url: "https://buildverified.com/experience",
  },
};

export default function ExperiencePage() {
  const experience = getAllExperience();
  const portfolioItems = getAllPortfolioItems();

  const slugToTitle = new Map(
    portfolioItems.map((p) => [p.frontmatter.slug, p.frontmatter.title]),
  );

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">Experience</h1>
      <p className="mt-4 text-text-secondary">
        A timeline of engagements across professional and personal work.
      </p>

      <div className="mt-12 space-y-0">
        {experience.map((entry, index) => {
          const linkedItems = (
            entry.frontmatter.portfolioSlugs ?? []
          ).flatMap((slug) => {
            const title = slugToTitle.get(slug);
            return title ? [{ slug, title }] : [];
          });

          return (
            <div key={entry.frontmatter.title} className="relative pl-8">
              {/* Timeline line */}
              {index < experience.length - 1 && (
                <div className="absolute left-[7px] top-4 h-full w-px bg-border" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 top-[18px] h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg-primary" />

              <div className="mb-8 rounded-lg border border-border bg-bg-card p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-accent">
                      {entry.frontmatter.company}
                    </p>
                    <h2 className="mt-1 text-lg font-semibold text-text-primary">
                      {entry.frontmatter.role}
                    </h2>
                  </div>
                  <span className="shrink-0 text-xs text-text-muted">
                    {entry.frontmatter.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-text-secondary">
                  {entry.frontmatter.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.frontmatter.stack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {linkedItems.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {linkedItems.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/portfolio/${item.slug}`}
                        aria-label={`View portfolio: ${item.title}`}
                        className="rounded-full border border-accent/15 bg-accent/5 px-3 py-1 text-xs text-accent/80 transition-colors hover:bg-accent/10 hover:text-accent"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
