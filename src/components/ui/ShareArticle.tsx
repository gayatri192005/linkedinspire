'use client'

import { useState } from 'react'
import { Check, Copy, ExternalLink } from 'lucide-react'

export default function ShareArticle({ title, url }: { title: string; url: string }) {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'unavailable'>('idle')

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopyStatus('copied')
      window.setTimeout(() => setCopyStatus('idle'), 2200)
    } catch {
      setCopyStatus('unavailable')
    }
  }

  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`

  return (
    <div className="flex flex-wrap items-center gap-3 border-y border-[#dbe5ef] py-5">
      <span className="mr-1 text-sm font-semibold text-[#42566b]">Share this guide</span>
      <button type="button" onClick={copyLink} className="inline-flex items-center gap-2 rounded-full border border-[#c9d8e6] px-4 py-2 text-sm font-semibold text-[#42566b] transition hover:bg-[#eef6fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]">
        {copyStatus === 'copied' ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
        {copyStatus === 'copied' ? 'Link copied' : copyStatus === 'unavailable' ? 'Copy unavailable' : 'Copy link'}
      </button>
      <a href={shareUrl} target="_blank" rel="noopener noreferrer" aria-label={`Share ${title} on LinkedIn`} className="inline-flex items-center gap-2 rounded-full border border-[#c9d8e6] px-4 py-2 text-sm font-semibold text-[#42566b] transition hover:bg-[#eef6fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]">
        LinkedIn<ExternalLink size={14} aria-hidden="true" />
      </a>
      {copyStatus === 'unavailable' ? (
        <label className="basis-full text-sm text-[#53677d]">
          <span className="sr-only">Article link — select and copy manually</span>
          <input
            type="url"
            readOnly
            value={url}
            onFocus={(event) => event.currentTarget.select()}
            className="mt-2 w-full rounded-lg border border-[#c9d8e6] bg-[#f7f9fc] px-3 py-2 text-sm text-[#42566b] focus:border-[#0A66C2] focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/15"
          />
          <span className="mt-2 block">Clipboard access was denied. Select the link above and copy it manually.</span>
        </label>
      ) : null}
      <span className="sr-only" role="status">
        {copyStatus === 'copied' ? 'Article link copied to clipboard.' : copyStatus === 'unavailable' ? 'Clipboard access was denied. A link is available to copy manually.' : ''}
      </span>
    </div>
  )
}
