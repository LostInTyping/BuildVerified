"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion() ?? true;

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    let current = 0;
    const duration = 1000;
    const steps = 30;
    const increment = target / steps;
    const stepTime = duration / steps;

    const factor = Math.pow(10, decimals);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
        return;
      }
      setCount(Math.floor(current * factor) / factor);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, decimals, shouldReduceMotion]);

  // When reduced motion is active, show the target value immediately — no animation
  const displayCount = shouldReduceMotion ? (isInView ? target : 0) : (isInView ? count : 0);
  const displayValue = decimals > 0 ? displayCount.toFixed(decimals) : displayCount;

  return (
    <div ref={ref} className="text-center">
      <p className={valueClassName} style={valueStyle}>
        {displayValue}
        {displayCount === target ? suffix : ""}
      </p>
      <p className={labelClassName}>
        {label}
      </p>
    </div>
  );
}
