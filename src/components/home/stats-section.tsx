import { FadeIn } from "@/components/fade-in";

const stats = [
  { value: "2+", label: "Years of QA experience" },
  { value: "3", label: "Companies" },
  { value: "100+", label: "Automated test cases" },
  { value: "5+", label: "Frameworks" },
];

export function StatsSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.05}>
              <div className="text-center">
                <p className="text-4xl font-bold text-accent md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
