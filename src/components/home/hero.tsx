import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Ben Armour
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Software QA Engineer
        </h1>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="mt-6 max-w-2xl text-lg text-text-secondary">
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
      </FadeIn>
    </section>
  );
}
