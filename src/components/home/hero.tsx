import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

const expertiseAreas = [
  {
    title: "Test Automation",
    logo: "https://cdn.simpleicons.org/selenium",
  },
  {
    title: "Testing Strategy",
    logo: "https://cdn.simpleicons.org/cypress",
  },
  {
    title: "Defect Lifecycle",
    logo: "https://cdn.simpleicons.org/jira",
  },
  {
    title: "Environments & Infrastructure",
    logo: "https://cdn.simpleicons.org/docker",
  },
  {
    title: "CI & Tooling",
    logo: "https://cdn.simpleicons.org/githubactions",
  },
  {
    title: "Collaboration & Documentation",
    logo: "https://cdn.simpleicons.org/confluence",
  },
];

const capabilities = expertiseAreas.map((area) => area.title);

export function Hero() {
  const tripleCaps = [...capabilities, ...capabilities, ...capabilities];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid gap-5 lg:grid-cols-[350px_minmax(0,42rem)] lg:justify-center">
        {/* Profile Card — spans both rows on desktop */}
        <FadeIn className="h-full lg:row-span-2">
          <div className="flex h-full flex-col gap-5 rounded-lg border border-border bg-bg-card p-5">
            {/* Terminal visual */}
            <div className="rounded-lg bg-bg-elevated font-mono text-xs">
              <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                <span className="ml-1.5 text-[10px] text-text-muted">
                  cypress run --headless
                </span>
              </div>
              <div className="space-y-1 p-3">
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
              <h1 className="mt-2 text-3xl font-bold text-text-primary">
                Ben Armour
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                I build test automation, validate software across distributed
                environments, and own quality from test planning through release.
              </p>
            </div>

            {/* Actions — pushed to bottom */}
            <div className="mt-auto flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/case-studies"
                  className="rounded-md bg-accent px-4 py-2.5 text-xs font-medium text-bg-primary transition-colors hover:bg-accent-hover"
                >
                  View Case Studies
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md border border-border px-4 py-2.5 text-xs font-medium text-text-primary transition-colors hover:border-border-hover"
                >
                  Get in Touch
                </Link>
              </div>
              <div className="flex gap-4">
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
          <div className="h-full rounded-lg border border-border bg-bg-card p-5">
            <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
              Areas of Expertise
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {expertiseAreas.map((area) => (
                <div
                  key={area.title}
                  className="group rounded-md border border-border bg-bg-elevated px-3 py-3 text-center transition-all duration-300 hover:border-border-hover hover:shadow-[4px_4px_10px_4px_rgba(255,136,51,0.05)]"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center">
                    <img
                      src={area.logo}
                      alt=""
                      aria-hidden="true"
                      width={26}
                      height={26}
                      className="h-6 w-6 object-contain grayscale opacity-75 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-2 text-xs font-medium text-text-secondary">
                    {area.title}
                  </p>
                </div>
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
