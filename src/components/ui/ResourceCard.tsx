import { Download } from 'lucide-react'
import type { Resource } from '@/lib/site-content'

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#dbe5ef] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0A66C2]">{resource.category}</p>
      <h3 className="mt-3 text-lg font-bold text-[#102a43]">{resource.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-[#53677d]">{resource.description}</p>
      <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#e8eef4] pt-4">
        <span className="text-xs text-[#687b8c]">{resource.format}</span>
        <a
          href={resource.href}
          download
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#0A66C2] transition hover:bg-[#eef6fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]"
        >
          Download<Download size={15} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
