export interface MarqueeChip {
  label: string;
  color: string;
}

interface MarqueeChipsProps {
  chips: MarqueeChip[];
  label: string;
}

export function MarqueeChips({ chips, label }: MarqueeChipsProps) {
  return (
    <div className="marquee-viewport" role="group" aria-label={label} tabIndex={0}>
      <div className="marquee-strip">
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            className="marquee-group"
            aria-hidden={copyIndex === 1}
          >
            {chips.map((chip) => (
              <span
                key={`${chip.label}-${copyIndex}`}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-sm border bg-bg-card px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-text-primary"
                style={{ borderColor: `color-mix(in srgb, ${chip.color} 19%, transparent)` }}
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: chip.color,
                    boxShadow: `0 0 6px color-mix(in srgb, ${chip.color} 38%, transparent)`,
                  }}
                />
                {chip.label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
