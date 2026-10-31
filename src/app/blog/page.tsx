import type { Metadata } from 'next'
import PageIntro from '@/components/ui/PageIntro'
import BlogArchive from '@/components/sections/BlogArchive'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata(
  'Blog and insights',
  'Read LinkedINspire starter guides on LinkedIn growth, personal branding, content, networking, and career development.',
  '/blog',
)

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Blog & insights"
        title="Learn. Explore. Grow."
        description="Practical starter guides for building a professional presence, sharing what you learn, and making meaningful connections."
        align="center"
      />
      <section className="bg-[#f7f9fc] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogArchive />
        </div>
      </section>
    </>
  )
}
