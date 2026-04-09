import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SlideIn } from "@/components/slide-in";
import { AnimatedCounter } from "@/components/home/animated-counter";
import { ClientsCounter } from "@/components/home/clients-counter";

type Industry = "qsr" | "retail" | "gov" | "staffing" | "edu";

const industryColors: Record<Industry, string> = {
  qsr: "#ff7439",
  retail: "#00dbe9",
  gov: "#ecb1ff",
  staffing: "#ffad8e",
  edu: "#ff716c",
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
  { name: "DRF-CoApp", industry: "gov" },
  { name: "Brooksource", industry: "staffing" },
  { name: "University of Cincinnati", industry: "edu" },
];

const metrics = [
  { target: 1000, suffix: "+", label: "automated tests", decimals: 0, accent: "#ff7439" },
  { target: 10, suffix: "+", label: "frameworks", decimals: 0, accent: "#00dbe9" },
  { target: 3.5, suffix: "+", label: "years experience", decimals: 1, accent: "#ecb1ff" },
];

function ClientsMarqueeChips() {
  return (
    <div className="marquee-viewport">
      <div className="marquee-strip">
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            className="marquee-group"
            aria-hidden={copyIndex === 1}
          >
            {clientsTyped.map((client) => {
              const color = industryColors[client.industry];
              return (
                <span
                  key={`${client.name}-${copyIndex}`}
                  className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-sm border bg-[#131313] px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-text-primary"
                  style={{ borderColor: `${color}30` }}
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: color,
                      boxShadow: `0 0 6px ${color}60`,
                    }}
                  />
                  {client.name}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-8 text-center md:pt-16 md:pb-12">
        {/* H1 with gradient */}
        <FadeIn>
          <h1
            className="font-display mt-6 inline-block text-5xl font-bold uppercase leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[6.5rem]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ff7439 0%, #ffad8e 65%, #e7e5e4 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
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
                  "conic-gradient(from 0deg, rgba(255,116,57,0.25) 0%, rgba(0,219,233,0.15) 33%, rgba(236,177,255,0.14) 66%, rgba(255,116,57,0.25) 100%)",
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
                stroke="#ff7439"
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
                stroke="#00dbe9"
                strokeWidth="0.5"
                strokeDasharray="25 55 20 60 15 126"
                strokeLinecap="round"
                opacity="0.8"
                strokeDashoffset="40"
              />
            </svg>

            {/* Photo */}
            <div className="absolute inset-[10%] overflow-hidden rounded-full bg-[#0e0e0e]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(255,116,57,0.1) 0%, rgba(255,173,142,0.08) 15%, rgba(0,219,233,0.07) 33%, rgba(0,219,233,0.06) 45%, rgba(236,177,255,0.06) 60%, rgba(236,177,255,0.05) 80%, rgba(255,116,57,0.1) 100%)",
                  filter: "blur(8px)",
                }}
              />
              <Image
                src="/headshot-cutout.png"
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
              style={{ border: "1px solid rgba(236, 177, 255, 0.35)" }}
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
                stroke="#ecb1ff"
                strokeWidth="0.8"
                strokeLinecap="round"
                opacity="0.75"
                strokeDasharray="35 90 20 162"
                strokeDashoffset="100"
              />
            </svg>
          </div>

          {/* LEFT — subtitle + tagline + stamp */}
          <SlideIn direction="left" delay={0.4} className="absolute left-0 top-1/2 hidden w-[250px] -translate-y-1/2 flex-col gap-4 text-left md:flex lg:left-2">
            <p className="font-display text-2xl italic leading-[1.05] text-[#ff7439] md:text-3xl lg:text-4xl">
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
                <span className="font-bold text-text-primary">Build</span><span className="font-bold text-[#ff7439]">Verified</span>.
              </span>
            </p>
          </SlideIn>

          {/* RIGHT — availability + location + CTA */}
          <SlideIn direction="right" delay={0.4} className="absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-4 text-right md:flex lg:right-2">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-[#00dbe9] shadow-[0_0_8px_rgba(0,219,233,0.7)]"
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#00dbe9]">
                available for work
              </p>
            </div>
            <div className="flex flex-col items-end gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em]">
              <p className="text-text-secondary">immediate availability</p>
              <p className="text-text-secondary">contract · full-time</p>
            </div>
            <div aria-hidden="true" className="h-px w-12 bg-[#484848]" />
            <div className="flex flex-col items-end gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em]">
              <p className="text-text-secondary">Cincinnati, OH</p>
              <p className="text-text-secondary">on-site · hybrid · remote</p>
              <p className="text-text-secondary">open to relocation</p>
            </div>
          </SlideIn>
        </FadeIn>

        {/* Mobile fallback */}
        <div className="mt-6 flex flex-col items-center gap-4 text-center md:hidden">
          <p className="font-display text-xl italic text-[#ff7439]">
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
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">
            every build, <span className="text-[#ff7439]">verified</span>.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-br from-[#ff7439] to-[#fc5b00] px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:shadow-[0_0_18px_rgba(255,116,57,0.4)]"
            >
              get in touch <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-sm border border-[#484848] px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-text-secondary transition-colors hover:text-text-primary"
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
              className="group inline-flex items-center gap-2 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#ff7439] transition-colors hover:text-[#ff9971] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7439]"
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
                    valueClassName={`font-display text-2xl font-bold leading-none tabular-nums sm:text-3xl text-[${m.accent}]`}
                    labelClassName="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-text-muted"
                  />
                  {i < metrics.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-[#484848]"
                    />
                  )}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#ff7439] transition-colors hover:text-[#ff9971] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7439]"
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
                  valueClassName={`font-display text-2xl font-bold leading-none tabular-nums text-[${m.accent}]`}
                  labelClassName="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-text-muted"
                />
                {i < metrics.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-[#484848]"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Clients marquee with 20+ badge */}
          <hr className="section-divider mt-4" />
          <div className="relative pt-8">
            <div
              className="absolute left-1/2 top-0 z-10 inline-flex -translate-x-1/2 -translate-y-1/2 items-baseline gap-1.5 rounded-sm border border-[#ffad8e]/60 bg-[#0e0e0e] px-3 py-1 shadow-[0_0_18px_rgba(255,173,142,0.18)]"
            >
              <ClientsCounter />
            </div>
            <ClientsMarqueeChips />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
