'use client'

import { useEffect } from 'react'

const REVEAL_SELECTOR = '[data-reveal], [data-reveal-group] > *'

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
      return
    }

    const targets = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)

    if (!targets.length) {
      return
    }

    root.dataset.motionReady = 'true'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.setAttribute('data-revealed', 'true')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -48px 0px',
      },
    )

    targets.forEach((target) => {
      const parent = target.parentElement

      if (parent?.hasAttribute('data-reveal-group')) {
        const siblingIndex = Array.from(parent.children).indexOf(target)
        target.style.setProperty('--reveal-delay', `${Math.min(siblingIndex, 5) * 75}ms`)
      }

      observer.observe(target)
    })

    return () => {
      observer.disconnect()
      delete root.dataset.motionReady
    }
  }, [])

  return null
}
