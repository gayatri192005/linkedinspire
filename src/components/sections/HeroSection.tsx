import Image from 'next/image'
import { ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react'
import ActionLink from '@/components/ui/ActionLink'
import { LINKTREE_URL } from '@/lib/site-content'

const highlights = [
  { label: '100% free community', icon: Users },
  { label: 'Expert-led sessions', icon: BookOpen },
  { label: 'Campus Connect', icon: GraduationCap },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 sm:pb-20 min-[900px]:grid-cols-[1.02fr_0.98fr] min-[900px]:gap-14 min-[900px]:px-8 min-[900px]:pb-24">
        <div className="relative z-10">
          <p className="motion-enter mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7e7f6] bg-[#f3f8fd] px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-[#0A66C2]">
            LinkedINspire community
          </p>
          <h1 className="motion-enter motion-enter--1 max-w-3xl text-5xl font-bold leading-[1.04] tracking-tight text-[#102a43] sm:text-6xl lg:text-[4.5rem]">
            Your LinkedIn Growth Starts Here.
          </h1>
          <p className="motion-enter motion-enter--2 mt-6 max-w-2xl text-lg leading-8 text-[#42566b] sm:text-xl">
            A community-driven initiative helping students and professionals build their personal brands, grow their networks, and discover opportunities through LinkedIn.
          </p>
          <p className="motion-enter motion-enter--3 mt-4 text-base font-semibold text-[#0A66C2]">
            Learn from creators. Connect with professionals. Build your presence.
          </p>

          <div className="motion-enter motion-enter--4 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ActionLink href={LINKTREE_URL} external size="lg">
              Join the community<ArrowRight size={17} aria-hidden="true" />
            </ActionLink>
            <ActionLink href="/sessions" variant="secondary" size="lg">Explore sessions</ActionLink>
            <ActionLink href="/campus-connect#campus-application" variant="outline" size="lg">Become a Campus Lead</ActionLink>
          </div>

          <ul className="motion-enter motion-enter--5 mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#53677d]" aria-label="Community highlights">
            {highlights.map(({ label, icon: Icon }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eef6fd] text-[#0A66C2]">
                  <Icon size={14} aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="motion-float relative mx-auto w-full max-w-2xl min-[900px]:mx-0">
          <div className="motion-glow absolute -inset-4 rounded-[2rem] bg-[#e7f1fa]" aria-hidden="true" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.65rem] border border-[#dbe5ef] bg-[#eaf2f8] shadow-lg">
            <Image
              src="/images/community-workshop.png"
              alt="Illustrative campus networking workshop with students and early-career professionals"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-md backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0A66C2]">A community for your next step</p>
              <p className="mt-2 text-lg font-semibold text-[#102a43]">Learn together. Make meaningful connections.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
