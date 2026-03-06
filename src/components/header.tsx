"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/nav-links";
import { MobileNav } from "@/components/mobile-nav";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showExpandedContent, setShowExpandedContent] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 50);
    updateScrolledState(); // check initial position
    window.addEventListener("scroll", updateScrolledState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(
      () => setShowExpandedContent(!isScrolled),
      isScrolled ? 0 : 120,
    );

    return () => window.clearTimeout(timer);
  }, [isScrolled]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 sm:px-6">
      <nav
        className={`navbar-inner relative flex h-12 items-center gap-1 border border-border bg-bg-card/60 px-3 backdrop-blur-lg ${
          isScrolled
            ? "navbar-collapsed w-full max-w-[34rem]"
            : "navbar-expanded w-full max-w-6xl px-5"
        }`}
      >
        {/* Logo - visible only at top */}
        <div className="min-w-0">
          <AnimatePresence initial={false}>
            {showExpandedContent && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{
                  opacity: 0,
                  width: 0,
                  transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
                }}
                transition={{
                  duration: 0.34,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden"
              >
                <Link
                  href="/"
                  className="mr-4 whitespace-nowrap text-sm font-bold text-text-primary"
                >
                  Ben Armour
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nav links - always visible (desktop) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`nav-pill-link whitespace-nowrap rounded-full px-3 py-1.5 text-sm ${
                  isActive
                    ? "nav-pill-link-active text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <div className="ml-auto">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
