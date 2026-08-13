import { cn } from "@/lib/utils"

export function AurfMark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          d="M24 3 42 13.5v21L24 45 6 34.5v-21L24 3Z"
          strokeLinejoin="round"
          className="opacity-70"
        />
        <circle cx="24" cy="24" r="7" />
        <path d="M24 8v6M24 34v6M8 24h6M34 24h6" strokeLinecap="round" />
      </svg>
      <div className="leading-tight">
        <p className="font-display text-lg font-bold tracking-[0.18em] text-foreground">
          AURF
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Українські Роботизовані Сили
        </p>
      </div>
    </div>
  )
}
