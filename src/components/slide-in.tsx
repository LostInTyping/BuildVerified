"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
}

export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className,
}: SlideInProps) {
  const prefersReducedMotion = useReducedMotion();
  const x = direction === "left" ? -30 : 30;

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
