import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { RegressionTerminal } from "@/components/home/regression-terminal";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-3 md:pt-12 md:pb-4">
      <div className="grid w-full gap-4 sm:gap-5 md:grid-cols-[300px_minmax(0,1fr)] lg:grid-cols-[350px_minmax(0,1fr)]">
        <FadeIn className="h-full min-w-0">
          <div className="flex h-full min-w-0 flex-col rounded-lg border border-border bg-bg-card p-4 sm:p-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-accent-sm">
              <Image
                src="/headshot.jpg"
                alt="Ben Armour"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 350px, (min-width: 768px) 300px, 100vw"
                priority
              />
            </div>
            <div className="flex flex-col gap-3 pt-4 sm:gap-4 sm:pt-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-text-muted">
                  Software QA Engineer
                </p>
                <h1 className="mt-1 text-2xl font-bold text-text-primary sm:mt-1.5 sm:text-3xl">
                  Ben Armour
                </h1>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                I bring reliability to every release so teams can ship with
                confidence. Every build, verified.
              </p>
            </div>

            <div className="mt-auto pt-2">
              <Link
                href="/portfolio"
                className="ghost-btn ghost-btn-accent w-full"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="h-full min-w-0">
          <RegressionTerminal />
        </FadeIn>
      </div>

    </section>
  );
}
