import type { Metadata } from 'next'
import ActionLink from '@/components/ui/ActionLink'
import PageIntro from '@/components/ui/PageIntro'
import SectionHeading from '@/components/ui/SectionHeading'
import { growthPaths, pillars } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata(
  'About LinkedINspire',
  'Learn about LinkedINspire, our community, and our mission to make LinkedIn growth more accessible.',
  '/about',
)

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About LinkedINspire"
        title="A community for learning, connection, and growth."
        description="LinkedINspire brings together creators, founders, mentors, students, and professionals to share practical knowledge and build stronger professional identities."
      />
      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-[#dbe5ef] bg-[#f7f9fc] p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0A66C2]">What is LinkedINspire?</p>
            <h2 className="mt-3 text-2xl font-bold text-[#102a43]">A place to learn LinkedIn by learning together.</h2>
            <p className="mt-4 text-sm leading-7 text-[#53677d]">
              LinkedINspire is a community-driven initiative that brings together LinkedIn growth experts, creators, founders, mentors, and ambitious professionals to share knowledge, practical strategies, and real success stories.
            </p>
          </div>
          <div className="rounded-2xl border border-[#dbe5ef] bg-white p-7 shadow-sm sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0A66C2]">Who we are</p>
            <h2 className="mt-3 text-2xl font-bold text-[#102a43]">A community that values authentic work.</h2>
            <p className="mt-4 text-sm leading-7 text-[#53677d]">
              We are LinkedIn enthusiasts, creators, students, and professionals who believe in authentic storytelling, meaningful networking, and collaborative learning.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f9fc] py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our mission" title="Make LinkedIn growth more accessible." description="Help people learn from experienced creators, build a professional identity, and become part of a supportive community." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-[#dbe5ef] bg-white p-6">
                <span className="text-xs font-bold tracking-[0.16em] text-[#0A66C2]">{pillar.number}</span>
                <h3 className="mt-3 text-xl font-bold text-[#102a43]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#53677d]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How we help" title="Four practical ways to grow." />
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {growthPaths.map((item, index) => (
              <article key={item.title} className="flex gap-4 rounded-2xl border border-[#dbe5ef] p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef6fd] text-sm font-bold text-[#0A66C2]">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#102a43]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#53677d]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-9 text-center"><ActionLink href="/programs">Explore our programs</ActionLink></div>
        </div>
      </section>
    </>
  )
}
