'use client'

import { Play, Users, CheckCircle, MessageCircle, TrendingUp, Award } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import Modal from '@/components/ui/Modal'

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="relative min-h-screen bg-white pt-24 overflow-hidden">
      {/* Minimal LinkedIn-style background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3F8FF] to-white"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Clean Badge */}
          <div className="inline-block mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#E7F3FF] text-[#0A66C2] rounded-lg text-sm rethink-sans-medium border border-[#0A66C2]/20">
              <Award className="w-4 h-4" />
              Community Driven Initiative
            </span>
          </div>

          {/* Clean Main Heading */}
          <h1 className="text-5xl md:text-7xl rethink-sans-bold text-[#000000] mb-6 tracking-tight">
            LinkedINspire
          </h1>
          
          {/* Bold Tagline */}
          <p className="text-2xl md:text-3xl text-[#434649] mb-4 max-w-4xl mx-auto rethink-sans-medium">
            Inspiring LinkedIn growth stories. Building personal brands together.
          </p>

          {/* Brief Intro */}
          <p className="text-lg text-[#666666] mb-12 max-w-3xl mx-auto leading-relaxed rethink-sans-regular">
            A FREE, power-packed live experience where the brightest creators, mentors, and founders share their growth playbook to help you build a LinkedIn profile that attracts opportunities.
          </p>

          {/* Clean Stats Cards */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-[#E8E8E8] hover:border-[#0A66C2] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-[#E7F3FF] flex items-center justify-center">
                <Users className="w-6 h-6 text-[#0A66C2]" />
              </div>
              <div className="text-left">
                <div className="text-2xl rethink-sans-bold text-[#000000]">1000+</div>
                <div className="text-[#666666] text-sm rethink-sans-regular">Community Members</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-[#E8E8E8] hover:border-[#0A66C2] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-[#E7F3FF] flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#0A66C2]" />
              </div>
              <div className="text-left">
                <div className="text-2xl rethink-sans-bold text-[#000000]">FREE</div>
                <div className="text-[#666666] text-sm rethink-sans-regular">Live Sessions</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-[#E8E8E8] hover:border-[#0A66C2] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-[#E7F3FF] flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#0A66C2]" />
              </div>
              <div className="text-left">
                <div className="text-2xl rethink-sans-bold text-[#000000]">Growth</div>
                <div className="text-[#666666] text-sm rethink-sans-regular">Focused</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-[#E8E8E8] hover:border-[#0A66C2] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-[#E7F3FF] flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#0A66C2]" />
              </div>
              <div className="text-left">
                <div className="text-2xl rethink-sans-bold text-[#000000]">1:1</div>
                <div className="text-[#666666] text-sm rethink-sans-regular">Feedback</div>
              </div>
            </div>
          </div>


          {/* Clean CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              variant="primary"
              size="lg"
              className="bg-[#0A66C2] text-white hover:bg-[#004182] px-8 py-3 rounded-lg transition-all duration-300 rethink-sans-medium border-0"
            >
              Join the Community
            </Button>
            
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-3 bg-white text-[#0A66C2] hover:bg-[#F4F4F4] px-8 py-3 rounded-lg border border-[#E8E8E8] hover:border-[#0A66C2] transition-all duration-300 rethink-sans-medium"
            >
              <Play size={16} className="fill-current" />
              <span>Watch Our Sessions</span>
            </button>

            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-[#0A66C2] hover:bg-[#F4F4F4] px-8 py-3 rounded-lg border border-[#E8E8E8] hover:border-[#0A66C2] transition-all duration-300 rethink-sans-medium"
            >
              Become a Campus Lead
            </Button>
          </div>

          {/* Simple Quote */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-[#E8E8E8] shadow-sm">
              <p className="text-[#434649] text-lg leading-relaxed rethink-sans-regular italic text-center">
                &ldquo;A community driven initiative to help students & professionals build their LinkedIn presence, grow their network & get inspired&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <Modal onClose={() => setShowVideo(false)}>
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/your-video-id"
              title="LinkedINspire Sessions"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      )}
    </section>
  )
}
