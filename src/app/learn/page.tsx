import type { Metadata } from 'next'
import PageIntro from '@/components/ui/PageIntro'
import ResourceLibrary from '@/components/sections/ResourceLibrary'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata(
  'Learning resources',
  'Search and download free LinkedIn profile, personal branding, content, networking, resume, and career resources.',
  '/learn',
)

export default function LearnPage() {
  return (
    <>
      <PageIntro
        eyebrow="Free learning library"
        title="Learn. Practise. Make it your own."
        description="Downloadable starter checklists, worksheets, prompts, and templates for LinkedIn growth, personal branding, and career development."
        align="center"
      />
      <section className="bg-[#f7f9fc] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ResourceLibrary />
          <p className="mt-8 text-center text-xs leading-5 text-[#687b8c]">These are editable starter materials. Review every detail and make each resource fit your own experience.</p>
        </div>
      </section>
    </>
  )
}
