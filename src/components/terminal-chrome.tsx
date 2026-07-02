import type { ReactNode } from "react";

/* traffic-light title bar for terminal-style cards */
export function TerminalChrome({
  title,
  right,
  className = "px-3.5 py-2",
}: {
  title: string;
  right?: ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-1.5 border-b border-border ${className}`}
    >
      <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
      <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
      <span className="ml-1.5 font-mono text-[10px] text-text-muted">
        {title}
      </span>
      {right}
    </div>
  );
}
