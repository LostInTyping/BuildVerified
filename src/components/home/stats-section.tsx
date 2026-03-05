import { AnimatedCounter } from "@/components/home/animated-counter";
import { FadeIn } from "@/components/fade-in";

const stats = [
  { target: 3.5, suffix: "+", label: "Years of QA experience", decimals: 1 },
  { target: 2, suffix: "", label: "Companies", decimals: 0 },
  { target: 20, suffix: "+", label: "Clients", decimals: 0 },
  { target: 1000, suffix: "+", label: "Automated test cases", decimals: 0 },
  { target: 5, suffix: "+", label: "Frameworks", decimals: 0 },
];

const selectedBrandsAndPrograms = [
  "Brooksource",
  "Macy's",
  "Ohio Sentencing Data Platform (OSDP)",
  "Offender Risk Assessment & Case Planning (20+ States)",
  "DRF-CoApp",
  "McDonald's",
  "Taco Bell",
  "KFC",
  "Tim Hortons",
  "Burger King",
];

const valueClassName = "text-3xl font-bold text-accent md:text-4xl";
const labelClassName = "mt-1.5 text-xs text-text-muted";

export function StatsSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-8 md:py-10">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {stats.map((stat, i) => (
            <FadeIn
              key={stat.label}
              delay={i * 0.05}
              className={`h-full ${i === stats.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <div className="h-full rounded-lg border border-border bg-bg-card p-4 text-center">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                  decimals={stat.decimals}
                  valueClassName={valueClassName}
                  labelClassName={labelClassName}
                />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-5 marquee-viewport">
            <div className="marquee-strip">
              {[0, 1].map((copyIndex) => (
                <div
                  key={copyIndex}
                  className="marquee-group"
                  aria-hidden={copyIndex === 1}
                >
                  {selectedBrandsAndPrograms.map((item) => (
                    <span
                      key={`${item}-${copyIndex}`}
                      className="shrink-0 whitespace-nowrap rounded-full border border-border bg-bg-elevated px-2.5 py-1 text-[11px] text-text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
