"use client"

import { ArrowLeft, ChevronRight } from "lucide-react"
import type { Question } from "@/lib/quiz-data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Props = {
  question: Question
  index: number
  total: number
  selected: number | undefined
  onSelect: (optionIndex: number) => void
  onBack: () => void
}

export function QuestionScreen({
  question,
  index,
  total,
  selected,
  onSelect,
  onBack,
}: Props) {
  const progress = Math.round((index / total) * 100)

  return (
    <div className="mx-auto w-full max-w-2xl px-6 pb-20 pt-6">
      {/* Progress header */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>
            Запит {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="text-primary">{progress}%</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div
        key={question.id}
        className="animate-in fade-in slide-in-from-right-6 duration-300"
      >
        <h2 className="text-balance font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          {question.prompt}
        </h2>

        <div className="mt-8 flex flex-col gap-3">
          {question.options.map((option, i) => {
            const isSelected = selected === i
            return (
              <button
                key={i}
                type="button"
                onClick={() => onSelect(i)}
                className={cn(
                  "group flex items-center gap-4 rounded-md border p-4 text-left transition-all",
                  isSelected
                    ? "border-primary bg-accent"
                    : "border-border bg-card/60 hover:border-primary/50 hover:bg-card",
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded font-mono text-xs font-semibold transition-colors",
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground group-hover:text-foreground",
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span
                  className={cn(
                    "flex-1 text-pretty text-sm leading-relaxed sm:text-base",
                    isSelected ? "text-accent-foreground" : "text-foreground",
                  )}
                >
                  {option.label}
                </span>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 shrink-0 transition-all",
                    isSelected
                      ? "text-primary opacity-100"
                      : "text-muted-foreground opacity-0 group-hover:opacity-100",
                  )}
                />
              </button>
            )
          })}
        </div>

        <div className="mt-8">
          <Button
            variant="ghost"
            onClick={onBack}
            disabled={index === 0}
            className="gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад
          </Button>
        </div>
      </div>
    </div>
  )
}
