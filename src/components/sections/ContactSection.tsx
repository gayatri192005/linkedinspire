import { ArrowRight, Mail } from 'lucide-react'
import ActionLink from '@/components/ui/ActionLink'
import { CONTACT_EMAIL } from '@/lib/site-content'

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#f7f9fc] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-[1.75rem] bg-[#102a43] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a9d0f5]">Let&apos;s connect</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Your next conversation starts here.</h2>
            <p className="mt-4 text-base leading-7 text-[#d8e3ed]">Have a question, an idea for a campus activity, or want to contribute as a speaker? Reach out to the team.</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <ActionLink href="/contact" variant="secondary" size="lg">Contact the team<ArrowRight size={17} aria-hidden="true" /></ActionLink>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 text-sm text-[#d8e3ed] underline decoration-white/30 underline-offset-4 hover:text-white">
              <Mail size={16} aria-hidden="true" />{CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
