import { ChevronDown } from 'lucide-react'

export default function FaqAccordion({ items }: { items: readonly { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-[#dbe5ef] rounded-2xl border border-[#dbe5ef] bg-white">
      {items.map((item, index) => (
        <details key={item.question} className="group px-5 first:rounded-t-2xl last:rounded-b-2xl sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-[#102a43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0A66C2] [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <ChevronDown size={18} className="shrink-0 text-[#0A66C2] transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="max-w-3xl pb-5 pr-8 text-sm leading-6 text-[#53677d]">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
