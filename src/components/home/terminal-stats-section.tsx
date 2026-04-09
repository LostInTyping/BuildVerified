import { FadeIn } from "@/components/fade-in";
import { SlideIn } from "@/components/slide-in";
import { RegressionTerminal } from "@/components/home/regression-terminal";

type ToolCategory = "test" | "lang" | "framework" | "infra" | "reporting";

const toolColors: Record<ToolCategory, string> = {
  test: "var(--color-brand-primary)",
  lang: "var(--color-brand-secondary)",
  framework: "var(--color-brand-tertiary)",
  infra: "var(--color-brand-primary-fixed)",
  reporting: "var(--color-brand-error)",
};

const tools: { name: string; category: ToolCategory }[] = [
  { name: "Cypress", category: "test" },
  { name: "Playwright", category: "test" },
  { name: "Jest", category: "test" },
  { name: "Postman", category: "test" },
  { name: "JavaScript", category: "lang" },
  { name: "TypeScript", category: "lang" },
  { name: "Python", category: "lang" },
  { name: "SQL", category: "lang" },
  { name: "React", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "PostgreSQL", category: "framework" },
  { name: "MongoDB", category: "framework" },
  { name: "GitHub Actions", category: "infra" },
  { name: "Docker", category: "infra" },
  { name: "Git", category: "infra" },
  { name: "GitHub", category: "reporting" },
  { name: "Jira", category: "reporting" },
  { name: "Confluence", category: "reporting" },
  { name: "Tableau", category: "reporting" },
];

export function TerminalStatsSection() {
  return (
    <section>
      <FadeIn>
        <hr className="section-divider" />
      </FadeIn>
      <div className="mx-auto max-w-7xl px-6 py-6 md:py-8">
        <SlideIn direction="left" delay={0.1}>
          <RegressionTerminal />
        </SlideIn>

        {/* Tools marquee */}
        <FadeIn delay={0.2}>
          <div className="mt-6">
            <div className="marquee-viewport">
              <div className="marquee-strip">
                {[0, 1].map((copyIndex) => (
                  <div
                    key={copyIndex}
                    className="marquee-group"
                    aria-hidden={copyIndex === 1}
                  >
                    {tools.map((t) => {
                      const color = toolColors[t.category];
                      return (
                        <span
                          key={`${t.name}-${copyIndex}`}
                          className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-sm border bg-bg-card px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-text-primary"
                          style={{ borderColor: `color-mix(in srgb, ${color} 19%, transparent)` }}
                        >
                          <span
                            aria-hidden="true"
                            className="inline-block h-1.5 w-1.5 rounded-full"
                            style={{
                              backgroundColor: color,
                              boxShadow: `0 0 6px color-mix(in srgb, ${color} 38%, transparent)`,
                            }}
                          />
                          {t.name}
                        </span>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
