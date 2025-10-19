'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How long will it take to get access to the course?',
      answer: 'Your credentials to access the course will be delivered to your inbox within 5-10 minutes of your purchase. Please check your promotions/updates tab and spam folder as well.',
      icon: '👤'
    },
    {
      question: 'What is the time commitment required for the course?',
      answer: 'The course is self-paced and can be completed at your convenience. The total duration is 10+ hours of content, which you can spread across multiple sessions based on your schedule.',
      icon: '⏰'
    },
    {
      question: 'Which language is the course in?',
      answer: 'The course is delivered in English to ensure maximum accessibility and professional communication standards.',
      icon: '🎤'
    },
    {
      question: 'Do I need to have a LinkedIn account for this course?',
      answer: 'Yes, you will need an active LinkedIn account to implement the strategies taught in this course. If you don\'t have one, you can create a free account on LinkedIn.',
      icon: '💼'
    },
    {
      question: 'Can I cancel my course purchase and get a refund if I don\'t like it?',
      answer: 'Yes! We offer a 100% refund policy. Cancel anytime within 14 days of purchase and get a full refund, no questions asked.',
      icon: '💰'
    },
    {
      question: 'How can I contact you in case of any issues or concerns?',
      answer: 'You can reach out to our support team via WhatsApp or email. We typically respond within 24 hours on business days.',
      icon: '📞'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-[#F8FBFF] to-[#FDFAF5] relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-[#DCE6F1]/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-[#0A66C2] mx-auto rounded-full shadow-lg shadow-[#0A66C2]/30"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/80 rounded-2xl overflow-hidden border border-white/40 shadow-lg hover:shadow-2xl hover:shadow-[#0A66C2]/20 hover:border-[#0A66C2]/50 transition-all duration-300 relative"
            >
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
              
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-[#0A66C2]/5 to-transparent hover:from-[#0A66C2]/10 transition-all duration-300 relative z-10"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DCE6F1] to-[#0A66C2]/20 flex items-center justify-center text-2xl shadow-md backdrop-blur-xl border border-white/40 flex-shrink-0">
                    {faq.icon}
                  </div>
                  <span className="text-lg font-semibold text-[#000000]">{faq.question}</span>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#004182] flex items-center justify-center shadow-md">
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-6 py-5 bg-gradient-to-b from-white/50 to-white/30 backdrop-blur-sm border-t border-white/30 relative z-10">
                  <div className="backdrop-blur-xl bg-white/60 rounded-xl p-4 border border-white/40">
                    <p className="text-[#56687A] leading-relaxed pl-16">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
