"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  scale?: boolean;
}

export function FadeIn({ children, delay = 0, className, scale = false }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20, ...(scale ? { scale: 0.95 } : {}) }}
      whileInView={{ opacity: 1, y: 0, ...(scale ? { scale: 1 } : {}) }}
      viewport={{ once: true, margin: "-50px" }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay, ease: "easeOut" }}
      className={isMounted ? className : `${className ?? ""} motion-fallback`.trim()}
    >
      {children}
    </motion.div>
  );
}
