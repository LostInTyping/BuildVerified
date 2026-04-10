export function AmbientNebulas() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute h-[55%] w-[55%] rounded-full blur-[140px] nebula-pulse"
        style={{
          top: "-15%",
          right: "-15%",
          background: "radial-gradient(circle, rgba(236,177,255,0.10), transparent 70%)",
        }}
      />
      <div
        className="absolute h-[45%] w-[45%] rounded-full blur-[140px]"
        style={{
          bottom: "-15%",
          left: "-15%",
          background: "radial-gradient(circle, color-mix(in srgb, var(--color-brand-primary) 8%, transparent), transparent 70%)",
        }}
      />
    </div>
  );
}
