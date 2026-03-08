import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { ExpertiseIcon, type ExpertiseIconName } from "@/components/home/expertise-icons";
import { RegressionTerminal } from "@/components/home/regression-terminal";

const expertiseAreas: Array<{
  title: string;
  icon: ExpertiseIconName;
  hoverColorClass: string;
}> = [
    {
      title: "Test Automation",
      icon: "beaker",
      hoverColorClass: "group-hover:text-[#4ade80]",
    },
    {
      title: "Testing Strategy",
      icon: "clipboard-check",
      hoverColorClass: "group-hover:text-[#2dd4bf]",
    },
    {
      title: "Defect Lifecycle",
      icon: "bug",
      hoverColorClass: "group-hover:text-[#f87171]",
    },
    {
      title: "Environments & Infrastructure",
      icon: "server",
      hoverColorClass: "group-hover:text-[#60a5fa]",
    },
    {
      title: "CI & Tooling",
      icon: "git-branch",
      hoverColorClass: "group-hover:text-[#a78bfa]",
    },
    {
      title: "Collaboration & Documentation",
      icon: "users",
      hoverColorClass: "group-hover:text-[#fbbf24]",
    },
    {
      title: "API Testing",
      icon: "code-bracket",
      hoverColorClass: "group-hover:text-[#fb923c]",
    },
    {
      title: "Performance Testing",
      icon: "bolt",
      hoverColorClass: "group-hover:text-[#22d3ee]",
    },
    {
      title: "Security Testing",
      icon: "shield-check",
      hoverColorClass: "group-hover:text-[#f472b6]",
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

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-8 md:pt-12 md:pb-10">
      <div className="grid w-full gap-4 sm:gap-5 md:grid-cols-[300px_minmax(0,1fr)] lg:grid-cols-[350px_minmax(0,1fr)]">
        <FadeIn className="h-full min-w-0">
          <div className="flex h-full min-w-0 flex-col rounded-lg border border-border bg-bg-card p-4 sm:p-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-accent-sm">
              <Image
                src="/headshot.jpg"
                alt="Ben Armour"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 350px, (min-width: 768px) 300px, 100vw"
                priority
              />
            </div>
            <div className="flex flex-col gap-3 pt-4 sm:gap-4 sm:pt-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-text-muted">
                  Software QA Engineer
                </p>
                <h1 className="mt-1 text-2xl font-bold text-text-primary sm:mt-1.5 sm:text-3xl">
                  Ben Armour
                </h1>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                I bring reliability to every release so teams can ship with
                confidence. Every build, verified.
              </p>
            </div>

            <div className="mt-auto pt-2">
              <Link
                href="/portfolio"
                className="ghost-btn ghost-btn-accent w-full"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="h-full min-w-0">
          <RegressionTerminal />
        </FadeIn>
      </div>

      <div className="mt-4 grid w-full gap-4 sm:mt-5 sm:gap-5 md:grid-cols-2">
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
    </section>
  );
}
