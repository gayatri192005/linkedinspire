import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import ActionLink from '@/components/ui/ActionLink'
import EmailEnquiryForm, { type FormField } from '@/components/ui/EmailEnquiryForm'
import PageIntro from '@/components/ui/PageIntro'
import SectionHeading from '@/components/ui/SectionHeading'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata(
  'Campus Connect',
  'Bring LinkedINspire workshops, expert sessions, and professional networking opportunities to your campus.',
  '/campus-connect',
)

const campusLeadFields: FormField[] = [
  { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'email', label: 'Email address', type: 'email', required: true, autoComplete: 'email' },
  { name: 'phone', label: 'Phone number', type: 'tel', required: true, autoComplete: 'tel', placeholder: 'Include your country code if relevant' },
  { name: 'college', label: 'College name', type: 'text', required: true },
  { name: 'city', label: 'City', type: 'text', required: true },
  { name: 'courseYear', label: 'Course and year', type: 'text', required: true, placeholder: 'For example, Computer Science, year 2' },
  { name: 'linkedin', label: 'LinkedIn profile URL', type: 'url', placeholder: 'https://www.linkedin.com/in/your-profile' },
  { name: 'experience', label: 'Community or leadership experience', type: 'textarea', required: true, minLength: 10, rows: 4, helpText: 'If you are new to leadership, share another relevant project or activity.' },
  { name: 'motivation', label: 'Why would you like to become a Campus Lead?', type: 'textarea', required: true, minLength: 20, rows: 5 },
]

const partnershipFields: FormField[] = [
  { name: 'name', label: 'Your name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'email', label: 'Email address', type: 'email', required: true, autoComplete: 'email' },
  { name: 'organization', label: 'College or organization', type: 'text', required: true },
  { name: 'city', label: 'City', type: 'text' },
  {
    name: 'collaborationType',
    label: 'Enquiry type',
    type: 'select',
    required: true,
    options: [
      { label: 'College partnership', value: 'college' },
      { label: 'Student club', value: 'student-club' },
      { label: 'Campus workshop', value: 'campus-workshop' },
      { label: 'Other collaboration', value: 'other' },
    ],
  },
  { name: 'message', label: 'What would you like to explore?', type: 'textarea', required: true, minLength: 20, rows: 5 },
]

const partnershipBenefits = ['Expert-led LinkedIn workshops', 'Online and offline session formats', 'Student development activities', 'Community collaborations']
const campusLeadBenefits = ['Leadership and event coordination experience', 'Onboarding and learning resources as available', 'Mentorship and networking opportunities', 'Recognition with consent and where appropriate']
const clubBenefits = ['Co-host workshops', 'Organise community activities', 'Collaborate on campaigns', 'Explore shared learning resources']

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#42566b]">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e9f5ed] text-[#25834b]"><Check size={13} aria-hidden="true" /></span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function CampusConnectPage() {
  return (
    <>
      <PageIntro
        eyebrow="Campus Connect"
        title="Bring LinkedINspire to your campus."
        description="Partner with us to explore LinkedIn growth workshops, expert sessions, and professional networking opportunities for your college."
        align="center"
      >
        <ActionLink href="#campus-application" size="md">Apply as a Campus Lead<ArrowRight size={15} aria-hidden="true" /></ActionLink>
        <ActionLink href="#college-partnership" variant="secondary" size="md">College partnership enquiry</ActionLink>
      </PageIntro>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-[#dbe5ef] bg-[#eef4f8]">
            <Image src="/images/campus-collaboration.png" alt="Illustrative campus workshop collaboration, not a documentary LinkedINspire event photo" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0A66C2]">A campus network</p>
            <h2 className="mt-3 text-3xl font-bold text-[#102a43]">Learning that meets students where they are.</h2>
            <p className="mt-4 text-sm leading-7 text-[#53677d]">Campus Connect is an initiative to bring LinkedIn learning and community activities to colleges through student leaders, clubs, and institutional partners.</p>
            <p className="mt-4 text-sm leading-7 text-[#53677d]">The image is illustrative. Documentary event photos and a college map will be added only when verified materials and locations are available.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Ways to participate" title="Built for colleges, campus leads, and student clubs." />
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            <article className="rounded-2xl border border-[#dbe5ef] bg-white p-6">
              <h3 className="text-xl font-bold text-[#102a43]">For colleges</h3>
              <BenefitList items={partnershipBenefits} />
            </article>
            <article className="rounded-2xl border border-[#dbe5ef] bg-white p-6">
              <h3 className="text-xl font-bold text-[#102a43]">For Campus Leads</h3>
              <BenefitList items={campusLeadBenefits} />
            </article>
            <article className="rounded-2xl border border-[#dbe5ef] bg-white p-6">
              <h3 className="text-xl font-bold text-[#102a43]">For student clubs</h3>
              <BenefitList items={clubBenefits} />
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-2xl border border-dashed border-[#b9cbdb] bg-[#f7f9fc] p-7">
            <h2 className="text-xl font-bold text-[#102a43]">Campus Connect gallery</h2>
            <p className="mt-3 text-sm leading-6 text-[#53677d]">No verified event photos are published yet. This space will show real campus activities once approved photographs are available.</p>
          </article>
          <article className="rounded-2xl border border-dashed border-[#b9cbdb] bg-[#f7f9fc] p-7">
            <h2 className="text-xl font-bold text-[#102a43]">College network</h2>
            <p className="mt-3 text-sm leading-6 text-[#53677d]">A map is not shown yet because verified college locations are not available in the current site content. Only confirmed locations will be added.</p>
          </article>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div id="campus-application" className="scroll-mt-28">
            <EmailEnquiryForm
              title="Campus Lead application"
              description="Share a little about yourself and your campus. The form opens an email draft; it does not store your application on this website."
              fields={campusLeadFields}
              subjectText="Campus Lead application"
              submitLabel="Prepare application email"
            />
          </div>
          <div id="college-partnership" className="scroll-mt-28">
            <EmailEnquiryForm
              title="College partnership enquiry"
              description="Tell us about your college, student group, and the activity you would like to explore."
              fields={partnershipFields}
              subjectText="College partnership enquiry"
              submitLabel="Prepare partnership email"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#102a43]">What to expect as a Campus Lead</h2>
          <div className="mt-6 grid gap-4 text-left sm:grid-cols-3">
            <div className="rounded-xl border border-[#dbe5ef] p-5"><h3 className="font-semibold text-[#102a43]">Responsibilities</h3><p className="mt-2 text-sm leading-6 text-[#53677d]">Coordinate with the team, share approved information, and help organise agreed campus activities.</p></div>
            <div className="rounded-xl border border-[#dbe5ef] p-5"><h3 className="font-semibold text-[#102a43]">Time commitment</h3><p className="mt-2 text-sm leading-6 text-[#53677d]">It depends on the activity. The schedule and scope should be agreed before you commit; no fixed weekly hours are published.</p></div>
            <div className="rounded-xl border border-[#dbe5ef] p-5"><h3 className="font-semibold text-[#102a43]">Selection process</h3><p className="mt-2 text-sm leading-6 text-[#53677d]">The team reviews applications and will follow up by email if there is a suitable next step. A response timeline is not guaranteed.</p></div>
          </div>
        </div>
      </section>
    </>
  )
}
