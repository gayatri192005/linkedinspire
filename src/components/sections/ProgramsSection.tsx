import { ArrowRight } from 'lucide-react'
import ActionLink from '@/components/ui/ActionLink'
import SectionHeading from '@/components/ui/SectionHeading'
import { programs } from '@/lib/site-content'

export default function ProgramsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our initiatives"
            title="Find a way to get involved."
            description="Start with a live session, bring a workshop to campus, or learn alongside the creator community."
            align="left"
          />
          <ActionLink href="/programs" variant="secondary" size="sm" className="self-start md:mb-1">All programs<ArrowRight size={15} aria-hidden="true" /></ActionLink>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {programs.map((program) => (
            <article key={program.title} className="flex flex-col justify-between rounded-2xl border border-[#dbe5ef] bg-[#f7f9fc] p-6 sm:flex-row sm:items-end sm:gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0A66C2]">{program.eyebrow}</p>
                <h3 className="mt-3 text-xl font-bold text-[#102a43]">{program.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#53677d]">{program.description}</p>
              </div>
              <ActionLink href={program.href} variant="outline" size="sm" className="mt-5 shrink-0 self-start sm:mt-0">
                {program.cta}<ArrowRight size={15} aria-hidden="true" />
              </ActionLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
