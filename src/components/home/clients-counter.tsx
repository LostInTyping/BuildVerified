"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const CLIENT_COUNT = 20;

export function ClientsCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion() ?? true;

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    let current = 0;
    const duration = 1000;
    const steps = 30;
    const increment = CLIENT_COUNT / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= CLIENT_COUNT) {
        setCount(CLIENT_COUNT);
        clearInterval(timer);
        return;
      }
      setCount(Math.floor(current));
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, shouldReduceMotion]);

  const displayCount = shouldReduceMotion ? (isInView ? CLIENT_COUNT : 0) : (isInView ? count : 0);

  return (
    <span ref={ref} className="inline-flex items-baseline gap-1.5">
      <span className="font-display text-base font-bold leading-none tabular-nums text-brand-primary-fixed">
        {displayCount}{displayCount === CLIENT_COUNT ? "+" : ""}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-secondary">
        clients
      </span>
    </span>
  );
}
