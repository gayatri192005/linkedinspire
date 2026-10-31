import type { Metadata } from 'next'
import PageIntro from '@/components/ui/PageIntro'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata(
  'Terms of use',
  'Read the plain-language terms for using LinkedINspire website information and resources.',
  '/terms',
)

const sections = [
  {
    title: 'Learning information',
    text: 'The website and downloadable resources are intended for general learning. Review information for your own situation and verify facts before sharing or relying on them.',
  },
  {
    title: 'No guaranteed outcomes',
    text: 'LinkedINspire does not promise reach, followers, employment, internships, certificates, mentorship, or other results. Event-specific details should identify any available registration, recording, or participation information.',
  },
  {
    title: 'Respectful participation',
    text: 'Use the site and community links respectfully. Do not impersonate others, share private information without permission, or represent an unconfirmed collaboration as official.',
  },
  {
    title: 'External services and contact forms',
    text: 'LinkedIn and Linktree are third-party services. The website enquiry forms open an email draft and do not submit or store your message on this site.',
  },
  {
    title: 'Questions',
    text: 'For questions about these terms, email team.linkedinspire@gmail.com. This plain-language summary should be reviewed by the organization before it is relied on as a formal legal agreement.',
  },
]

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Terms of use" description="A plain-language guide to using LinkedINspire site content and resources." />
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#687b8c]">Last reviewed October 31, 2026.</p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-[#102a43]">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#53677d]">{section.text}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  )
}
