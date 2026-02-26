import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { ExpertiseIcon, type ExpertiseIconName } from "@/components/home/expertise-icons";

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
        {/* Profile Card — spans both rows on desktop */}
        <FadeIn className="h-full min-w-0 md:row-span-2">
          <div className="flex h-full min-w-0 flex-col gap-4 rounded-lg border border-border bg-bg-card p-4 sm:gap-5 sm:p-5">
            {/* Terminal visual */}
            <div className="overflow-x-auto rounded-lg bg-bg-elevated font-mono text-[11px] sm:text-xs">
              <div className="flex items-center gap-1.5 border-b border-border px-2.5 py-1.5 sm:px-3 sm:py-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                <span className="ml-1.5 text-[10px] text-text-muted">
                  cypress run --headless
                </span>
              </div>
              <div className="space-y-0.5 p-2.5 sm:space-y-1 sm:p-3">
                <p className="text-text-muted">Running 5 of 5 specs...</p>
                <p>
                  <span className="text-green-400">✓</span>{" "}
                  <span className="text-text-secondary">auth › login flow</span>{" "}
                  <span className="text-text-muted">(2.3s)</span>
                </p>
                <p>
                  <span className="text-green-400">✓</span>{" "}
                  <span className="text-text-secondary">
                    checkout › cart flow
                  </span>{" "}
                  <span className="text-text-muted">(1.8s)</span>
                </p>
                <p>
                  <span className="text-green-400">✓</span>{" "}
                  <span className="text-text-secondary">user › creation</span>{" "}
                  <span className="text-text-muted">(0.9s)</span>
                </p>
                <p>
                  <span className="text-green-400">✓</span>{" "}
                  <span className="text-text-secondary">api › endpoints</span>{" "}
                  <span className="text-text-muted">(0.4s)</span>
                </p>
                <p>
                  <span className="text-green-400">✓</span>{" "}
                  <span className="text-text-secondary">
                    regression › smoke suite
                  </span>{" "}
                  <span className="text-text-muted">(4.1s)</span>
                </p>
                <div className="mt-2 border-t border-border pt-2">
                  <p className="text-green-400">5 passing (9.5s)</p>
                </div>
              </div>
            </div>

            {/* Identity */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-text-muted">
                Software QA Engineer
              </p>
              <h1 className="mt-1.5 text-2xl font-bold text-text-primary sm:mt-2 sm:text-3xl">
                Ben Armour
              </h1>
              <p className="mt-2.5 text-sm leading-relaxed text-text-secondary sm:mt-3">
                I build test automation, validate software across distributed
                environments, and own quality from test planning through release.
              </p>
            </div>

            {/* Actions — pushed to bottom */}
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

        {/* Expertise Card */}
        <FadeIn delay={0.1} className="h-full min-w-0">
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

        {/* Content Card */}
        <FadeIn delay={0.2} className="h-full min-w-0">
          <div className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-bg-card p-5">
            <p className="text-sm leading-relaxed text-text-secondary">
              As a QA engineer, I specialize in building robust test automation
              frameworks, designing comprehensive test strategies, and ensuring
              software quality across enterprise and public-sector systems.
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
