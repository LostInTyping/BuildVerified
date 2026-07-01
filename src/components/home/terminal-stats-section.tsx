import { FadeIn } from "@/components/fade-in";
import { SlideIn } from "@/components/slide-in";
import { RegressionTerminal } from "@/components/home/regression-terminal";
import { MarqueeChips } from "@/components/home/marquee-chips";

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

const toolChips = tools.map((tool) => ({
  label: tool.name,
  color: toolColors[tool.category],
}));

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
            <MarqueeChips chips={toolChips} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
