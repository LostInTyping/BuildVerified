import Link from "next/link";
import { getAllPortfolioItems } from "@/lib/portfolio";

export const metadata = {
  title: "Portfolio",
  description:
    "Deep dives into real QA engineering projects across public and NDA-protected work.",
};

export default function PortfolioPage() {
  const items = getAllPortfolioItems();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Portfolio</h1>
      <p className="mt-4 max-w-2xl text-text-secondary">
        A mix of public deep-dives and NDA-safe project summaries. Where
        details are restricted, workflows and outcomes remain accurate.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <Link
            key={item.frontmatter.slug}
            href={`/portfolio/${item.frontmatter.slug}`}
            className="portfolio-card group block rounded-lg border border-border bg-bg-card p-6 hover:bg-bg-card-hover"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                {item.frontmatter.clientType}
              </p>
              <span className="shrink-0 font-mono text-4xl font-bold text-text-muted transition-colors group-hover:text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h2 className="mt-3 text-xl font-semibold text-text-primary transition-colors group-hover:text-accent">
              {item.frontmatter.title}
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              {item.frontmatter.outcome}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.frontmatter.stack.map((tool) => (
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
