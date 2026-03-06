"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/nav-links";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const pathname = usePathname();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  const closeOnEscapeKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", closeOnEscapeKey);
      return () => document.removeEventListener("keydown", closeOnEscapeKey);
    }
  }, [isOpen, closeOnEscapeKey]);

  const overlay = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] bg-bg-primary/70 px-4 pb-4 pt-20 backdrop-blur-sm md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-auto flex h-auto max-h-[calc(100dvh-6rem)] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-border bg-bg-card"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex justify-end border-b border-border px-4 py-3">
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-text-primary"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Nav links - centered */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-2 overflow-y-auto px-6 py-4">
              {navLinks.map((link, index) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`text-xl font-medium transition-colors sm:text-2xl ${
                        isActive
                          ? "text-accent"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="ml-auto md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-text-secondary hover:text-text-primary"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isMounted && createPortal(overlay, document.body)}
    </div>
  );
}
