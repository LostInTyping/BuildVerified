import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/home/animated-counter";
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
          <div className="flex h-full min-w-0 flex-col rounded-lg border border-border bg-bg-card p-4 sm:p-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-[0_0_12px_rgba(96,165,250,0.3)]">
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

            <div className="mt-auto flex flex-row gap-5 pt-2">
              <Link
                href="/portfolio"
                className="ghost-btn ghost-btn-accent flex-1"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="ghost-btn ghost-btn-neutral flex-1"
              >
                Get in Touch
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
                  scale
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
            <div className="grid grid-cols-3 gap-4 py-2">
              <AnimatedCounter target={6} suffix="+" label="Enterprise Programs" />
              <AnimatedCounter target={148} suffix="+" label="Regression Tests" />
              <AnimatedCounter target={20} suffix="+" label="State Deployments" />
            </div>
            <div className="-mx-5 mt-auto border-t border-border px-5 pt-4">
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
