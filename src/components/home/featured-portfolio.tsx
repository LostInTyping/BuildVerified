import Link from "next/link";
import {
  getAllPortfolioItems,
  getFeaturedPortfolioItems,
} from "@/lib/portfolio";
import { FadeIn } from "@/components/fade-in";

export function FeaturedPortfolio() {
  const featuredItems = getFeaturedPortfolioItems();
  const items =
    (featuredItems.length >= 4
      ? featuredItems
      : getAllPortfolioItems()
    ).slice(0, 4);

  return (
    <section>
      <FadeIn>
        <hr className="section-divider" />
      </FadeIn>
      <div className="mx-auto max-w-7xl px-6 py-6 md:py-8">
        <FadeIn>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
              Portfolio
            </h2>
            <Link
              href="/portfolio"
              className="text-sm text-accent transition-colors hover:text-accent-hover"
            >
              View all →
            </Link>
          </div>
        </FadeIn>
        <div className="mt-4 grid gap-4 sm:gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <FadeIn
              key={item.frontmatter.slug}
              delay={0.1 + index * 0.1}
              className={index >= 2 ? "hidden h-full md:block" : "h-full"}
              scale
            >
              <Link
                href={`/portfolio/${item.frontmatter.slug}`}
                className="portfolio-card group flex h-full flex-col rounded-sm border border-border bg-bg-card p-6 hover:bg-bg-card-hover"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                    {item.frontmatter.clientType}
                  </p>
                  <span
                    className="shrink-0 font-mono text-5xl font-bold transition-colors"
                    style={{
                      color: `color-mix(in srgb, ${["var(--color-brand-primary)", "var(--color-brand-secondary)", "var(--color-brand-tertiary)", "var(--color-brand-primary-fixed)"][index % 4]} 19%, transparent)`,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-text-primary transition-colors group-hover:text-accent">
                  {item.frontmatter.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {item.frontmatter.outcome}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.frontmatter.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
