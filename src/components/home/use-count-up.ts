"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function useCountUp<T extends HTMLElement>(
  target: number,
  decimals = 0,
) {
  const ref = useRef<T>(null);
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
  const displayCount = shouldReduceMotion
    ? (isInView ? target : 0)
    : (isInView ? count : 0);

  return { ref, displayCount, isComplete: displayCount === target };
}
