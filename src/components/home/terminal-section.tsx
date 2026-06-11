import { FadeIn } from "@/components/fade-in";
import { SlideIn } from "@/components/slide-in";
import { RegressionTerminal } from "@/components/home/regression-terminal";

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

export function TerminalSection() {
  return (
    <section>
      <FadeIn>
        <hr className="section-divider" />
      </FadeIn>
      <div className="mx-auto max-w-7xl px-6 py-6 md:py-8">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
            How I Work
          </h2>
        </FadeIn>
        <div className="mt-4 grid gap-4 sm:gap-5 lg:grid-cols-[2fr_3fr]">
          <SlideIn direction="left" delay={0.1} className="h-full min-w-0">
            <div className="flex h-full min-w-0 flex-col justify-between gap-5 rounded-sm border border-border bg-bg-card p-4 sm:p-5">
              {proofItems.map((item, index) => (
                <div key={item.title} className="flex gap-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                    {String(index + 1).padStart(2, "0")}
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
          </SlideIn>
          <SlideIn direction="right" delay={0.15} className="relative h-full min-w-0">
            <div className="h-full lg:absolute lg:inset-0">
              <RegressionTerminal />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
