"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  label: string;
}

export function AnimatedCounter({ target, suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const duration = 1000;
    const steps = 30;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
        return;
      }
      setCount(Math.floor(current));
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-2xl font-bold text-text-primary sm:text-3xl">
        {isInView ? count : 0}
        {count === target ? suffix : ""}
      </p>
      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-text-muted">
        {label}
      </p>
    </div>
  );
}
