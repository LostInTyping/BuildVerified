"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/lib/nav-links";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-text-secondary hover:text-text-primary"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute left-4 right-4 top-full mt-2 rounded-xl border border-border bg-bg-card/80 px-6 py-4 backdrop-blur-lg"
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
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
        </div>
      )}
    </div>
  );
}
