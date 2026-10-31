import type { Metadata } from 'next'
import PageIntro from '@/components/ui/PageIntro'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata(
  'Privacy information',
  'How the LinkedINspire website handles account access, email enquiry drafts, and external links.',
  '/privacy',
)

const sections = [
  {
    title: 'Enquiry forms',
    paragraphs: [
      'The contact, Campus Lead, speaker, and partnership forms on this website prepare an email draft in your email application. The website does not send that message to a server or store it. If you choose to send the draft, your email provider delivers it to team.linkedinspire@gmail.com and handles it under its own policies.',
      'Please do not include passwords, financial details, or other sensitive information in an enquiry.',
    ],
  },
  {
    title: 'Accounts and authentication',
    paragraphs: [
      'If sign-in or account creation is enabled on the deployed site, authentication is handled through the Supabase service configured by the site owner. Account and session handling are subject to that configuration and the provider’s privacy terms.',
    ],
  },
  {
    title: 'External websites and analytics',
    paragraphs: [
      'Links to LinkedIn and Linktree open third-party services. Their privacy practices are governed by their own policies. This site implementation does not add advertising or analytics trackers.',
    ],
  },
  {
    title: 'Questions',
    paragraphs: [
      'For a privacy question, contact team.linkedinspire@gmail.com. This page describes the site behavior implemented today and should be reviewed by the organization before it is relied on as a formal legal policy.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy information" description="A plain-language overview of how the current website behaves." />
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#687b8c]">Last reviewed October 31, 2026.</p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-[#102a43]">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-sm leading-7 text-[#53677d]">{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  )
}
