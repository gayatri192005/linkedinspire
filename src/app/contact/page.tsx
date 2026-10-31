import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import ActionLink from '@/components/ui/ActionLink'
import EmailEnquiryForm, { type FormField } from '@/components/ui/EmailEnquiryForm'
import PageIntro from '@/components/ui/PageIntro'
import { CONTACT_EMAIL, LINKTREE_URL } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata(
  'Contact LinkedINspire',
  'Contact LinkedINspire for general enquiries, community access, Campus Connect, partnerships, speaking, and collaboration.',
  '/contact',
)

const contactFields: FormField[] = [
  { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'email', label: 'Email address', type: 'email', required: true, autoComplete: 'email' },
  {
    name: 'subject',
    label: 'Enquiry category',
    type: 'select',
    required: true,
    options: [
      { label: 'General enquiry', value: 'general' },
      { label: 'Join the community', value: 'community' },
      { label: 'Campus Connect', value: 'campus-connect' },
      { label: 'College partnership', value: 'college-partnership' },
      { label: 'Speaker application', value: 'speaker-application' },
      { label: 'Speaker nomination', value: 'speaker-nomination' },
      { label: 'Brand collaboration', value: 'brand-collaboration' },
    ],
  },
  { name: 'linkedin', label: 'LinkedIn profile URL (optional)', type: 'url', placeholder: 'https://www.linkedin.com/in/your-profile' },
  { name: 'message', label: 'Message', type: 'textarea', required: true, minLength: 10, rows: 6, maxLength: 2500 },
]

const topicValues: Record<string, string> = {
  general: 'general',
  community: 'community',
  'campus-connect': 'campus-connect',
  'college-partnership': 'college-partnership',
  'speaker-application': 'speaker-application',
  'speaker-nomination': 'speaker-nomination',
  'brand-collaboration': 'brand-collaboration',
}

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ topic?: string | string[] }> }) {
  const params = await searchParams
  const topic = Array.isArray(params.topic) ? params.topic[0] : params.topic
  const initialSubject = topic ? topicValues[topic] : undefined

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="We&apos;d love to hear from you."
        description="Choose the enquiry category that fits best, or reach the team directly by email."
        align="center"
      />
      <section className="bg-[#f7f9fc] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <aside className="space-y-5">
            <div className="rounded-2xl border border-[#dbe5ef] bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef6fd] text-[#0A66C2]"><Mail size={20} aria-hidden="true" /></div>
              <h2 className="mt-4 text-lg font-bold text-[#102a43]">Email the team</h2>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 inline-block break-all text-sm font-semibold text-[#0A66C2] underline decoration-[#0A66C2]/30 underline-offset-4">{CONTACT_EMAIL}</a>
              <p className="mt-3 text-sm leading-6 text-[#53677d]">We do not publish a response-time promise.</p>
            </div>
            <div className="rounded-2xl border border-[#dbe5ef] bg-white p-6">
              <h2 className="text-lg font-bold text-[#102a43]">Community links</h2>
              <p className="mt-2 text-sm leading-6 text-[#53677d]">Find current ways to connect through the official Linktree page.</p>
              <ActionLink href={LINKTREE_URL} external variant="secondary" size="sm" className="mt-4">Open Linktree</ActionLink>
            </div>
          </aside>
          <EmailEnquiryForm
            title="Send an enquiry"
            description="The form prepares an email draft on your device. Your details are not sent to or stored by this website."
            fields={contactFields}
            subjectText="Website enquiry"
            submitLabel="Prepare email draft"
            initialValues={initialSubject ? { subject: initialSubject } : undefined}
          />
        </div>
      </section>
    </>
  )
}
