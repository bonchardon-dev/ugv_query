"use client"

import { useState } from "react"
import { AurfMark } from "@/components/aurf-mark"
import { IntroScreen } from "@/components/intro-screen"
import { QuestionScreen } from "@/components/question-screen"
import { ResultScreen } from "@/components/result-screen"
import { QUESTIONS, computeResult, type NrkId } from "@/lib/quiz-data"

type Stage = "intro" | "quiz" | "result"

export function QuizApp() {
  const [stage, setStage] = useState<Stage>("intro")
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<NrkId | null>(null)

  function start() {
    setAnswers([])
    setCurrent(0)
    setResult(null)
    setStage("quiz")
  }

  function selectOption(optionIndex: number) {
    const next = [...answers]
    next[current] = optionIndex
    setAnswers(next)

    if (current < QUESTIONS.length - 1) {
      // Small delay so the selected state is visible before advancing.
      setTimeout(() => setCurrent(current + 1), 180)
    } else {
      setResult(computeResult(next))
      setTimeout(() => setStage("result"), 180)
    }
  }

  function back() {
    if (current > 0) setCurrent(current - 1)
  }

  return (
    <main className="relative min-h-screen tactical-grid">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/5 to-transparent" />

      <header className="relative border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <AurfMark />
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:block">
            Оператор // профіль
          </span>
        </div>
      </header>

      <div className="relative">
        {stage === "intro" && <IntroScreen onStart={start} />}

        {stage === "quiz" && (
          <QuestionScreen
            question={QUESTIONS[current]}
            index={current}
            total={QUESTIONS.length}
            selected={answers[current]}
            onSelect={selectOption}
            onBack={back}
          />
        )}

        {stage === "result" && result && (
          <ResultScreen resultId={result} answers={answers} onRestart={start} />
        )}
      </div>
    </main>
  )
}
