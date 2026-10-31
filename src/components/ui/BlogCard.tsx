import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Clock3 } from 'lucide-react'
import type { BlogPost } from '@/lib/blog-posts'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#dbe5ef] bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0A66C2]">
        <div className="relative aspect-[16/9] bg-[#eef4f8]">
          <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-300 group-hover:scale-[1.02]" />
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-[#0A66C2]">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-[#9aabba]" aria-hidden="true" />
            <time dateTime={post.datePublished}>{post.dateLabel}</time>
            <span className="inline-flex items-center gap-1 text-[#687b8c]"><Clock3 size={13} aria-hidden="true" />{post.readingMinutes} min read</span>
          </div>
          <h2 className="mt-3 text-xl font-bold leading-snug text-[#102a43] group-hover:text-[#0A66C2]">{post.title}</h2>
          <p className="mt-3 text-sm leading-6 text-[#53677d]">{post.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0A66C2]">Read guide<ArrowUpRight size={15} aria-hidden="true" /></span>
        </div>
      </Link>
    </article>
  )
}
