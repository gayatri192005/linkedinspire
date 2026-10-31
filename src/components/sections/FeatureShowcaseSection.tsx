'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'motion/react'
import { useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import MechanicalActionButton from '@/components/ui/MechanicalActionButton'

type FeatureSide = 'left' | 'right'

type ShowcaseFeature = {
  id: string
  index: string
  eyebrow: string
  title: string
  description: string
  signal: string
  image: string
  imageAlt: string
  imageAction: string
  imageLabel: string
  href: string
  side: FeatureSide
}

const features: ShowcaseFeature[] = [
  {
    id: 'feature-signal',
    index: '01',
    eyebrow: 'CLARITY / PROFILE',
    title: 'Find your signal.',
    description: 'Turn the experience you already have into a point of view people can recognize and remember.',
    signal: 'PROFILE / PURPOSE',
    image: '/images/storytelling-session.png',
    imageAlt: 'A young professional outlining a post beside a laptop at a shared table.',
    imageAction: 'Explore the learning library',
    imageLabel: 'Start with your story',
    href: '/learn',
    side: 'left',
  },
  {
    id: 'feature-practice',
    index: '02',
    eyebrow: 'PRACTICE / PRESENCE',
    title: 'Practice out loud.',
    description: 'Try the first post, introduction, or conversation in a room designed to make your next step feel possible.',
    signal: 'SESSIONS / WORKSHOPS',
    image: '/images/community-workshop.png',
    imageAlt: 'Students and early-career professionals collaborating during a campus workshop.',
    imageAction: 'Browse upcoming sessions',
    imageLabel: 'Practice with the community',
    href: '/sessions',
    side: 'right',
  },
  {
    id: 'feature-connections',
    index: '03',
    eyebrow: 'COMMUNITY / CONNECTION',
    title: 'Build real connections.',
    description: 'Learn alongside people who share perspective, open doors, and keep your momentum moving.',
    signal: 'MENTORS / PEERS',
    image: '/images/mentorship-conversation.png',
    imageAlt: 'A mentor and an early-career professional talking at a campus networking event.',
    imageAction: 'Meet the campus community',
    imageLabel: 'Grow through connection',
    href: '/campus-connect',
    side: 'left',
  },
  {
    id: 'feature-momentum',
    index: '04',
    eyebrow: 'MOMENTUM / ACTION',
    title: 'Carry it forward.',
    description: 'Give your visibility a rhythm with practical resources, live programs, and leadership opportunities.',
    signal: 'RESOURCES / PROGRAMS',
    image: '/images/campus-collaboration.png',
    imageAlt: 'Students and professionals exchanging ideas around a campus table.',
    imageAction: 'Explore programs',
    imageLabel: 'Choose your next move',
    href: '/programs',
    side: 'right',
  },
]

function FeatureCopyCard({ feature }: { feature: ShowcaseFeature }) {
  const cardRef = useRef<HTMLElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })
  const prefersReducedMotion = useReducedMotion() ?? false
  const hiddenX = feature.side === 'left' ? -72 : 72

  return (
    <div className="relative isolate mx-2 sm:mx-3 md:mx-2">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-2 inset-y-4 rotate-[1.5deg] border border-white/[0.07] bg-[#11171d]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-1 inset-y-2 -rotate-[1deg] border border-white/[0.08] bg-[#141a20]"
      />
      <motion.article
        ref={cardRef}
        initial={{ opacity: 0, x: hiddenX }}
        animate={prefersReducedMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: hiddenX }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.88, ease: [0.16, 1, 0.3, 1] }
        }
        className="relative z-10 min-h-[255px] border border-[#414a54] bg-[#171d24] p-6 shadow-[0_24px_70px_-48px_rgba(0,0,0,0.9)] sm:p-8"
      >
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#efbc4d]">
            {feature.eyebrow}
          </p>
          <span className="font-mono text-xs text-white/45">{feature.index} / 04</span>
        </div>
        <h3 className="mt-7 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-[1.75rem]">
          {feature.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-[#aab4bf] sm:text-[15px]">
          {feature.description}
        </p>
        <div className="mt-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.17em] text-[#dce2e8]/65">
          <span aria-hidden="true" className="h-px w-7 bg-[#efbc4d]" />
          {feature.signal}
        </div>
      </motion.article>
    </div>
  )
}

function FeatureImageFrame({ feature }: { feature: ShowcaseFeature }) {
  const frameRef = useRef<HTMLElement>(null)
  const isInView = useInView(frameRef, { once: true, amount: 0.2 })
  const prefersReducedMotion = useReducedMotion() ?? false
  const [isPointerOver, setIsPointerOver] = useState(false)
  const pointerX = useMotionValue(-80)
  const pointerY = useMotionValue(-80)
  const ghostX = useSpring(pointerX, { stiffness: 420, damping: 36, mass: 0.38 })
  const ghostY = useSpring(pointerY, { stiffness: 420, damping: 36, mass: 0.38 })

  const handlePointerMove = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(event.clientX - bounds.left - 28)
    pointerY.set(event.clientY - bounds.top - 28)
  }

  return (
    <figure ref={frameRef} className="relative m-0 md:sticky md:top-24 md:self-start">
      <Link
        href={feature.href}
        aria-label={feature.imageAction}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setIsPointerOver(true)
        }}
        onPointerLeave={() => setIsPointerOver(false)}
        onPointerMove={handlePointerMove}
        className="group relative isolate block overflow-hidden border border-white/15 bg-[#151b22] shadow-[0_28px_76px_-45px_rgba(0,0,0,0.92)] focus-visible:border-[#f1bd4a]"
      >
        <div className="relative aspect-[1.55] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              fill
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover grayscale brightness-[0.68]"
            />
          </div>
          <motion.div
            aria-hidden="true"
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={
              isInView
                ? { clipPath: 'circle(110% at 50% 50%)' }
                : { clipPath: 'circle(0% at 50% 50%)' }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 1.05, ease: [0.16, 1, 0.3, 1] }
            }
            className="absolute inset-0"
          >
            <Image
              src={feature.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.045] group-focus-visible:scale-[1.045]"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b10]/90 via-[#070b10]/10 to-[#070b10]/10 opacity-75 transition-opacity duration-300 group-hover:opacity-95 group-focus-visible:opacity-95" />
          <div className="pointer-events-none absolute inset-x-4 top-4 z-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/85 sm:inset-x-5 sm:top-5">
            <span className="border border-white/30 bg-[#0d1219]/45 px-2 py-1 backdrop-blur-sm">
              CH / {feature.index}
            </span>
            <span aria-hidden="true" className="h-px w-8 bg-[#f1bd4a]" />
            <span className="truncate">{feature.signal}</span>
          </div>
          <div className="pointer-events-none absolute inset-x-4 bottom-4 z-10 flex translate-y-2 items-end justify-between gap-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:inset-x-5 sm:bottom-5">
            <span className="max-w-[15rem] text-left text-lg font-medium leading-tight text-white sm:text-xl">
              {feature.imageLabel}
            </span>
            <span className="grid size-9 shrink-0 place-items-center border border-white/45 bg-[#111820]/70 text-white backdrop-blur-sm">
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </div>
          <motion.span
            aria-hidden="true"
            style={{ x: ghostX, y: ghostY }}
            animate={{ opacity: isPointerOver ? 1 : 0, scale: isPointerOver ? 1 : 0.82 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.16, ease: 'easeOut' }}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden size-14 place-items-center rounded-full border border-[#f1bd4a]/80 bg-[#111820]/85 font-mono text-[9px] uppercase tracking-[0.16em] text-white shadow-[0_0_24px_rgba(241,189,74,0.2)] backdrop-blur-sm md:grid"
          >
            VIEW
          </motion.span>
        </div>
      </Link>
    </figure>
  )
}

function FeatureTimelineItem({ feature }: { feature: ShowcaseFeature }) {
  const textPosition = feature.side === 'left' ? 'md:col-start-1' : 'md:col-start-3'
  const imagePosition = feature.side === 'left' ? 'md:col-start-3' : 'md:col-start-1'

  return (
    <div
      id={feature.id}
      className="relative grid scroll-mt-28 grid-cols-[24px_minmax(0,1fr)] gap-x-4 gap-y-6 py-8 md:min-h-[500px] md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] md:items-stretch md:gap-x-7 md:py-4"
    >
      <div className="relative z-10 col-start-1 row-span-2 row-start-1 flex justify-center self-start pt-2 md:col-start-2 md:row-span-1 md:self-center md:pt-0">
        <span
          aria-hidden="true"
          className="grid size-6 place-items-center rounded-full border border-[#80672e] bg-[#11171d] shadow-[0_0_0_5px_#0b1016] md:size-8"
        >
          <span className="size-1.5 rounded-full bg-[#f1bd4a] shadow-[0_0_12px_rgba(241,189,74,0.95)]" />
        </span>
      </div>
      <div className={`relative z-10 col-start-2 row-start-1 md:row-start-1 ${textPosition} md:flex md:items-center`}>
        <FeatureCopyCard feature={feature} />
      </div>
      <div className={`relative z-10 col-start-2 row-start-2 md:row-start-1 ${imagePosition}`}>
        <FeatureImageFrame feature={feature} />
      </div>
    </div>
  )
}

function ChapterRail() {
  return (
    <nav aria-label="Feature showcase chapters" className="mt-16 border-t border-white/10 pt-8 sm:mt-20">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#efbc4d]">The next move</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
            Four moves. One visible story.
          </h3>
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-white/40 sm:block">
          Swipe / scroll to explore
        </span>
      </div>
      <ul className="feature-chapter-rail -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
        {features.map((feature) => (
          <li key={feature.id} className="min-w-[228px] flex-1 snap-start">
            <a
              href={`#${feature.id}`}
              className="group flex min-h-[108px] flex-col justify-between border border-white/10 bg-white/[0.025] p-4 transition-colors duration-150 hover:border-[#f1bd4a]/75 hover:bg-white/[0.045] focus-visible:border-[#f1bd4a]/75"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                {feature.index} / CHAPTER
              </span>
              <span className="mt-4 flex items-center justify-between gap-3 text-sm font-medium text-white/90">
                {feature.title}
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="shrink-0 text-[#efbc4d] transition-transform duration-150 group-hover:translate-x-1"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function FeatureShowcaseSection() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 85%', 'end 15%'],
  })
  return (
    <section
      id="feature-showcase"
      aria-labelledby="feature-showcase-heading"
      className="feature-showcase-section relative overflow-x-clip bg-[#0b1016] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-7 border-b border-white/10 pb-10 sm:pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#efbc4d]">
              <span className="feature-typewriter">Find your signal.</span>
            </p>
            <h2
              id="feature-showcase-heading"
              className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.5rem] lg:leading-[1.04]"
            >
              A stronger professional story, one deliberate move at a time.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#aab4bf] sm:text-base">
              Move from profile clarity to confident participation—with a community that makes each step feel possible.
            </p>
          </div>
          <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
            Field guide / 01–04
          </p>
        </div>

        <div ref={timelineRef} className="relative mt-5">
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[11px] top-0 z-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <div className="feature-showcase-energy-static absolute inset-0 origin-top bg-gradient-to-b from-[#f9d878] via-[#f1bd4a] to-[#c9851c] shadow-[0_0_16px_rgba(241,189,74,0.72)]" />
            <motion.div
              className="feature-showcase-energy-progress absolute inset-0 origin-top bg-gradient-to-b from-[#f9d878] via-[#f1bd4a] to-[#c9851c] shadow-[0_0_16px_rgba(241,189,74,0.72)]"
              style={{ scaleY: scrollYProgress }}
            />
          </div>
          <div className="relative z-10">
            {features.map((feature) => (
              <FeatureTimelineItem key={feature.id} feature={feature} />
            ))}
          </div>
        </div>

        <ChapterRail />

        <div className="mt-12 flex flex-col items-start gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-[#aab4bf]">
            Your profile is the start. Practice, people, and a little momentum make the difference.
          </p>
          <MechanicalActionButton href="/programs">Explore the programs</MechanicalActionButton>
        </div>
      </div>
    </section>
  )
}
