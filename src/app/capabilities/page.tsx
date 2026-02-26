export const metadata = {
  title: "Capabilities",
  description: "Test automation, testing strategy, defect lifecycle, and more.",
};

const capabilities = [
  {
    title: "Test Automation",
    description:
      "Building and maintaining Cypress test suites with TypeScript. Reusable utilities, visual regression workflows, and automation that the team can trust and extend.",
    tools: ["Cypress", "TypeScript", "Visual Regression"],
  },
  {
    title: "Testing Strategy",
    description:
      "Test planning scoped to risk and delivery timelines. Regression, UAT, release validation, and performance testing — choosing the right coverage for the right moment.",
    tools: ["Test Planning", "Regression", "UAT", "Release Validation"],
  },
  {
    title: "Defect Lifecycle",
    description:
      "Owning defects from discovery through verified fix. Log capture, repro isolation, structured Jira tracking, and clear communication that accelerates resolution.",
    tools: ["Triage", "Repro Isolation", "Jira Tracking", "Verification"],
  },
  {
    title: "Environments & Infrastructure",
    description:
      "Building and maintaining test lab environments that mirror production. Device matrices, hardware alignment, cross-platform setup, and network-accessible configurations.",
    tools: ["Lab Setup", "Device Matrices", "Cross-Platform"],
  },
  {
    title: "CI & Tooling",
    description:
      "Integrating automation into CI workflows so tests run on every change. API testing with Postman, version control with Git, and pipeline configuration.",
    tools: ["Git", "GitHub", "CI Workflows", "Postman"],
  },
  {
    title: "Collaboration & Documentation",
    description:
      "Test plans, verification checklists, and stakeholder communication that enable consistent execution. Documentation that supports onboarding and team scalability.",
    tools: ["Jira", "Confluence", "Test Plans", "Stakeholder Comms"],
  },
];

export default function CapabilitiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Capabilities</h1>
      <p className="mt-4 max-w-2xl text-text-secondary">
        How I approach quality — from test planning and automation through
        release validation and defect resolution.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {capabilities.map((cap) => (
          <div
            key={cap.title}
            className="rounded-lg border border-border bg-bg-card p-6"
          >
            <h2 className="text-xl font-semibold text-text-primary">
              {cap.title}
            </h2>
            <p className="mt-3 text-sm text-text-secondary">
              {cap.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {cap.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
