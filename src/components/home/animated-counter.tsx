"use client";

import { useCountUp } from "@/components/home/use-count-up";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  label: string;
  decimals?: number;
  valueClassName?: string;
  valueStyle?: React.CSSProperties;
  labelClassName?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  label,
  decimals = 0,
  valueClassName = "text-2xl font-bold text-text-primary sm:text-3xl",
  valueStyle,
  labelClassName = "mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-text-muted",
}: AnimatedCounterProps) {
  const { ref, displayCount, isComplete } = useCountUp<HTMLDivElement>(
    target,
    decimals,
  );
  const displayValue = decimals > 0 ? displayCount.toFixed(decimals) : displayCount;

  return (
    <div ref={ref} className="text-center">
      <p className={valueClassName} style={valueStyle}>
        {displayValue}
        {isComplete ? suffix : ""}
      </p>
      <p className={labelClassName}>
        {label}
      </p>
    </div>
  );
}
