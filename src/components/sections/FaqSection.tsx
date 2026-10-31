import ActionLink from '@/components/ui/ActionLink'
import FaqAccordion from '@/components/ui/FaqAccordion'
import SectionHeading from '@/components/ui/SectionHeading'
import { faqs } from '@/lib/site-content'

export default function FaqSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Good to know"
          title="Frequently asked questions."
          description="A few clear answers about joining, sessions, and Campus Connect."
        />
        <div className="mt-9">
          <FaqAccordion items={faqs.slice(0, 5)} />
        </div>
        <div className="mt-7 text-center">
          <ActionLink href="/faq" variant="secondary" size="sm">More answers</ActionLink>
        </div>
      </div>
    </section>
  )
}
