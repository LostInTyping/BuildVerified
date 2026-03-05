import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Test automation, testing strategy, defect lifecycle, and more.",
  openGraph: {
    url: "/capabilities",
  },
};

const capabilities = [
  {
    title: "Test Automation",
    description:
      "Developing maintainable Cypress test suites with CI-friendly design. Reusable utilities, visual regression workflows, and AI-accelerated test development with human-in-the-loop review.",
    tools: ["Cypress", "TypeScript", "CI-Friendly Design", "AI-Assisted Dev"],
  },
  {
    title: "Testing Strategy",
    description:
      "Risk-based test planning for multi-client, multi-region releases. Functional, regression, smoke, UAT, and performance validation, choosing the right coverage for the right moment.",
    tools: ["Risk-Based Planning", "Regression", "Smoke", "UAT", "Performance"],
  },
  {
    title: "Defect Lifecycle",
    description:
      "Owning defects from triage through verified fix. Log capture, repro isolation, structured Jira tracking, and clear communication that accelerates resolution.",
    tools: ["Triage", "Repro Isolation", "Jira Tracking", "Verification"],
  },
  {
    title: "Environments & Infrastructure",
    description:
      "Building and maintaining test lab environments that mirror production. 1:1 staging/production parity, device matrices, hardware alignment, and cross-platform setup.",
    tools: ["Lab Setup", "Device Matrices", "Cross-Platform"],
  },
  {
    title: "CI & Tooling",
    description:
      "Integrating automation into CI/CD workflows so tests run on every change. API testing with Postman, version control with Git, and pipeline configuration.",
    tools: ["Git", "GitHub", "GitLab", "CI/CD Workflows", "Postman"],
  },
  {
    title: "Collaboration & Documentation",
    description:
      "Test plans, verification checklists, and stakeholder communication in Agile teams (Scrum, Kanban). Documentation that supports onboarding, consistent execution, and team scalability.",
    tools: ["Jira", "Confluence", "Agile", "Stakeholder Comms"],
  },
];

export default function CapabilitiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Capabilities</h1>
      <p className="mt-4 max-w-2xl text-text-secondary">
        How I approach quality, from test planning and automation through
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
