import Link from "next/link";

const capabilities = [
  "Test Automation",
  "Testing Strategy",
  "Defect Lifecycle",
  "Environments & Infrastructure",
  "CI & Tooling",
  "Collaboration & Documentation",
];

export function CapabilitiesSummary() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
          Capabilities
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {capabilities.map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-border bg-bg-card px-4 py-2 text-sm text-text-secondary"
            >
              {cap}
            </span>
          ))}
        </div>
        <Link
          href="/capabilities"
          className="mt-6 inline-block text-sm text-accent transition-colors hover:text-accent-hover"
        >
          Learn more about how I work &rarr;
        </Link>
      </div>
    </section>
  );
}
