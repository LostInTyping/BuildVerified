import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

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

export function BottomSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-8 md:py-10">
        <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
          {/* How I Work Card */}
          <FadeIn className="h-full">
            <div className="h-full rounded-lg border border-border bg-bg-card p-6">
              <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
                How I Work
              </h2>
              <div className="mt-5 space-y-4">
                {proofItems.map((item) => (
                  <div key={item.title}>
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

          {/* CTA Card */}
          <FadeIn delay={0.1} className="h-full">
            <div className="flex h-full flex-col rounded-lg border border-border bg-bg-card p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-text-muted">
                Available for new opportunities
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight">
                Let&apos;s work{" "}
                <span className="text-accent">together.</span>
              </h2>
              <p className="mt-3 text-sm text-text-secondary">
                Looking for a QA engineer who owns quality end-to-end?
                I&apos;m open to on-site, hybrid, and remote roles, and willing
                to relocate within the US or abroad.
              </p>
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Link
                  href="/contact"
                  className="ghost-btn ghost-btn-accent"
                >
                  Get in Touch
                </Link>
                <a
                  href="https://linkedin.com/in/ben-armour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-btn ghost-btn-neutral"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
