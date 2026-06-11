import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SlideIn } from "@/components/slide-in";
import { AnimatedCounter } from "@/components/home/animated-counter";
import { ClientsCounter } from "@/components/home/clients-counter";
import { MarqueeChips } from "@/components/home/marquee-chips";

type Industry = "qsr" | "retail" | "gov" | "staffing" | "edu";

const industryColors: Record<Industry, string> = {
  qsr: "var(--color-brand-primary)",
  retail: "var(--color-brand-secondary)",
  gov: "var(--color-brand-tertiary)",
  staffing: "var(--color-brand-primary-fixed)",
  edu: "var(--color-brand-error)",
};

const clientsTyped: { name: string; industry: Industry }[] = [
  { name: "McDonald's", industry: "qsr" },
  { name: "Tim Hortons", industry: "qsr" },
  { name: "Taco Bell", industry: "qsr" },
  { name: "KFC", industry: "qsr" },
  { name: "Burger King", industry: "qsr" },
  { name: "Subway", industry: "qsr" },
  { name: "Firehouse Subs", industry: "qsr" },
  { name: "Popeyes", industry: "qsr" },
  { name: "Macy's", industry: "retail" },
  { name: "Ohio Sentencing Data Platform", industry: "gov" },
  { name: "Ohio Offense Code Portal", industry: "gov" },
  { name: "Risk Assessment System", industry: "gov" },
  { name: "Recertify", industry: "gov" },
  { name: "TTS", industry: "gov" },
  { name: "DRF-CoApp", industry: "gov" },
  { name: "Brooksource", industry: "staffing" },
  { name: "University of Cincinnati", industry: "edu" },
  { name: "Team Eval", industry: "edu" },
];

const metrics = [
  { target: 1000, suffix: "+", label: "automated tests", decimals: 0, accent: "var(--color-brand-primary)" },
  { target: 10, suffix: "+", label: "frameworks", decimals: 0, accent: "var(--color-brand-secondary)" },
  { target: 4, suffix: "+", label: "years experience", decimals: 0, accent: "var(--color-brand-tertiary)" },
];

const clientChips = clientsTyped.map((client) => ({
  label: client.name,
  color: industryColors[client.industry],
}));

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-4 text-center md:pt-16 md:pb-6">
        {/* H1 with gradient */}
        <FadeIn>
          <h1 className="gradient-text-brand font-display mt-6 inline-block text-5xl font-bold uppercase leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            Hi, I&rsquo;m Ben!
          </h1>
        </FadeIn>

        {/* Photo + spinner composition */}
        <FadeIn delay={0.25} className="relative mt-3 sm:mt-4 md:mt-5">
          <div className="spinner-group group/photo relative mx-auto aspect-square w-[340px] sm:w-[420px] md:w-[500px] lg:w-[560px]">
            {/* Conic backlight glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[2%] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, color-mix(in srgb, var(--color-brand-primary) 25%, transparent) 0%, color-mix(in srgb, var(--color-brand-secondary) 15%, transparent) 33%, color-mix(in srgb, var(--color-brand-tertiary) 14%, transparent) 66%, color-mix(in srgb, var(--color-brand-primary) 25%, transparent) 100%)",
                filter: "blur(28px)",
              }}
            />

            {/* Multi-segment spinning arcs */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="loader-spin-slow spinner-ring-pulse pointer-events-none absolute inset-[3%] h-[94%] w-[94%]"
              style={{ transformOrigin: "center" }}
            >
              <circle
                className="spinner-arc"
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="var(--color-brand-primary)"
                strokeWidth="0.6"
                strokeDasharray="45 80 30 146"
                strokeLinecap="round"
                opacity="0.85"
              />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="loader-spin-reverse spinner-ring-pulse pointer-events-none absolute inset-[6%] h-[88%] w-[88%]"
              style={{ transformOrigin: "center" }}
            >
              <circle
                className="spinner-arc"
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="var(--color-brand-secondary)"
                strokeWidth="0.5"
                strokeDasharray="25 55 20 60 15 126"
                strokeLinecap="round"
                opacity="0.8"
                strokeDashoffset="40"
              />
            </svg>

            {/* Photo */}
            <div className="absolute inset-[10%] overflow-hidden rounded-full bg-bg-primary">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "conic-gradient(from 0deg, color-mix(in srgb, var(--color-brand-primary) 10%, transparent) 0%, color-mix(in srgb, var(--color-brand-primary-fixed) 8%, transparent) 15%, color-mix(in srgb, var(--color-brand-secondary) 7%, transparent) 33%, color-mix(in srgb, var(--color-brand-secondary) 6%, transparent) 45%, color-mix(in srgb, var(--color-brand-tertiary) 6%, transparent) 60%, color-mix(in srgb, var(--color-brand-tertiary) 5%, transparent) 80%, color-mix(in srgb, var(--color-brand-primary) 10%, transparent) 100%)",
                  filter: "blur(8px)",
                }}
              />
              <Image
                src="/headshot-cutout.webp"
                alt="Ben Armour"
                fill
                className="relative z-10 object-cover object-[65%_18%] scale-110 transition-all duration-700 group-hover/photo:scale-[1.14]"
                sizes="(min-width: 1024px) 460px, (min-width: 640px) 380px, 320px"
                priority
              />
            </div>

            {/* Static ring — breathing */}
            <div
              aria-hidden="true"
              className="ring-breathe pointer-events-none absolute inset-[10%] z-20 rounded-full"
              style={{ border: "1px solid color-mix(in srgb, var(--color-brand-tertiary) 35%, transparent)" }}
            />

            {/* Inner lilac arc — above photo */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="loader-spin-med spinner-ring-pulse pointer-events-none absolute inset-[9%] z-20 h-[82%] w-[82%]"
              style={{ transformOrigin: "center" }}
            >
              <circle
                className="spinner-arc"
                cx="50"
                cy="50"
                r="49"
                fill="none"
                stroke="var(--color-brand-tertiary)"
                strokeWidth="0.8"
                strokeLinecap="round"
                opacity="0.75"
                strokeDasharray="35 90 20 162"
                strokeDashoffset="100"
              />
            </svg>
          </div>

          {/* LEFT — subtitle + tagline + stamp */}
          <SlideIn direction="left" delay={0.4} className="absolute left-0 top-1/2 hidden w-[250px] -translate-y-1/2 flex-col gap-4 text-left lg:flex lg:left-2">
            <p className="font-display text-2xl italic leading-[1.05] text-brand-primary md:text-3xl lg:text-4xl">
              Software QA
              <br />
              Engineer
            </p>
            <p className="text-[14px] leading-[1.55] text-text-secondary">
              I bring{" "}
              <span className="font-display italic text-text-primary">
                reliability
              </span>{" "}
              to every release so teams can ship with{" "}
              <span className="font-display italic text-text-primary">
                confidence
              </span>
              .
              <br />
              <span className="font-mono text-[14px] uppercase tracking-[0.18em]">
                <span className="font-medium text-text-secondary">every</span>{" "}
                <span className="font-bold text-text-primary">Build</span><span className="font-bold text-brand-primary">Verified</span>.
              </span>
            </p>
          </SlideIn>

          {/* RIGHT — availability + location + CTA */}
          <SlideIn direction="right" delay={0.4} className="absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-4 text-right lg:flex lg:right-2">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-brand-secondary shadow-[0_0_8px_color-mix(in_srgb,var(--color-brand-secondary)_70%,transparent)]"
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-secondary">
                available for work
              </p>
            </div>
            <div className="flex flex-col items-end gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em]">
              <p className="text-text-secondary">immediate availability</p>
              <p className="text-text-secondary">contract · full-time</p>
            </div>
            <div aria-hidden="true" className="h-px w-12 bg-outline-variant" />
            <div className="flex flex-col items-end gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em]">
              <p className="text-text-secondary">Cincinnati, OH</p>
              <p className="text-text-secondary">on-site · hybrid · remote</p>
              <p className="text-text-secondary">open to relocation</p>
            </div>
          </SlideIn>
        </FadeIn>

        {/* Mobile fallback */}
        <div className="mt-6 flex flex-col items-center gap-4 text-center md:hidden">
          <p className="font-display text-xl italic text-brand-primary">
            Software QA Engineer
          </p>
          <p className="max-w-sm text-sm leading-[1.55] text-text-secondary">
            I bring{" "}
            <span className="font-display italic text-text-primary">
              reliability
            </span>{" "}
            to every release so teams can ship with{" "}
            <span className="font-display italic text-text-primary">
              confidence
            </span>
            .
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em]">
            <span className="font-medium text-text-secondary">every</span>{" "}
            <span className="font-bold text-text-primary">Build</span><span className="font-bold text-brand-primary">Verified</span>.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="/contact"
              className="ghost-btn ghost-btn-accent font-mono text-[11px] font-bold uppercase tracking-[0.18em]"
            >
              get in touch <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/portfolio"
              className="ghost-btn ghost-btn-neutral font-mono text-[11px] font-bold uppercase tracking-[0.18em]"
            >
              portfolio
            </Link>
          </div>
        </div>

        {/* Bottom panel: metrics + clients marquee */}
        <FadeIn delay={0.55} className="relative mt-8">
          {/* Metrics row with CTAs on edges */}
          <div className="hidden items-center justify-between py-6 md:flex">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent transition-colors hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              <span aria-hidden="true" className="transition-transform duration-200 ease-out group-hover:-translate-x-0.5">←</span>
              view portfolio
            </Link>
            <div className="flex items-center gap-8 lg:gap-12">
              {metrics.map((m, i) => (
                <div key={m.label} className="flex items-center gap-8 lg:gap-12">
                  <AnimatedCounter
                    target={m.target}
                    suffix={m.suffix}
                    label={m.label}
                    decimals={m.decimals}
                    valueClassName="font-display text-2xl font-bold leading-none tabular-nums sm:text-3xl"
                    valueStyle={{ color: m.accent }}
                    labelClassName="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-text-muted"
                  />
                  {i < metrics.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-outline-variant"
                    />
                  )}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent transition-colors hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              get in touch
              <span aria-hidden="true" className="transition-transform duration-200 ease-out group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
          {/* Mobile metrics — no side CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-6 py-4 sm:gap-8 md:hidden">
            {metrics.map((m, i) => (
              <div key={m.label} className="flex items-center gap-6 sm:gap-8">
                <AnimatedCounter
                  target={m.target}
                  suffix={m.suffix}
                  label={m.label}
                  decimals={m.decimals}
                  valueClassName="font-display text-2xl font-bold leading-none tabular-nums"
                  valueStyle={{ color: m.accent }}
                  labelClassName="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-text-muted"
                />
                {i < metrics.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-outline-variant"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Clients marquee with 20+ badge */}
          <hr className="section-divider mt-4" />
          <div className="relative pt-8">
            <div
              className="absolute left-1/2 top-0 z-10 inline-flex -translate-x-1/2 -translate-y-1/2 items-baseline gap-1.5 rounded-sm border border-brand-primary-fixed/60 bg-bg-primary px-3 py-1 shadow-[0_0_18px_color-mix(in_srgb,var(--color-brand-primary-fixed)_18%,transparent)]"
            >
              <ClientsCounter />
            </div>
            <MarqueeChips chips={clientChips} label="Clients and platforms tested" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
