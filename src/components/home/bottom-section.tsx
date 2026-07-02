import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { ArrowUpRightIcon } from "@/components/icons";
import { SlideIn } from "@/components/slide-in";
import { TestimonialCarousel } from "@/components/home/testimonial-carousel";
import { site } from "@/lib/site";

export function BottomSection() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-4 md:py-6">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
            Testimonials
          </h2>
          <p className="font-display mt-1 text-2xl italic text-text-primary sm:text-3xl">
            From teams I&apos;ve{" "}
            <span className="text-brand-primary">shipped with.</span>
          </p>
        </FadeIn>
        <div className="mt-4 grid gap-5 lg:grid-cols-[2fr_1fr]">
          {/* Testimonials */}
          <SlideIn direction="left" delay={0.1} className="h-full min-w-0">
            <TestimonialCarousel />
          </SlideIn>

          {/* CTA Card */}
          <SlideIn direction="right" delay={0.15} className="h-full min-w-0">
            <div className="flex h-full flex-col rounded-sm border border-border bg-bg-card p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-text-muted">
                Available for new opportunities
              </p>
              <h2 className="gradient-text-brand font-display mt-4 inline-block text-3xl font-bold leading-tight">
                Let&apos;s work together.
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
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-btn ghost-btn-neutral"
                >
                  LinkedIn
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
