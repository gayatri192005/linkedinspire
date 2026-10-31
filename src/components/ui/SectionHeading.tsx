export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow ? <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0A66C2]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-[#102a43] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[#53677d] sm:text-lg">{description}</p> : null}
    </div>
  )
}
