import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

type MechanicalActionButtonProps = {
  href: string
  children: ReactNode
}

const corners = [
  { id: 'top-left', position: 'left-2 top-2 border-l border-t' },
  { id: 'top-right', position: 'right-2 top-2 border-r border-t' },
  { id: 'bottom-left', position: 'bottom-2 left-2 border-b border-l' },
  { id: 'bottom-right', position: 'bottom-2 right-2 border-b border-r' },
]

export default function MechanicalActionButton({ href, children }: MechanicalActionButtonProps) {
  return (
    <Link
      href={href}
      className="mechanical-action-button group relative inline-flex min-h-12 items-center gap-3 border border-[#4d5863] bg-[#20262d] px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f4f6f7] shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] transition-none active:scale-[0.97] active:transition-none"
    >
      {corners.map((corner) => (
        <span
          key={corner.id}
          aria-hidden="true"
          className={`mechanical-action-corner mechanical-action-corner--${corner.id} pointer-events-none absolute size-2 border-[#bbc4ce] ${corner.position}`}
        />
      ))}
      <span className="relative z-10">{children}</span>
      <ArrowUpRight
        size={16}
        aria-hidden="true"
        className="mechanical-action-button-icon relative z-10 text-[#f1bd4a]"
      />
    </Link>
  )
}
