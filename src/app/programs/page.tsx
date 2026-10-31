import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import ActionLink from '@/components/ui/ActionLink'
import PageIntro from '@/components/ui/PageIntro'
import { programs } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata(
  'Programs',
  'Explore LinkedINspire Live, Campus Connect, the Creator Community, and mentorship and feedback opportunities.',
  '/programs',
)

const programDetails = [
  'Free online sessions covering LinkedIn growth, personal branding, networking, storytelling, and career development.',
  'Explore workshops and community activities with colleges and student groups. Campus formats are planned with each partner.',
  'A community space for aspiring creators to exchange ideas, learn content creation, and explore collaboration.',
  'Profile reviews and practical feedback may be available through selected sessions or programs. Ask the team about current availability.',
]

export default function ProgramsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Programs"
        title="Find your next way to learn."
        description="Explore the ways LinkedINspire brings people together around LinkedIn growth, personal branding, and campus learning."
        align="center"
      />
      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {programs.map((program, index) => {
            const id = index === 3 ? 'mentorship' : program.title.toLowerCase().replaceAll(' ', '-')
            return (
              <article id={id} key={program.title} className="scroll-mt-28 flex flex-col rounded-2xl border border-[#dbe5ef] bg-[#f7f9fc] p-7 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0A66C2]">{program.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-bold text-[#102a43]">{program.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#53677d]">{programDetails[index]}</p>
                <ActionLink href={program.href} variant="secondary" size="sm" className="mt-6 self-start">{program.cta}<ArrowRight size={15} aria-hidden="true" /></ActionLink>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
