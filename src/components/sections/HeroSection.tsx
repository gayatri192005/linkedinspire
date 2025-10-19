'use client'

import { Play } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import Modal from '@/components/ui/Modal'

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-[#F8FBFF] to-[#FDFAF5] pt-24 overflow-hidden">
      {/* Glossy top accent line with gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-[#0A66C2] shadow-lg shadow-[#0A66C2]/30"></div>
      
      {/* Decorative glossy orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-[#DCE6F1]/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Glossy Badge */}
          <div className="inline-block mb-8">
            <span className="px-6 py-2.5 bg-gradient-to-r from-[#DCE6F1]/90 to-[#DCE6F1]/70 backdrop-blur-xl text-[#0A66C2] rounded-full text-sm font-semibold tracking-wide border border-white/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Learn to LinkedIn
            </span>
          </div>

          {/* Glossy Heading with shine effect */}
          <h1 className="text-5xl md:text-6xl font-bold text-[#000000] mb-4 tracking-tight relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#000000] via-[#0A66C2] to-[#000000] animate-gradient">
              LinkedIn Mastery Course
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#56687A] mb-3 max-w-3xl mx-auto font-light">
            Grow Professionally Through LinkedIn & Become a LinkedIn Top Voice
          </p>

          {/* Glossy Stats Bar */}
          <div className="inline-flex flex-wrap justify-center items-center gap-6 mb-16 px-8 py-4 bg-white/70 backdrop-blur-xl rounded-full border border-white/40 shadow-lg">
            <div className="flex items-center gap-2 text-[#56687A]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A66C2]/20 to-[#0A66C2]/5 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <span className="font-semibold">3,361+ Enrolled</span>
            </div>
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#0A66C2] to-[#56687A] rounded-full"></div>
            <div className="flex items-center gap-2 text-[#56687A]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E7A33E]/20 to-[#E7A33E]/5 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#E7A33E]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="font-semibold">4.88 Rating</span>
            </div>
          </div>

          {/* Glossy LinkedIn Icon with animated glow */}
          <div className="relative w-52 h-52 mx-auto mb-16 group">
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            {/* Main icon container */}
            <div className="relative bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#004182] rounded-3xl w-full h-full flex items-center justify-center shadow-2xl shadow-[#0A66C2]/40 backdrop-blur-xl border border-white/20 group-hover:scale-105 transition-transform duration-500">
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl"></div>
              
              <svg className="w-28 h-28 text-white relative z-10 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
          </div>

          {/* Glossy Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-2xl hover:shadow-[#0A66C2]/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
              
              <div className="text-[#0A66C2] mb-3 relative">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#0A66C2]/20 to-[#0A66C2]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#000000] font-bold mb-1 text-lg relative">10+ Hours</p>
              <p className="text-[#56687A] text-sm relative">Course Duration</p>
            </div>
            
            <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-2xl hover:shadow-[#0A66C2]/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
              
              <div className="text-[#0A66C2] mb-3 relative">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#0A66C2]/20 to-[#0A66C2]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#000000] font-bold mb-1 text-lg relative">100% Refund</p>
              <p className="text-[#56687A] text-sm relative">No Questions Asked</p>
            </div>
            
            <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-2xl hover:shadow-[#0A66C2]/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
              
              <div className="text-[#0A66C2] mb-3 relative">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#0A66C2]/20 to-[#0A66C2]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
              </div>
              <p className="text-[#000000] font-bold mb-1 text-lg relative">English</p>
              <p className="text-[#56687A] text-sm relative">Available In</p>
            </div>
            
            <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-2xl hover:shadow-[#0A66C2]/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
              
              <div className="text-[#0A66C2] mb-3 relative">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#0A66C2]/20 to-[#0A66C2]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#000000] font-bold mb-1 text-lg relative">Live Q&A</p>
              <p className="text-[#56687A] text-sm relative">Group Sessions</p>
            </div>
          </div>

          {/* Glossy CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="primary"
              size="lg"
              className="group relative"
            >
              Enroll Now - Starting From ₹1,799/-
            </Button>
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-3 text-[#0A66C2] hover:text-[#004182] transition-colors font-semibold group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#DCE6F1]/90 to-[#DCE6F1]/70 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/50 shadow-lg hover:shadow-xl group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#0A66C2] group-hover:to-[#004182] transition-all duration-300">
                <Play size={22} className="group-hover:text-white transition-colors" />
              </div>
              <span>Watch Trailer</span>
            </button>
          </div>

          {/* Glossy Divider */}
          <div className="relative w-24 h-1 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A66C2]/30 to-transparent backdrop-blur-sm rounded-full"></div>
          </div>

          {/* Minimal Tagline with subtle glow */}
          <div className="inline-block px-8 py-4 bg-white/50 backdrop-blur-xl rounded-2xl border border-white/40 shadow-lg">
            <p className="text-[#56687A] text-base leading-relaxed">
              A community driven initiative to help students & professionals build their LinkedIn presence, grow their network & get inspired
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <Modal onClose={() => setShowVideo(false)}>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/your-video-id"
              title="Course Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      )}
    </section>
  )
}
