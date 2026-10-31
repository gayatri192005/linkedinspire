'use client'

import { useState } from 'react'
import { Pause, Play } from 'lucide-react'

const learningFocus = [
  'Personal branding',
  'Creator-led sessions',
  'LinkedIn storytelling',
  'Campus Connect',
  'Meaningful connections',
  'Community-led growth',
]

export default function LearningMarquee() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="border-y border-[#dbe5ef] bg-[#f7f9fc] py-4 sm:py-5">
      <p className="sr-only">
        Explore personal branding, creator-led sessions, LinkedIn storytelling, Campus Connect, meaningful connections, and community-led growth.
      </p>
      <div className="flex items-center gap-3 px-4">
        <div className="learning-marquee min-w-0 flex-1" aria-hidden="true">
          <div className="learning-marquee-track" data-paused={isPaused}>
            {[0, 1].map((group) => (
              <div key={group} className="learning-marquee-group">
                {learningFocus.map((topic) => (
                  <span key={topic} className="learning-marquee-item text-xs font-semibold uppercase tracking-[0.15em] text-[#53677d] sm:text-sm">
                    <span className="size-1.5 rounded-full bg-[#d5aa42]" />
                    {topic}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          aria-label={isPaused ? 'Resume learning focus ticker' : 'Pause learning focus ticker'}
          aria-pressed={isPaused}
          onClick={() => setIsPaused((paused) => !paused)}
          className="learning-marquee-toggle inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#c9d8e6] bg-white px-3 py-2 text-xs font-semibold text-[#42566b] transition hover:border-[#0A66C2] hover:text-[#0A66C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]"
        >
          {isPaused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>
    </div>
  )
}
