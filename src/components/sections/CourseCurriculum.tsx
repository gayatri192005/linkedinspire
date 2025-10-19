'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react'

export default function CourseCurriculum() {
  const [openModule, setOpenModule] = useState<number | null>(0)

  const modules = [
    {
      id: 1,
      title: 'Introspection',
      duration: '1 HOUR',
      topics: [
        'Understand your motivation behind LinkedIn content creation.',
        'Understand why LinkedIn is the perfect platform for your niche.'
      ]
    },
    {
      id: 2,
      title: 'Target Audience',
      duration: '2 HOURS',
      topics: [
        'Define your ideal audience persona',
        'Research audience pain points and interests',
        'Create content that resonates with your target market'
      ]
    },
    {
      id: 3,
      title: 'Creation Process',
      duration: '2 HOURS',
      topics: [
        'Content ideation techniques',
        'Writing frameworks for LinkedIn',
        'Visual content creation tips',
        'Post scheduling and optimization'
      ]
    },
    {
      id: 4,
      title: 'LinkedIn Analytics',
      duration: '2 HOURS',
      topics: [
        'Understanding LinkedIn analytics dashboard',
        'Key metrics to track',
        'A/B testing your content',
        'Improving performance based on data'
      ]
    },
    {
      id: 5,
      title: 'Personal Branding',
      duration: '2 HOURS',
      topics: [
        'Building a consistent brand identity',
        'Profile optimization strategies',
        'Storytelling techniques',
        'Networking and engagement tactics'
      ]
    }
  ]

  const gradients = [
    'from-sky-100/80 to-[#DCE6F1]/60',
    'from-amber-100/80 to-yellow-50/60',
    'from-cyan-100/80 to-sky-50/60',
    'from-blue-100/80 to-[#DCE6F1]/60',
    'from-rose-100/80 to-pink-50/60'
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-[#F8FBFF] to-[#FDFAF5] relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            Course Curriculum
          </h2>
          <p className="text-xl text-[#56687A]">
            Self-paced modules, watch anytime, anywhere.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-[#0A66C2] mx-auto mt-6 rounded-full shadow-lg shadow-[#0A66C2]/30"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Glossy Illustration */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="backdrop-blur-2xl bg-gradient-to-br from-[#DCE6F1]/60 via-white/50 to-[#0A66C2]/20 rounded-3xl p-12 border border-white/40 shadow-2xl">
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 relative overflow-hidden">
                  {/* Glossy overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#004182] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#0A66C2]/50">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gradient-to-r from-[#DCE6F1] to-[#0A66C2]/30 rounded-full w-3/4 mx-auto"></div>
                      <div className="h-4 bg-gradient-to-r from-[#DCE6F1] to-[#0A66C2]/30 rounded-full w-1/2 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glossy Module List */}
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className={`backdrop-blur-xl bg-gradient-to-br ${gradients[index]} rounded-2xl overflow-hidden border border-white/40 shadow-lg hover:shadow-2xl hover:shadow-[#0A66C2]/20 hover:border-[#0A66C2]/50 transition-all duration-300 relative`}
              >
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
                
                <button
                  onClick={() => setOpenModule(openModule === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left relative z-10"
                >
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#0A66C2] mb-2 tracking-wide">
                      MODULE {module.id} | {module.duration}
                    </div>
                    <div className="text-xl font-bold text-[#000000]">
                      {module.title}
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#004182] flex items-center justify-center shadow-md">
                      {openModule === index ? (
                        <ChevronUp className="w-5 h-5 text-white" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>
                </button>

                {openModule === index && (
                  <div className="px-6 pb-6 relative z-10">
                    <div className="backdrop-blur-xl bg-white/60 rounded-xl p-4 border border-white/40">
                      <ul className="space-y-3">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-sm">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            <span className="text-[#56687A] leading-relaxed">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
