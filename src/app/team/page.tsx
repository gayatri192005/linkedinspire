import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import PageIntro from '@/components/ui/PageIntro'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata(
  'Our team',
  'Meet the LinkedINspire founding member and follow the provided professional profile.',
  '/team',
)

export default function TeamPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our team"
        title="The people building LinkedINspire."
        description="The team directory includes only the leadership information supplied for this site."
        align="center"
      />
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-[#dbe5ef] bg-[#f7f9fc] p-7 sm:p-9">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#eaf3fb] text-xl font-bold text-[#0A66C2]" aria-hidden="true">GG</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0A66C2]">Founding member</p>
                <h2 className="mt-2 text-2xl font-bold text-[#102a43]">Gayatri G</h2>
                <p className="mt-2 text-sm leading-6 text-[#53677d]">Founding member of LinkedINspire.</p>
                <a href="https://www.linkedin.com/in/g-gayatri192005/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0A66C2] underline decoration-[#0A66C2]/30 underline-offset-4 hover:text-[#004182]">
                  LinkedIn profile<ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
