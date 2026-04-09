import { FadeIn } from "@/components/fade-in";
import { SlideIn } from "@/components/slide-in";
import { ExpertiseIcon, type ExpertiseIconName } from "@/components/home/expertise-icons";

const expertiseAreas: Array<{
  title: string;
  icon: ExpertiseIconName;
  hoverColorClass: string;
}> = [
  {
    title: "Test Automation",
    icon: "beaker",
    hoverColorClass: "group-hover:text-brand-primary",
  },
  {
    title: "Defect Lifecycle",
    icon: "bug",
    hoverColorClass: "group-hover:text-brand-error",
  },
  {
    title: "Test Reporting",
    icon: "chart-bar",
    hoverColorClass: "group-hover:text-brand-secondary",
  },
  {
    title: "CI/CD Pipelines",
    icon: "git-branch",
    hoverColorClass: "group-hover:text-brand-primary",
  },
  {
    title: "Environments & Infrastructure",
    icon: "server",
    hoverColorClass: "group-hover:text-brand-secondary",
  },
  {
    title: "API Testing",
    icon: "code-bracket",
    hoverColorClass: "group-hover:text-brand-primary",
  },
  {
    title: "Performance Testing",
    icon: "bolt",
    hoverColorClass: "group-hover:text-brand-secondary",
  },
  {
    title: "Accessibility Testing",
    icon: "eye",
    hoverColorClass: "group-hover:text-brand-tertiary",
  },
  {
    title: "Data Validation",
    icon: "database",
    hoverColorClass: "group-hover:text-brand-tertiary",
  },
];

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

export function ExpertiseSection() {
  return (
    <section>
      <FadeIn>
        <hr className="section-divider" />
      </FadeIn>
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="grid w-full gap-4 sm:gap-5 md:grid-cols-2">
          <SlideIn direction="left" delay={0.1} className="h-full min-w-0">
            <div className="flex h-full min-w-0 flex-col rounded-sm border border-border bg-bg-card p-4 sm:p-5">
              <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
                Areas of Expertise
              </h2>
              <div className="mt-4 flex-1 grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-3 sm:grid-rows-3">
                {expertiseAreas.map((area, index) => (
                  <FadeIn
                    key={area.title}
                    delay={0.14 + index * 0.05}
                    className="h-full"
                    scale
                  >
                    <div className="expertise-tile group h-full rounded-sm border border-border bg-bg-elevated px-2.5 py-2.5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-hover sm:px-3 sm:py-3">
                      <div
                        className={`mx-auto flex h-12 w-12 items-center justify-center text-text-secondary transition-colors duration-300 ${area.hoverColorClass}`}
                      >
                        <ExpertiseIcon
                          name={area.icon}
                          className="h-8 w-8 transition duration-300 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-2 text-[11px] font-medium text-text-secondary sm:text-xs">
                        {area.title}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.15} className="h-full min-w-0">
            <div className="flex h-full min-w-0 flex-col rounded-sm border border-border bg-bg-card p-4 sm:p-5">
              <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
                How I Work
              </h2>
              <div className="mt-4 flex flex-1 flex-col gap-5">
                {proofItems.map((item, index) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                      0{index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
