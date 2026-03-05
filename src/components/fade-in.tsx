"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  scale?: boolean;
}

export function FadeIn({ children, delay = 0, className, scale = false }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, ...(scale ? { scale: 0.95 } : {}) }}
      animate={{ opacity: 1, y: 0, ...(scale ? { scale: 1 } : {}) }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
