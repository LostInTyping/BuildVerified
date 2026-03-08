import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { TestimonialCarousel } from "@/components/home/testimonial-carousel";

export function BottomSection() {
  return (
    <section>
      <hr className="section-divider" />
      <div className="mx-auto max-w-6xl px-6 py-6 md:py-8">
        <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
          {/* Testimonials */}
          <FadeIn className="h-full">
            <TestimonialCarousel />
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
