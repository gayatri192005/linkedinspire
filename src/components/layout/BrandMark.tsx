import Image from 'next/image'
import Link from 'next/link'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINKEDINSPIRE%20logo-oBsZN5cVkzuUkqMl7WSsBYCm92T0NX.jpeg'

type BrandMarkProps = {
  priority?: boolean
  compact?: boolean
  className?: string
}

export default function BrandMark({ priority = false, compact = false, className = '' }: BrandMarkProps) {
  return (
    <Link
      href="/"
      aria-label="LinkedINspire home"
      className={`inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] focus-visible:ring-offset-2 ${className}`}
    >
      <span className={`relative block overflow-hidden rounded-md bg-white ${compact ? 'h-10 w-[148px] 2xl:h-11 2xl:w-[180px]' : 'h-11 w-[158px] sm:w-[180px]'}`}>
        <Image
          src={logoUrl}
          alt="LinkedINspire logo with a blue wordmark and gold lightbulb"
          fill
          sizes="(max-width: 640px) 158px, 180px"
          priority={priority}
          className="object-cover object-center"
        />
      </span>
    </Link>
  )
}
