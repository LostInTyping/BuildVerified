import { FadeIn } from "@/components/fade-in";
import { ExpertiseIcon, type ExpertiseIconName } from "@/components/home/expertise-icons";

const expertiseAreas: Array<{
  title: string;
  icon: ExpertiseIconName;
  hoverColorClass: string;
}> = [
  {
    title: "Test Automation",
    icon: "beaker",
    hoverColorClass: "group-hover:text-green-400",
  },
  {
    title: "Defect Lifecycle",
    icon: "bug",
    hoverColorClass: "group-hover:text-red-400",
  },
  {
    title: "Test Reporting",
    icon: "chart-bar",
    hoverColorClass: "group-hover:text-teal-400",
  },
  {
    title: "CI/CD Pipelines",
    icon: "git-branch",
    hoverColorClass: "group-hover:text-violet-400",
  },
  {
    title: "Environments & Infrastructure",
    icon: "server",
    hoverColorClass: "group-hover:text-blue-400",
  },
  {
    title: "API Testing",
    icon: "code-bracket",
    hoverColorClass: "group-hover:text-orange-400",
  },
  {
    title: "Performance Testing",
    icon: "bolt",
    hoverColorClass: "group-hover:text-cyan-400",
  },
  {
    title: "Accessibility Testing",
    icon: "eye",
    hoverColorClass: "group-hover:text-amber-400",
  },
  {
    title: "Data Validation",
    icon: "database",
    hoverColorClass: "group-hover:text-pink-400",
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
      <div className="mx-auto max-w-6xl px-6 py-6 md:py-8">
        <div className="grid w-full gap-4 sm:gap-5 md:grid-cols-2">
          <FadeIn delay={0.2} className="h-full min-w-0">
            <div className="flex h-full min-w-0 flex-col rounded-lg border border-border bg-bg-card p-4 sm:p-5">
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
                    <div className="expertise-tile group h-full rounded-md border border-border bg-bg-elevated px-2.5 py-2.5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-hover sm:px-3 sm:py-3">
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
          </FadeIn>

          <FadeIn delay={0.25} className="h-full min-w-0">
            <div className="flex h-full min-w-0 flex-col rounded-lg border border-border bg-bg-card p-4 sm:p-5">
              <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
                How I Work
              </h2>
              <div className="mt-4 flex-1 flex flex-col justify-between">
                {proofItems.map((item) => (
                  <div key={item.title} className="border-l-2 border-accent pl-4">
                    <h3 className="text-sm font-semibold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
