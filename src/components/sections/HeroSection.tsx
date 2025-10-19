'use client'

import { Play, Users, Star, Clock, CheckCircle, Globe, MessageCircle, TrendingUp, Award, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import Modal from '@/components/ui/Modal'

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#004182] pt-24 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Premium Badge */}
          <div className="inline-block mb-8 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
              <span className="relative flex items-center gap-2 px-6 py-3 bg-white text-[#0A66C2] rounded-full text-sm font-bold tracking-wide shadow-2xl rethink-sans-bold">
                <Zap className="w-4 h-4 text-yellow-500" />
                Community Driven Initiative
                <Award className="w-4 h-4 text-yellow-500" />
              </span>
            </div>
          </div>

          {/* Main Heading with 3D Effect */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight relative animate-slide-up rethink-sans-extrabold">
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-300 blur-lg opacity-50"></span>
              <span className="relative">LinkedINspire</span>
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-4 max-w-3xl mx-auto font-semibold animate-slide-up animation-delay-200 rethink-sans-semibold">
            Connecting Learners with LinkedIn Leaders
          </p>

          {/* Stats Bar with Cards */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-16 animate-slide-up animation-delay-400">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-white rethink-sans-extrabold">3,361+</div>
                <div className="text-white/80 text-sm font-medium rethink-sans-medium">Students Enrolled</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/30 flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-white rethink-sans-extrabold">4.88</div>
                <div className="text-white/80 text-sm font-medium rethink-sans-medium">Average Rating</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-green-400/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-300" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-white rethink-sans-extrabold">98%</div>
                <div className="text-white/80 text-sm font-medium rethink-sans-medium">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Large LinkedIn Icon with Animation */}
          <div className="relative w-64 h-64 mx-auto mb-16 animate-scale-in animation-delay-600">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-[3rem] blur-2xl opacity-30 animate-pulse"></div>
            
            <div className="relative bg-white rounded-[3rem] w-full h-full flex items-center justify-center shadow-2xl transform hover:scale-105 hover:rotate-3 transition-all duration-500">
              <svg className="w-36 h-36 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto animate-slide-up animation-delay-800">
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#0A66C2] to-[#004182] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <p className="text-[#0A66C2] font-black text-2xl mb-2 rethink-sans-extrabold">10+ Hours</p>
              <p className="text-gray-600 font-medium rethink-sans-medium">Course Duration</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <p className="text-green-600 font-black text-2xl mb-2 rethink-sans-extrabold">100% Refund</p>
              <p className="text-gray-600 font-medium rethink-sans-medium">No Questions Asked</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <p className="text-purple-600 font-black text-2xl mb-2 rethink-sans-extrabold">English</p>
              <p className="text-gray-600 font-medium rethink-sans-medium">Available In</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <p className="text-orange-600 font-black text-2xl mb-2 rethink-sans-extrabold">Live Q&A</p>
              <p className="text-gray-600 font-medium rethink-sans-medium">Group Sessions</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up animation-delay-1000">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-[#0A66C2] hover:bg-yellow-300 hover:text-[#004182] font-black text-lg px-10 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rethink-sans-bold"
            >
              Join the Community Now
            </Button>
            
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#0A66C2] font-bold text-lg px-8 py-6 rounded-2xl border-2 border-white/30 hover:border-white transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105 rethink-sans-bold"
            >
              <div className="w-12 h-12 bg-white text-[#0A66C2] rounded-full flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-300">
                <Play size={20} className="ml-1" fill="currentColor" />
              </div>
              <span>Watch Our Story</span>
            </button>
          </div>

          {/* Testimonial Quote */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border-2 border-white/20 shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                <Star className="w-6 h-6 text-yellow-300 fill-yellow-300 mx-1" />
                <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                <Star className="w-6 h-6 text-yellow-300 fill-yellow-300 mx-1" />
                <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
              </div>
              <p className="text-white text-xl md:text-2xl font-medium leading-relaxed italic">
                "A community driven initiative to help students & professionals build their LinkedIn presence, grow their network & get inspired"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <Modal onClose={() => setShowVideo(false)}>
          <div className="aspect-video rounded-2xl overflow-hidden">
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
