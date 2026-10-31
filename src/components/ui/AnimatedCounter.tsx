'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  className,
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(value)
  const formattedTarget = new Intl.NumberFormat('en-US').format(value)

  useEffect(() => {
    const counter = counterRef.current
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!counter || prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
      return
    }

    let animationFrame = 0
    let hasStarted = false
    let startTime = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted) return

        hasStarted = true
        observer.disconnect()
        setDisplayValue(0)
        startTime = performance.now()

        const animate = (time: number) => {
          const progress = Math.min((time - startTime) / 1300, 1)
          const easedProgress = 1 - Math.pow(1 - progress, 4)
          setDisplayValue(Math.round(value * easedProgress))

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(animate)
          }
        }

        animationFrame = window.requestAnimationFrame(animate)
      },
      { threshold: 0.65 },
    )

    observer.observe(counter)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(animationFrame)
    }
  }, [value])

  return (
    <span ref={counterRef} className={className}>
      <span aria-hidden="true">
        {prefix}
        {new Intl.NumberFormat('en-US').format(displayValue)}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {formattedTarget}
        {suffix}
      </span>
    </span>
  )
}
