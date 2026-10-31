'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import ResourceCard from '@/components/ui/ResourceCard'
import { resourceCategories, resources } from '@/lib/site-content'

export default function ResourceLibrary() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All categories')

  const filteredResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return resources.filter((resource) => {
      const matchesCategory = category === 'All categories' || resource.category === category
      const searchableText = `${resource.title} ${resource.category} ${resource.description}`.toLowerCase()
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery))
    })
  }, [category, query])

  return (
    <div>
      <div className="grid gap-4 rounded-2xl border border-[#dbe5ef] bg-white p-4 shadow-sm md:grid-cols-[1fr_280px] md:p-5">
        <label className="relative block">
          <span className="sr-only">Search resources</span>
          <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#687b8c]" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search checklists, guides, and templates"
            className="w-full rounded-xl border border-[#c9d8e6] py-3 pl-11 pr-4 text-sm text-[#102a43] placeholder:text-[#8a9aab] focus:border-[#0A66C2] focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/15"
          />
        </label>
        <label className="block">
          <span className="sr-only">Filter by resource category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)} className="w-full rounded-xl border border-[#c9d8e6] bg-white px-3 py-3 text-sm text-[#102a43] focus:border-[#0A66C2] focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/15">
            <option>All categories</option>
            {resourceCategories.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <p className="mt-4 text-sm text-[#687b8c]" aria-live="polite">{filteredResources.length}{' '}{filteredResources.length === 1 ? 'resource' : 'resources'} shown</p>
      {filteredResources.length ? (
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredResources.map((resource) => <ResourceCard key={resource.title} resource={resource} />)}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-[#b9cbdb] bg-white px-6 py-12 text-center">
          <p className="text-base font-semibold text-[#102a43]">No matching resources</p>
          <p className="mt-2 text-sm text-[#53677d]">Try a different search or category.</p>
        </div>
      )}
    </div>
  )
}
