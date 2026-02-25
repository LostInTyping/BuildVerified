const proofItems = [
  {
    title: "CI Pipeline Integration",
    description:
      "Automated test runs on every PR with published reports and clear pass/fail gates.",
  },
  {
    title: "Flake Control",
    description:
      "Retries, quarantines, and root-cause investigation to keep suites reliable.",
  },
  {
    title: "Release Validation",
    description:
      "UAT exit criteria and release readiness summaries that stakeholders trust.",
  },
  {
    title: "Environment Parity",
    description:
      "Production-like lab setups with hardware and software matrices that mirror real conditions.",
  },
  {
    title: "Defect Lifecycle Ownership",
    description:
      "From log capture and repro isolation through Jira tracking to verified fix in production.",
  },
];

export function ProofSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
          How I Work
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {proofItems.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-bg-card p-6 transition-colors hover:bg-bg-card-hover"
            >
              <h3 className="text-lg font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
