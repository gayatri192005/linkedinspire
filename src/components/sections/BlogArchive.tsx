'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import BlogCard from '@/components/ui/BlogCard'
import { blogCategories, blogPosts } from '@/lib/blog-posts'

export default function BlogArchive() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All topics')

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return blogPosts.filter((post) => {
      const matchesCategory = category === 'All topics' || post.category === category
      const searchableText = `${post.title} ${post.excerpt} ${post.category} ${post.sections.flatMap((section) => section.paragraphs).join(' ')}`.toLowerCase()
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery))
    })
  }, [category, query])

  return (
    <div>
      <div className="grid gap-4 rounded-2xl border border-[#dbe5ef] bg-white p-4 shadow-sm md:grid-cols-[1fr_280px] md:p-5">
        <label className="relative block">
          <span className="sr-only">Search articles</span>
          <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#687b8c]" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search guides and topics"
            className="w-full rounded-xl border border-[#c9d8e6] py-3 pl-11 pr-4 text-sm text-[#102a43] placeholder:text-[#8a9aab] focus:border-[#0A66C2] focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/15"
          />
        </label>
        <label className="block">
          <span className="sr-only">Filter articles by topic</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)} className="w-full rounded-xl border border-[#c9d8e6] bg-white px-3 py-3 text-sm text-[#102a43] focus:border-[#0A66C2] focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/15">
            <option>All topics</option>
            {blogCategories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <p className="mt-4 text-sm text-[#687b8c]" aria-live="polite">{filteredPosts.length}{' '}{filteredPosts.length === 1 ? 'guide' : 'guides'} shown</p>
      {filteredPosts.length ? (
        <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-[#b9cbdb] bg-white px-6 py-12 text-center">
          <p className="text-base font-semibold text-[#102a43]">No guides in this topic yet</p>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#53677d]">
            Try another topic. Member stories and industry insights will be published only when they are verified and approved.
          </p>
        </div>
      )}
    </div>
  )
}
