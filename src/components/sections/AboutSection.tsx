import ActionLink from '@/components/ui/ActionLink'
import SectionHeading from '@/components/ui/SectionHeading'
import { pillars } from '@/lib/site-content'

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="About LinkedINspire"
            title="A community built around real professional growth."
            description="LinkedINspire brings together LinkedIn growth experts, creators, founders, mentors, students, and ambitious professionals to share practical strategies and learn together."
            align="left"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-[#dbe5ef] bg-[#f7f9fc] p-5">
                <span className="text-xs font-bold tracking-[0.15em] text-[#0A66C2]">{pillar.number}</span>
                <h3 className="mt-3 text-xl font-bold text-[#102a43]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#53677d]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <ActionLink href="/about" variant="secondary" size="sm">Read about our mission</ActionLink>
        </div>
      </div>
    </section>
  )
}
