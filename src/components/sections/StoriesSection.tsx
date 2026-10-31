import { MessageSquareQuote } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

export default function StoriesSection() {
  return (
    <section className="bg-[#f7f9fc] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Community stories"
          title="Real people. Real growth. Real stories."
          description="First-hand experiences deserve to be shared with care and permission."
        />
        <div className="mx-auto mt-9 max-w-3xl rounded-2xl border border-dashed border-[#b9cbdb] bg-white p-7 text-center sm:p-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eef6fd] text-[#0A66C2]">
            <MessageSquareQuote size={22} aria-hidden="true" />
          </div>
          <h3 className="mt-4 text-lg font-bold text-[#102a43]">Stories are being gathered</h3>
          <p className="mt-2 text-sm leading-6 text-[#53677d]">
            No participant testimonials are published yet. LinkedINspire will add first-hand stories only after they are shared and approved by the people featured.
          </p>
        </div>
      </div>
    </section>
  )
}
