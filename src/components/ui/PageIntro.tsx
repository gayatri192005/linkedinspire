import type { ReactNode } from 'react'

export default function PageIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  children,
}: {
  eyebrow?: string
  title: string
  description: string
  align?: 'left' | 'center'
  children?: ReactNode
}) {
  return (
    <section className="border-b border-[#dbe5ef] bg-[#eef5fb] pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${align === 'center' ? 'text-center' : ''}`}>
        {eyebrow ? (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0A66C2]">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#102a43] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className={`mt-5 max-w-3xl text-base leading-7 text-[#53677d] sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
        {children ? <div className={`mt-7 flex flex-wrap gap-3 ${align === 'center' ? 'justify-center' : ''}`}>{children}</div> : null}
      </div>
    </section>
  )
}
