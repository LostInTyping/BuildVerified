"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/nav-links";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); // check initial position
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 sm:px-6">
      <nav
        className={`navbar-inner flex items-center gap-1 border border-border bg-bg-card/60 backdrop-blur-lg ${
          scrolled
            ? "w-full max-w-[34rem] rounded-full px-3 py-2"
            : "w-full max-w-6xl rounded-xl px-5 py-3"
        }`}
      >
        {/* Logo — visible only at top */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
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

        {/* Nav links — always visible (desktop) */}
        <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-bg-elevated text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
            );
          })}
        </ul>

        {/* CTA — visible only at top */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              key="cta"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden overflow-hidden lg:block"
            >
              <Link
                href="/contact"
                className="ml-4 whitespace-nowrap rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-bg-primary transition-colors hover:bg-accent-hover"
              >
                Get in Touch
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile hamburger */}
        <MobileNav />
      </nav>
    </header>
  );
}
