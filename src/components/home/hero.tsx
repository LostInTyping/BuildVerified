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
    hoverColorClass: "group-hover:text-[#7BCB5C]",
  },
  {
    title: "Testing Strategy",
    icon: "cypress",
    hoverColorClass: "group-hover:text-[#7EE0B8]",
  },
  {
    title: "Defect Lifecycle",
    icon: "jira",
    hoverColorClass: "group-hover:text-[#66A3FF]",
  },
  {
    title: "Environments & Infrastructure",
    icon: "docker",
    hoverColorClass: "group-hover:text-[#63B3FF]",
  },
  {
    title: "CI & Tooling",
    icon: "githubactions",
    hoverColorClass: "group-hover:text-[#7DB7FF]",
  },
  {
    title: "Collaboration & Documentation",
    icon: "confluence",
    hoverColorClass: "group-hover:text-[#8AB8FF]",
  },
];

const capabilities = expertiseAreas.map((area) => area.title);

export function Hero() {
  const tripleCaps = [...capabilities, ...capabilities, ...capabilities];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-[350px_minmax(0,42rem)] lg:justify-center">
        {/* Profile Card — spans both rows on desktop */}
        <FadeIn className="h-full lg:row-span-2">
          <div className="flex h-full flex-col gap-4 rounded-lg border border-border bg-bg-card p-4 sm:gap-5 sm:p-5">
            {/* Terminal visual */}
            <div className="rounded-lg bg-bg-elevated font-mono text-[11px] sm:text-xs">
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
        <FadeIn delay={0.1} className="h-full">
          <div className="h-full rounded-lg border border-border bg-bg-card p-4 sm:p-5">
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
                      className={`mx-auto flex h-10 w-10 items-center justify-center text-white/95 transition-colors duration-300 ${area.hoverColorClass}`}
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
        <FadeIn delay={0.2} className="h-full">
          <div className="h-full overflow-hidden rounded-lg border border-border bg-bg-card p-5">
            <p className="text-sm leading-relaxed text-text-secondary">
              As a QA engineer, I specialize in building robust test automation
              frameworks, designing comprehensive test strategies, and ensuring
              software quality across the full development lifecycle.
            </p>
            <div className="-mx-5 mt-4 overflow-hidden border-t border-border px-5 pt-4">
              <div className="marquee-strip flex gap-3 whitespace-nowrap">
                {tripleCaps.map((cap, i) => (
                  <span
                    key={`${cap}-${i}`}
                    aria-hidden={i >= capabilities.length}
                    className="shrink-0 rounded-full border border-border px-3 py-1 text-xs text-text-muted"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
