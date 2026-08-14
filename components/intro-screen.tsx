"use client"

import Image from "next/image"
import { ArrowRight, Crosshair, Gauge, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QUESTIONS } from "@/lib/quiz-data"

export function IntroScreen({ onStart }: { onStart: () => void }) {
  const questionCount = QUESTIONS.length
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 pb-20 pt-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <a
        href="https://urfua.company"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Перейти на сайт Ukrainian Robotics Forces"
        className="relative mb-8 block h-24 w-24 overflow-hidden rounded-lg border border-border bg-secondary transition-colors hover:border-primary"
      >
        <Image
          src="/urf-logo.png"
          alt="Логотип Ukrainian Robotics Forces"
          fill
          sizes="96px"
          className="object-contain p-1"
          priority
        />
      </a>

      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <Crosshair className="h-3.5 w-3.5 text-primary" />
        Тест сумісності оператора
      </span>

      <h1 className="text-balance font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-foreground sm:text-6xl">
        Хто ти <span className="text-primary">з НРК?</span>
      </h1>

      <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        Наземні роботизовані комплекси працюють пліч-о-пліч з операторами на всіх
        напрямках. Дай відповідь на {questionCount} запитань — і дізнайся, який НРК зі складу
        українських роботизованих сил найбільше збігається з твоїм характером.
      </p>

      <div className="mt-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { icon: Layers, label: `${questionCount} запитань`, sub: "коротко й по суті" },
          { icon: Gauge, label: "Десятки НРК", sub: "від ударних до саперних" },
          { icon: Crosshair, label: "1 результат", sub: "твій позивний" },
        ].map(({ icon: Icon, label, sub }) => (
          <div
            key={label}
            className="rounded-md border border-border bg-card/60 p-4 text-left"
          >
            <Icon className="mb-3 h-5 w-5 text-primary" />
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              {label}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {sub}
            </p>
          </div>
        ))}
      </div>

      <Button
        size="lg"
        onClick={onStart}
        className="group mt-10 h-12 gap-2 px-8 font-display text-sm font-semibold uppercase tracking-[0.15em]"
      >
        Почати опитування
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  )
}
