import { ArrowUpRight, BookOpen, Compass, Network, Sparkles } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { growthPaths } from '@/lib/site-content'

const icons = [Sparkles, BookOpen, Network, Compass]

export default function GrowthSection() {
  return (
    <section className="bg-[#f7f9fc] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we help"
          title="A clearer path to professional growth."
          description="Build skills and relationships that make your professional story easier to share."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {growthPaths.map((path, index) => {
            const Icon = icons[index]
            return (
              <article key={path.title} className="group rounded-2xl border border-[#dbe5ef] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef6fd] text-[#0A66C2] transition group-hover:bg-[#0A66C2] group-hover:text-white">
                  <Icon size={21} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug text-[#102a43]">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#53677d]">{path.description}</p>
                <ArrowUpRight size={17} className="mt-5 text-[#0A66C2]" aria-hidden="true" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
