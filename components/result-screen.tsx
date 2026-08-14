"use client"

import Image from "next/image"
import { RotateCcw, Crosshair } from "lucide-react"
import type { NrkId } from "@/lib/quiz-data"
import { NRKS } from "@/lib/quiz-data"
import { Button } from "@/components/ui/button"

export function ResultScreen({
  resultId,
  onRestart,
}: {
  resultId: NrkId
  onRestart: () => void
}) {
  const nrk = NRKS[resultId]

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-24 pt-6 animate-in fade-in duration-500">
      <p className="text-center font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        Аналіз завершено · твій комплекс
      </p>

      {/* Result card */}
      <div className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
        <div className="relative tactical-grid border-b border-border bg-background/40">
          <div className="absolute left-4 top-4 z-10 rounded border border-primary/40 bg-background/70 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            {nrk.index}
          </div>
          <Image
            src={nrk.image || "/placeholder.svg"}
            alt={`Наземний роботизований комплекс ${nrk.name}`}
            width={900}
            height={520}
            className="mx-auto h-64 w-full object-contain p-6 sm:h-80"
            priority
          />
        </div>

        <div className="p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {nrk.category}
          </p>
          <h1 className="mt-1 text-balance font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
            {nrk.name}
          </h1>
          <p className="mt-3 flex items-start gap-2 text-pretty text-base italic text-primary">
            <Crosshair className="mt-1 h-4 w-4 shrink-0" />
            {nrk.tagline}
          </p>

          <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {nrk.description}
          </p>

          {/* Traits */}
          <div className="mt-6 flex flex-wrap gap-2">
            {nrk.traits.map((trait) => (
              <span
                key={trait}
                className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-secondary-foreground"
              >
                {trait}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4">
            {nrk.specs.map((spec) => (
              <div key={spec.label} className="bg-card p-3">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {spec.label}
                </p>
                <p className="mt-1 font-display text-sm font-semibold text-foreground">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing word about the alliance */}
      <div className="mt-8 rounded-lg border border-border bg-card/60 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <a
            href="https://urfua.company"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Перейти на сайт Ukrainian Robotics Forces"
            className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-sm border border-border bg-secondary transition-colors hover:border-primary"
          >
            <Image
              src="/urf-logo.png"
              alt="Логотип Ukrainian Robotics Forces"
              fill
              sizes="36px"
              className="object-contain"
            />
          </a>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Про альянс
          </h2>
        </div>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Ukrainian Robotics Forces — Українські Роботизовані Сили — об&apos;єднує
          розробників, виробників та операторів наземних роботизованих комплексів.
          Кожен НРК — логістичний, ударний, медичний чи саперний — виконує свою
          роль, і саме разом вони зберігають найголовніше: життя українських
          захисників. Немає «кращого» чи «гіршого» комплексу — є єдина система, де
          важливий кожен. Дякуємо, що цікавишся українськими роботизованими силами.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          size="lg"
          variant="outline"
          onClick={onRestart}
          className="gap-2 font-display text-sm font-semibold uppercase tracking-[0.15em]"
        >
          <RotateCcw className="h-4 w-4" />
          Пройти ще раз
        </Button>
      </div>
    </div>
  )
}
