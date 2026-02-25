import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold">Let&apos;s work together</h2>
        <p className="mt-4 text-text-secondary">
          Looking for a QA engineer who owns quality end-to-end? Let&apos;s
          talk.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-medium text-bg-primary transition-colors hover:bg-accent-hover"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
