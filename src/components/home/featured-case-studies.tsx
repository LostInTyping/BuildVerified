import Link from "next/link";

const placeholderStudies = [
  {
    slug: "digital-menu-platform",
    clientType: "National QSR brand",
    role: "Test planning, Cypress automation, lab infrastructure",
    outcome: "Reduced regression cycles from days to hours",
  },
  {
    slug: "university-it-systems",
    clientType: "Major university IT systems",
    role: "Cypress framework, regression suites, defect lifecycle",
    outcome: "Strengthened regression coverage across critical systems",
  },
];

export function FeaturedCaseStudies() {
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
          {placeholderStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group rounded-lg border border-border bg-bg-card p-6 transition-all hover:border-border-hover hover:bg-bg-card-hover"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                {study.clientType}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-text-primary group-hover:text-accent">
                {study.role}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {study.outcome}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
