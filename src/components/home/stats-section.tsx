import { FadeIn } from "@/components/fade-in";

const stats = [
  { value: "3.5+", label: "Years of QA experience" },
  { value: "2", label: "Companies" },
  { value: "20+", label: "Clients" },
  { value: "1000+", label: "Automated test cases" },
  { value: "5+", label: "Frameworks" },
];

export function StatsSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {stats.map((stat, i) => (
            <FadeIn
              key={stat.label}
              delay={i * 0.05}
              className={`h-full ${i === stats.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <div className="h-full rounded-lg border border-border bg-bg-card p-4 text-center">
                <p className="text-3xl font-bold text-accent md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs text-text-muted">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
