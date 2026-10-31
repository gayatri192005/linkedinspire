'use client'

import { useId, useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import Button from '@/components/ui/Button'
import { CONTACT_EMAIL } from '@/lib/site-content'

export type FormField = {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'url' | 'select' | 'textarea'
  required?: boolean
  placeholder?: string
  options?: { label: string; value: string }[]
  rows?: number
  autoComplete?: string
  minLength?: number
  maxLength?: number
  helpText?: string
}

type EmailEnquiryFormProps = {
  title: string
  description: string
  fields: FormField[]
  subjectText: string
  submitLabel?: string
  initialValues?: Record<string, string>
}

export default function EmailEnquiryForm({
  title,
  description,
  fields,
  subjectText,
  submitLabel = 'Prepare email draft',
  initialValues = {},
}: EmailEnquiryFormProps) {
  const [draftMessage, setDraftMessage] = useState('')
  const headingId = useId()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const values = new FormData(form)
    const name = String(values.get('name') ?? '').trim()
    const chosenSubject = String(values.get('subject') ?? '').trim()
    const body = fields
      .map((field) => `${field.label}:\n${String(values.get(field.name) ?? '').trim()}`)
      .join('\n\n')
    const emailSubject = `[LinkedINspire] ${chosenSubject || subjectText}${name ? ` — ${name}` : ''}`
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`

    setDraftMessage(`Your email app should open with a draft addressed to ${CONTACT_EMAIL}. This website has not sent or stored your details. Review and send the draft in your email app, or email the team directly if no app opens.`)
    form.reset()
    window.location.assign(mailtoUrl)
  }

  return (
    <section className="rounded-2xl border border-[#dbe5ef] bg-white p-6 shadow-sm sm:p-8" aria-labelledby={headingId}>
      <h2 id={headingId} className="text-2xl font-bold text-[#102a43]">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[#53677d]">{description}</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="mb-2 block text-sm font-semibold text-[#243b53]">
              {field.label}{field.required ? <span aria-hidden="true"> *</span> : null}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                rows={field.rows ?? 5}
                required={field.required}
                minLength={field.minLength}
                maxLength={field.maxLength ?? 2500}
                placeholder={field.placeholder}
                defaultValue={initialValues[field.name]}
                className="w-full rounded-xl border border-[#c9d8e6] bg-white px-4 py-3 text-sm text-[#102a43] placeholder:text-[#8a9aab] focus:border-[#0A66C2] focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/15"
              />
            ) : field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                defaultValue={initialValues[field.name] ?? ''}
                className="w-full rounded-xl border border-[#c9d8e6] bg-white px-4 py-3 text-sm text-[#102a43] focus:border-[#0A66C2] focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/15"
              >
                <option value="">Choose an option</option>
                {(field.options ?? []).map((option) => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                minLength={field.minLength}
                maxLength={field.maxLength ?? 250}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                defaultValue={initialValues[field.name]}
                className="w-full rounded-xl border border-[#c9d8e6] bg-white px-4 py-3 text-sm text-[#102a43] placeholder:text-[#8a9aab] focus:border-[#0A66C2] focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/15"
              />
            )}
            {field.helpText ? <p className="mt-1.5 text-xs leading-5 text-[#687b8c]">{field.helpText}</p> : null}
          </div>
        ))}

        <p className="rounded-xl bg-[#f3f8fd] p-3 text-xs leading-5 text-[#53677d]">
          This form prepares an email draft on your device. It does not submit information to or store information on this website.
        </p>
        <Button type="submit" size="lg" className="w-full">
          <Send size={17} aria-hidden="true" />{submitLabel}
        </Button>
        {draftMessage ? <p role="status" className="rounded-xl border border-[#b9dcc6] bg-[#f1f9f3] p-4 text-sm leading-6 text-[#215c38]">{draftMessage}</p> : null}
      </form>
    </section>
  )
}
