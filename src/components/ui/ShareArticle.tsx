'use client'

import { useState } from 'react'
import { Check, Copy, ExternalLink } from 'lucide-react'

export default function ShareArticle({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`

  return (
    <div className="flex flex-wrap items-center gap-3 border-y border-[#dbe5ef] py-5">
      <span className="mr-1 text-sm font-semibold text-[#42566b]">Share this guide</span>
      <button type="button" onClick={copyLink} className="inline-flex items-center gap-2 rounded-full border border-[#c9d8e6] px-4 py-2 text-sm font-semibold text-[#42566b] transition hover:bg-[#eef6fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]">
        {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
        {copied ? 'Link copied' : 'Copy link'}
      </button>
      <a href={shareUrl} target="_blank" rel="noopener noreferrer" aria-label={`Share ${title} on LinkedIn`} className="inline-flex items-center gap-2 rounded-full border border-[#c9d8e6] px-4 py-2 text-sm font-semibold text-[#42566b] transition hover:bg-[#eef6fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]">
        LinkedIn<ExternalLink size={14} aria-hidden="true" />
      </a>
      <span className="sr-only" role="status">{copied ? 'Article link copied to clipboard.' : ''}</span>
    </div>
  )
}
