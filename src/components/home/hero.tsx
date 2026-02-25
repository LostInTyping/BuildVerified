import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        Ben Armour
      </p>
      <h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">
        Software QA Engineer
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-text-secondary">
        I build test automation, validate software across distributed
        environments, and own quality from test planning through release.
      </p>
      <div className="mt-8 flex gap-4">
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
    </section>
  );
}
