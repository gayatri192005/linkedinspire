import ActionLink from '@/components/ui/ActionLink'
import ResourceCard from '@/components/ui/ResourceCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { resources } from '@/lib/site-content'

export default function ResourcesSection() {
  return (
    <section className="bg-[#f7f9fc] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Free learning resources"
            title="Small tools for the next step."
            description="Download starter checklists, worksheets, prompts, and templates to put learning into practice."
            align="left"
          />
          <ActionLink href="/learn" variant="secondary" size="sm" className="self-start">Browse the library</ActionLink>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {resources.slice(0, 3).map((resource) => <ResourceCard key={resource.title} resource={resource} />)}
        </div>
      </div>
    </section>
  )
}
