"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/icons";

/* overlays the row's trailing icon slot; needs a `relative group/row`
   parent with ~22px reserved at its right edge */
export function CopyEmail({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable; the mailto link still works
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      title="Copy email address"
      aria-label="Copy email address"
      className="absolute -right-1 top-1/2 -translate-y-1/2 cursor-pointer p-1.5 text-text-muted transition-all duration-300 hover:scale-125 group-hover/row:scale-[1.15] group-hover/row:text-accent active:scale-95"
    >
      {copied ? (
        <CheckIcon className="h-3.5 w-3.5 text-status-pass" />
      ) : (
        <CopyIcon className="h-3.5 w-3.5" />
      )}
      <span role="status" className="sr-only">
        {copied ? "Email address copied" : ""}
      </span>
    </button>
  );
}
