import type { Metadata } from 'next'
import { ArrowRight, BookOpen, Network, Sparkles } from 'lucide-react'
import ActionLink from '@/components/ui/ActionLink'
import PageIntro from '@/components/ui/PageIntro'
import { LINKEDIN_COMPANY_URL, LINKTREE_URL, pillars } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/seo'

const icons = [BookOpen, Network, Sparkles]

export const metadata: Metadata = createPageMetadata(
  'Community',
  'Connect with the LinkedINspire community through official community links and shared learning opportunities.',
  '/community',
)

export default function CommunityPage() {
  return (
    <>
      <PageIntro
        eyebrow="Community"
        title="Grow alongside people who are learning too."
        description="LinkedINspire brings students, creators, mentors, and professionals together around LinkedIn learning and meaningful connection."
        align="center"
      >
        <ActionLink href={LINKTREE_URL} external size="lg">Find community links<ArrowRight size={16} aria-hidden="true" /></ActionLink>
        <ActionLink href={LINKEDIN_COMPANY_URL} external variant="secondary" size="lg">Follow on LinkedIn</ActionLink>
      </PageIntro>
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = icons[index]
              return (
                <article key={pillar.title} className="rounded-2xl border border-[#dbe5ef] bg-[#f7f9fc] p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef6fd] text-[#0A66C2]"><Icon size={21} aria-hidden="true" /></div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#0A66C2]">{pillar.number}</p>
                  <h2 className="mt-2 text-xl font-bold text-[#102a43]">{pillar.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[#53677d]">{pillar.description}</p>
                </article>
              )
            })}
          </div>
          <div className="mt-8 rounded-2xl border border-[#dbe5ef] bg-white p-7 text-center sm:p-9">
            <h2 className="text-2xl font-bold text-[#102a43]">Use the official community entry point</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#53677d]">The Linktree page is the current place to find community join options. This website does not display unverified group activity or member counts.</p>
            <ActionLink href={LINKTREE_URL} external className="mt-6">Visit LinkedINspire on Linktree</ActionLink>
          </div>
        </div>
      </section>
    </>
  )
}
