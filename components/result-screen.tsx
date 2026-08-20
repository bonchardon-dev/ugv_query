"use client"

import Image from "next/image"
import { RotateCcw, Crosshair, Radio } from "lucide-react"
import type { NrkId } from "@/lib/quiz-data"
import { NRKS, generateCallsign } from "@/lib/quiz-data"
import { Button } from "@/components/ui/button"

export function ResultScreen({
  resultId,
  answers,
  onRestart,
}: {
  resultId: NrkId
  answers: number[]
  onRestart: () => void
}) {
  const nrk = NRKS[resultId]
  const callsign = generateCallsign(resultId, answers)

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

      {/* Operator callsign */}
      <div className="mt-8 overflow-hidden rounded-lg border border-primary/40 bg-primary/5">
        <div className="flex items-center gap-2 border-b border-primary/20 bg-primary/10 px-5 py-2.5">
          <Radio className="h-4 w-4 text-primary" />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            Твій позивний
          </p>
        </div>
        <div className="px-5 py-6 text-center sm:py-8">
          <p className="font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            «{callsign}»
          </p>
          <p className="mt-3 text-pretty text-sm text-muted-foreground">
            Записуй у профіль оператора: ти працюєш у парі з {nrk.name}. Ласкаво
            просимо до лав роботизованих сил.
          </p>
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

      {/* Social QR codes */}
      <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card/60 p-6 sm:p-8">
        <h2 className="text-center font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Стежте за нами
        </h2>
        <p className="mx-auto mt-2 max-w-md text-pretty text-center text-sm leading-relaxed text-muted-foreground">
          Скануй QR-код, щоб приєднатися до спільноти Ukrainian Robotics Forces у
          соцмережах.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { name: "Facebook", src: "/qr-facebook.png" },
            { name: "Instagram", src: "/qr-instagram.png" },
            { name: "LinkedIn", src: "/qr-linkedin.png" },
          ].map((social) => (
            <div
              key={social.name}
              className="flex flex-col items-center rounded-md border border-border bg-background/40 p-4"
            >
              <div className="flex items-center gap-2 text-foreground">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  {social.name}
                </span>
              </div>
              <div className="mt-3 overflow-hidden rounded bg-white p-2">
                <Image
                  src={social.src || "/placeholder.svg"}
                  alt={`QR-код на сторінку Ukrainian Robotics Forces у ${social.name}`}
                  width={435}
                  height={435}
                  className="h-auto w-full"
                />
              </div>
            </div>
          ))}
        </div>
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
