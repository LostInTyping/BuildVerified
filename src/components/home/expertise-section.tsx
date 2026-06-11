import { FadeIn } from "@/components/fade-in";
import { ExpertiseIcon, type ExpertiseIconName } from "@/components/home/expertise-icons";

const expertiseAreas: Array<{
  title: string;
  icon: ExpertiseIconName;
  colorClass: string;
  tools: string;
}> = [
  {
    title: "Test Automation",
    icon: "beaker",
    colorClass: "text-brand-primary/75 group-hover:text-brand-primary",
    tools: "Cypress · Playwright · Jest",
  },
  {
    title: "Defect Lifecycle",
    icon: "bug",
    colorClass: "text-brand-error/75 group-hover:text-brand-error",
    tools: "Jira · GitHub",
  },
  {
    title: "Test Reporting",
    icon: "chart-bar",
    colorClass: "text-brand-secondary/75 group-hover:text-brand-secondary",
    tools: "Tableau · Confluence",
  },
  {
    title: "CI/CD Pipelines",
    icon: "git-branch",
    colorClass: "text-brand-primary/75 group-hover:text-brand-primary",
    tools: "GitHub Actions · Git",
  },
  {
    title: "Environments & Infrastructure",
    icon: "server",
    colorClass: "text-brand-secondary/75 group-hover:text-brand-secondary",
    tools: "Docker · Linux",
  },
  {
    title: "API Testing",
    icon: "code-bracket",
    colorClass: "text-brand-primary/75 group-hover:text-brand-primary",
    tools: "Postman · REST APIs",
  },
  {
    title: "Performance Testing",
    icon: "bolt",
    colorClass: "text-brand-secondary/75 group-hover:text-brand-secondary",
    tools: "Lighthouse",
  },
  {
    title: "Accessibility Testing",
    icon: "eye",
    colorClass: "text-brand-tertiary/75 group-hover:text-brand-tertiary",
    tools: "axe-core · WCAG",
  },
  {
    title: "Data Validation",
    icon: "database",
    colorClass: "text-brand-tertiary/75 group-hover:text-brand-tertiary",
    tools: "SQL · PostgreSQL · MongoDB",
  },
];

export function ExpertiseSection() {
  return (
    <section>
      <FadeIn>
        <hr className="section-divider" />
      </FadeIn>
      <div className="mx-auto max-w-7xl px-6 py-6 md:py-8">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
            Areas of Expertise
          </h2>
        </FadeIn>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {expertiseAreas.map((area, index) => (
            <FadeIn
              key={area.title}
              delay={0.1 + index * 0.04}
              className="h-full"
              scale
            >
              <div className="expertise-tile group flex h-full items-center gap-3 rounded-sm border border-border bg-bg-card px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center transition-colors duration-300 ${area.colorClass}`}
                >
                  <ExpertiseIcon
                    name={area.icon}
                    className="h-7 w-7 transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-text-primary">
                    {area.title}
                  </p>
                  <p className="mt-0.5 truncate font-mono text-[10px] uppercase tracking-[0.08em] text-text-muted transition-colors duration-300 group-hover:text-text-secondary">
                    {area.tools}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
