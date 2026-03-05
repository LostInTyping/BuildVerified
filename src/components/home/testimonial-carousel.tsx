"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface Testimonial {
  name: string;
  title: string;
  photo: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Josh Kremer",
    title: "Business Administrator, School of IT — University of Cincinnati",
    photo: "/testimonials/josh.jpg",
    quote:
      "Ben consistently produces superior quality work, on time, and within budgetary targets. He invariably understands exactly what a project is all about from the outset, and how to get it done quickly and effectively. He is an example of the type of employee every employer wants.",
  },
  {
    name: "Vineela Kunapareddi",
    title: "IT Project & Product Manager",
    photo: "/testimonials/vineela.jpg",
    quote:
      "Ben's dedication to personal and professional growth is truly commendable. His ability to effectively communicate and engage within the QA and development teams has been instrumental in our project success. He seamlessly integrates diverse perspectives and goes above and beyond to use his skills to meet the organization's needs.",
  },
  {
    name: "Yahya Gilany",
    title: "Engineering Manager",
    photo: "/testimonials/yahya.jpg",
    quote:
      "His attention to detail and organizational skills significantly improved our product quality, impressing both myself and the team. His reports were always thorough, showcasing his deep understanding of quality assurance. I would rehire Ben in a heartbeat and encourage any team looking for top-notch QA talent to snap him up.",
  },
];

const DURATION_MS = 500;
const AUTO_INTERVAL_MS = 8000;

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === active) return;
      setActive(index);
    },
    [active],
  );

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTO_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div
      className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-bg-card p-4 sm:p-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Testimonials"
    >
      <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
        Testimonials
      </h2>

      {/* Identity: photo + name/title — grid overlap for slide-fade */}
      <div className="mt-3 grid">
        {testimonials.map((testimonial, i) => {
          const isActive = i === active;
          return (
            <div
              key={testimonial.name}
              className="col-start-1 row-start-1 flex items-center gap-3"
              aria-hidden={!isActive}
              style={{
                opacity: isActive ? 1 : 0,
                transform: `translateX(${isActive ? 0 : 20}px)`,
                transition: `opacity ${DURATION_MS}ms ease-in-out, transform ${DURATION_MS}ms ease-in-out`,
                visibility: isActive ? "visible" : "hidden",
              }}
            >
              <div className="relative h-13 w-13 shrink-0 overflow-hidden rounded-full border border-border">
                <Image
                  src={testimonial.photo}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="52px"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-text-primary">
                  {testimonial.name}
                </p>
                <p className="truncate text-xs text-text-muted">
                  {testimonial.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quote block — grid overlap for fixed height + slide-fade */}
      <div className="mt-3 grid flex-1" aria-live="polite">
        {testimonials.map((testimonial, i) => {
          const isActive = i === active;
          return (
            <blockquote
              key={testimonial.name}
              className="col-start-1 row-start-1 text-sm leading-relaxed text-text-secondary italic"
              aria-hidden={!isActive}
              style={{
                opacity: isActive ? 1 : 0,
                transform: `translateX(${isActive ? 0 : 20}px)`,
                transition: `opacity ${DURATION_MS}ms ease-in-out, transform ${DURATION_MS}ms ease-in-out`,
                visibility: isActive ? "visible" : "hidden",
              }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
          );
        })}
      </div>

      {/* Dot navigation */}
      <div className="mt-3 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active
                ? "w-6 bg-accent"
                : "w-1.5 bg-text-muted/30 hover:bg-text-muted/50"
            }`}
            aria-label={`Show testimonial from ${testimonials[i].name}`}
          />
        ))}
      </div>
    </div>
  );
}
