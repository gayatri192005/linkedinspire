import type { Metadata } from 'next'
import PageIntro from '@/components/ui/PageIntro'
import EmailEnquiryForm, { type FormField } from '@/components/ui/EmailEnquiryForm'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata(
  'Collaborate with LinkedINspire',
  'Explore collaboration with LinkedINspire for colleges, student groups, communities, brands, startups, creators, and professionals.',
  '/collaborate',
)

const collaborationFields: FormField[] = [
  { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'email', label: 'Email address', type: 'email', required: true, autoComplete: 'email' },
  { name: 'organization', label: 'Organization or community', type: 'text', required: true },
  { name: 'role', label: 'Your role', type: 'text' },
  {
    name: 'collaborationType',
    label: 'I am reaching out as',
    type: 'select',
    required: true,
    options: [
      { label: 'College', value: 'college' },
      { label: 'Student community', value: 'student-community' },
      { label: 'Technology community', value: 'technology-community' },
      { label: 'Brand or startup', value: 'brand-startup' },
      { label: 'Creator', value: 'creator' },
      { label: 'Industry professional', value: 'professional' },
    ],
  },
  { name: 'message', label: 'What would you like to explore together?', type: 'textarea', required: true, minLength: 20, rows: 5 },
]

const partnerTypes = [
  ['Colleges', 'Explore workshops and learning activities for students.'],
  ['Student communities', 'Co-host activities and share useful resources.'],
  ['Technology communities', 'Explore shared learning and professional conversations.'],
  ['Brands and startups', 'Discuss a collaboration that fits the community and its learning goals.'],
  ['Creators', 'Share practical experience or explore a community project.'],
  ['Industry professionals', 'Contribute insights through a session or learning resource.'],
]

export default function CollaboratePage() {
  return (
    <>
      <PageIntro
        eyebrow="Collaborate"
        title="Let&apos;s create useful learning together."
        description="LinkedINspire welcomes conversations with colleges, student groups, technology communities, brands, startups, creators, and industry professionals."
        align="center"
      />
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-[#102a43]">Ways to work together</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#53677d]">Share the audience, format, and idea you have in mind. Each proposal is discussed individually; submitting an enquiry does not confirm a partnership.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {partnerTypes.map(([title, description]) => (
                <article key={title} className="rounded-xl border border-[#dbe5ef] bg-[#f7f9fc] p-5">
                  <h3 className="font-bold text-[#102a43]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#53677d]">{description}</p>
                </article>
              ))}
            </div>
          </div>
          <EmailEnquiryForm
            title="Partnership enquiry"
            description="The form opens an email draft to the LinkedINspire team. This website does not store or submit the message."
            fields={collaborationFields}
            subjectText="Collaboration enquiry"
            submitLabel="Prepare enquiry email"
          />
        </div>
      </section>
    </>
  )
}
