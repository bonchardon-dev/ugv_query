import Image from "next/image"
import { cn } from "@/lib/utils"

export function AurfMark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-sm border border-border bg-secondary">
        <Image
          src="/urf-logo.png"
          alt="Логотип Ukrainian Robotics Forces"
          fill
          sizes="40px"
          className="object-contain"
          priority
          unoptimized
        />
      </div>
      <div className="leading-tight">
        <p className="font-display text-base font-bold tracking-[0.14em] text-foreground">
          URF
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Ukrainian Robotics Forces
        </p>
      </div>
    </div>
  )
}
