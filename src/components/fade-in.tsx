"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  scale?: boolean;
}

export function FadeIn({ children, delay = 0, className, scale = false }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20, ...(scale ? { scale: 0.95 } : {}) }}
      animate={{ opacity: 1, y: 0, ...(scale ? { scale: 1 } : {}) }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
