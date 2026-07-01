"use client";

import { useCountUp } from "@/components/home/use-count-up";

const CLIENT_COUNT = 20;

export function ClientsCounter() {
  const { ref, displayCount, isComplete } = useCountUp<HTMLSpanElement>(CLIENT_COUNT);

  return (
    <span ref={ref} className="inline-flex items-baseline gap-1.5">
      <span className="font-display text-base font-bold leading-none tabular-nums text-brand-primary-fixed">
        {displayCount}{isComplete ? "+" : ""}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-secondary">
        clients
      </span>
    </span>
  );
}
