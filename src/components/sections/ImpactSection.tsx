'use client'

import { useEffect, useRef, useState } from 'react'
import { Building2, Eye, GraduationCap, MapPin } from 'lucide-react'
import { impactStats } from '@/lib/site-content'

const icons = [Building2, GraduationCap, MapPin, Eye]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [current, setCurrent] = useState(0)
  const numberRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = numberRef.current
    if (!element) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      const frame = requestAnimationFrame(() => setCurrent(value))
      return () => cancelAnimationFrame(frame)
    }

    let frame = 0
    let started = false
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      started = true
      const startTime = performance.now()
      const duration = 900

      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCurrent(Math.round(value * eased))
        if (progress < 1) frame = requestAnimationFrame(animate)
      }

      frame = requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: 0.35 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  const displayValue = suffix === 'M+' ? `${current}M+` : `${current.toLocaleString()}${suffix}`

  return <span ref={numberRef} className="text-3xl font-bold tracking-tight text-[#102a43] sm:text-4xl" aria-hidden="true">{displayValue}</span>
}

export default function ImpactSection() {
  return (
    <section aria-labelledby="community-impact-heading" className="border-y border-[#dbe5ef] bg-[#f7f9fc] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0A66C2]">Community impact</p>
          <h2 id="community-impact-heading" className="sr-only">LinkedINspire community impact</h2>
        </div>
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {impactStats.map((stat, index) => {
            const Icon = icons[index]
            return (
              <div key={stat.label} className="rounded-2xl border border-[#dbe5ef] bg-white p-5 shadow-sm sm:p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef6fd] text-[#0A66C2]">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <dt className="mt-4 text-sm font-semibold text-[#53677d]">{stat.label}</dt>
                <dd className="mt-1">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  <span className="sr-only">{stat.suffix === 'M+' ? `${stat.value} million plus` : `${stat.value.toLocaleString()}${stat.suffix}`}</span>
                </dd>
                <p className="mt-2 text-xs leading-5 text-[#687b8c]">{stat.description}</p>
              </div>
            )
          })}
        </dl>
        <p className="mt-5 text-center text-xs text-[#687b8c]">Historical community figures shared by LinkedINspire.</p>
      </div>
    </section>
  )
}
