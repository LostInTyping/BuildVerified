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
    icon: "selenium",
    hoverColorClass: "group-hover:text-[#43B02A]",
  },
  {
    title: "Testing Strategy",
    icon: "cypress",
    hoverColorClass: "group-hover:text-[#69D3A7]",
  },
  {
    title: "Defect Lifecycle",
    icon: "jira",
    hoverColorClass: "group-hover:text-[#2684FF]",
  },
  {
    title: "Environments & Infrastructure",
    icon: "docker",
    hoverColorClass: "group-hover:text-[#2496ED]",
  },
  {
    title: "CI & Tooling",
    icon: "githubactions",
    hoverColorClass: "group-hover:text-[#2088FF]",
  },
  {
    title: "Collaboration & Documentation",
    icon: "confluence",
    hoverColorClass: "group-hover:text-[#1868DB]",
  },
];

const selectedBrandsAndPrograms = [
  "Brooksource",
  "Macy's",
  "Ohio Sentencing Data Platform (OSDP)",
  "Offender Risk Assessment & Case Planning (20+ States)",
  "DRF-CoApp",
  "McDonald's",
  "Taco Bell",
  "KFC",
  "Tim Hortons",
  "Burger King",
];

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-8 md:pt-12 md:pb-10">
      <div className="grid w-full gap-4 sm:gap-5 md:grid-cols-[300px_minmax(0,1fr)] lg:grid-cols-[350px_minmax(0,1fr)]">
        <FadeIn className="h-full min-w-0">
          <div className="flex h-full min-w-0 flex-col gap-4 rounded-lg border border-border bg-bg-card p-4 sm:gap-5 sm:p-5">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-elevated sm:h-16 sm:w-16">
                  <span className="text-lg font-bold tracking-wider text-text-muted sm:text-xl">BA</span>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-text-muted">
                    Software QA Engineer
                  </p>
                  <h1 className="mt-0.5 text-2xl font-bold text-text-primary sm:mt-1 sm:text-3xl">
                    Ben Armour
                  </h1>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                I bring structure to software quality so teams can move quickly
                without sacrificing reliability.
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-2.5 sm:gap-3">
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                <Link
                  href="/case-studies"
                  className="basis-full rounded-md bg-accent px-3.5 py-2 text-center text-[11px] font-medium text-bg-primary transition-colors hover:bg-accent-hover sm:basis-auto sm:px-4 sm:py-2.5 sm:text-xs"
                >
                  View Case Studies
                </Link>
                <Link
                  href="/contact"
                  className="basis-full rounded-md border border-border px-3.5 py-2 text-center text-[11px] font-medium text-text-primary transition-colors hover:border-border-hover sm:basis-auto sm:px-4 sm:py-2.5 sm:text-xs"
                >
                  Get in Touch
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://linkedin.com/in/ben-armour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text-muted transition-colors hover:text-text-primary"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="mailto:armourbl@mail.uc.edu"
                  className="text-xs text-text-muted transition-colors hover:text-text-primary"
                >
                  Email ↗
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="h-full min-w-0">
          <RegressionTerminal />
        </FadeIn>
      </div>

      <div className="mt-4 grid w-full gap-4 sm:mt-5 sm:gap-5 md:grid-cols-2">
        <FadeIn delay={0.2} className="h-full min-w-0">
          <div className="h-full min-w-0 rounded-lg border border-border bg-bg-card p-4 sm:p-5">
            <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
              Areas of Expertise
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-2.5 sm:grid-cols-3">
              {expertiseAreas.map((area, index) => (
                <FadeIn
                  key={area.title}
                  delay={0.14 + index * 0.05}
                  className="h-full"
                >
                  <div className="expertise-tile group h-full rounded-md border border-border bg-bg-elevated px-2.5 py-2.5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-hover sm:px-3 sm:py-3">
                    <div
                      className={`mx-auto flex h-10 w-10 items-center justify-center text-text-secondary transition-colors duration-300 ${area.hoverColorClass}`}
                    >
                      <ExpertiseIcon
                        name={area.icon}
                        className="h-6 w-6 transition duration-300 group-hover:scale-105"
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
          <div className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-bg-card p-5">
            <p className="text-sm leading-relaxed text-text-secondary">
              My expertise lies in building resilient test automation for
              large-scale enterprise systems. From establishing CI/CD testing
              pipelines to validating complex workflows, I bring a systematic
              approach to software quality.
            </p>
            <div className="-mx-5 mt-auto border-t border-border px-5 pt-4">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
                Selected Brands & Programs
              </p>
              <div className="marquee-viewport">
                <div className="marquee-strip">
                  {[0, 1].map((copyIndex) => (
                    <div
                      key={copyIndex}
                      className="marquee-group"
                      aria-hidden={copyIndex === 1}
                    >
                      {selectedBrandsAndPrograms.map((item) => (
                        <span
                          key={`${item}-${copyIndex}`}
                          className="shrink-0 whitespace-nowrap rounded-full border border-border bg-bg-elevated px-2.5 py-1 text-[11px] text-text-secondary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
