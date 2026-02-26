import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2 lg:grid-cols-[1fr_420px]">
        {/* Left: Content */}
        <div>
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-text-muted">
              Software QA Engineer
            </p>
            <h1 className="mt-3 text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
              Ben
              <br />
              <span className="text-accent">Armour.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-lg text-lg text-text-secondary">
              I build test automation, validate software across distributed
              environments, and own quality from test planning through release.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/case-studies"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-bg-primary transition-colors hover:bg-accent-hover"
              >
                View Case Studies
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-border-hover"
              >
                Get in Touch
              </Link>
            </div>
            <div className="mt-6 flex gap-5">
              <a
                href="https://linkedin.com/in/ben-armour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:armourbl@mail.uc.edu"
                className="text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                Email ↗
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right: Terminal visual */}
        <FadeIn delay={0.3}>
          <div className="rounded-xl border border-border bg-bg-card font-mono text-sm">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-text-muted">
                cypress run --headless
              </span>
            </div>
            {/* Output */}
            <div className="space-y-1.5 p-4">
              <p className="text-text-muted">Running 5 of 5 specs...</p>
              <p className="mt-2">
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
              <div className="mt-4 border-t border-border pt-3">
                <p className="text-green-400">5 passing (9.5s)</p>
                <p className="mt-0.5 text-xs text-text-muted">
                  All specs passed ✓
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
