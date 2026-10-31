import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import ActionLink from '@/components/ui/ActionLink'
import SectionHeading from '@/components/ui/SectionHeading'

const benefits = [
  'Explore expert-led LinkedIn workshops',
  'Bring students into a learning community',
  'Co-host activities with student clubs',
]

export default function CampusConnectSection() {
  return (
    <section id="campus-connect" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] border border-[#dbe5ef] bg-[#eef4f8]">
          <Image
            src="/images/campus-collaboration.png"
            alt="Illustrative student organizers and mentors collaborating in a campus workshop"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Campus Connect"
            title="Bring LinkedINspire to your campus."
            description="Partner with us to explore LinkedIn growth workshops, expert sessions, and professional networking opportunities for your college."
            align="left"
          />
          <ul className="mt-6 space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-[#42566b]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e9f5ed] text-[#25834b]"><Check size={13} aria-hidden="true" /></span>
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href="/campus-connect" size="md">Explore Campus Connect<ArrowRight size={16} aria-hidden="true" /></ActionLink>
            <ActionLink href="/campus-connect#campus-application" variant="secondary" size="md">Apply as a Campus Lead</ActionLink>
          </div>
        </div>
      </div>
    </section>
  )
}
