import type { Metadata } from 'next'
import FaqAccordion from '@/components/ui/FaqAccordion'
import PageIntro from '@/components/ui/PageIntro'
import { faqs } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata(
  'Frequently asked questions',
  'Answers about LinkedINspire, community access, sessions, Campus Connect, speaking, and contact options.',
  '/faq',
)

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title="Clear answers to common questions."
        description="If your question is not covered here, contact the team or use the official community links."
        align="center"
      />
      <section className="bg-[#f7f9fc] py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  )
}
