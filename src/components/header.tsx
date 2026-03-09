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
        className={`navbar-inner relative flex h-12 items-center gap-1 px-3 ${
          isScrolled
            ? "navbar-collapsed w-full max-w-[34rem]"
            : "navbar-expanded w-full max-w-6xl px-5"
        }`}
      >
        {/* Logo */}
        <div className="min-w-0 shrink-0">
          {/* Mobile: always show brand */}
          <Link
            href="/"
            className="mr-4 whitespace-nowrap text-sm font-bold text-text-primary md:hidden"
          >
            BuildVerified
          </Link>

          {/* Desktop: animate brand on scroll */}
          <div className="hidden md:block">
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
                    BuildVerified
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Nav links (desktop only) */}
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

        {/* Hamburger (mobile) */}
        <div className="ml-auto shrink-0">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
