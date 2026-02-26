import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-text-muted">
          Available for new opportunities
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
          Let&apos;s work
          <br />
          <span className="text-accent">together.</span>
        </h2>
        <p className="mt-6 max-w-lg text-text-secondary">
          Looking for a QA engineer who owns quality end-to-end? I&apos;m
          currently open to new roles and project work.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-accent px-8 py-3 text-sm font-medium text-bg-primary transition-colors hover:bg-accent-hover"
          >
            Get in Touch
          </Link>
          <a
            href="https://linkedin.com/in/ben-armour"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-8 py-3 text-sm font-medium text-text-primary transition-colors hover:border-border-hover"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
