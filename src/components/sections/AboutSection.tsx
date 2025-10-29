import { Lightbulb, Users, TrendingUp } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-[#F8FBFF] to-[#FDFAF5] relative overflow-hidden">
      {/* Decorative glossy orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#DCE6F1]/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl rethink-sans-bold text-[#000000] mb-6">
            What is LinkedINspire?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-[#0A66C2] mx-auto mb-8 rounded-full shadow-lg shadow-[#0A66C2]/30"></div>
          <p className="text-xl rethink-sans-medium text-[#56687A] max-w-4xl mx-auto leading-relaxed">
            LinkedINspire is a community-driven initiative that brings together LinkedIn growth experts, 
            top creators, and ambitious professionals to share knowledge, strategies, and real success stories 
            that inspire authentic growth and meaningful connections.
          </p>
        </div>

        {/* Who are we? & What makes us different? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Who are we? */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/90 via-white/80 to-[#F8FBFF]/70 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl rethink-sans-bold text-[#000000] mb-4">Who are we?</h3>
              <p className="text-[#56687A] leading-relaxed mb-4">
                We are a passionate community of LinkedIn enthusiasts, creators, and professionals who believe in the power of authentic storytelling and genuine connections. Our mission is to democratize LinkedIn growth by sharing proven strategies from industry leaders.
              </p>
              <div className="flex items-center gap-2 text-[#0A66C2] rethink-sans-semibold">
                <Users className="w-5 h-5" />
                <span>Community-First Approach</span>
              </div>
            </div>
          </div>

          {/* What makes us different? */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-[#0A66C2]/10 via-white/80 to-[#DCE6F1]/70 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl rethink-sans-bold text-[#000000] mb-4">What makes us different?</h3>
              <p className="text-[#56687A] leading-relaxed mb-4">
                Unlike traditional training programs, we focus on building a supportive community where knowledge flows freely. Our speakers aren&apos;t just experts – they&apos;re mentors who provide 1:1 feedback, exclusive resources, and ongoing support to help you succeed.
              </p>
              <div className="flex items-center gap-2 text-[#0A66C2] rethink-sans-semibold">
                <TrendingUp className="w-5 h-5" />
                <span>Real Results, Real Impact</span>
              </div>
            </div>
          </div>
        </div>

        {/* Value Propositions with Glossy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 backdrop-blur-xl bg-gradient-to-br from-amber-50/80 via-white/70 to-orange-50/60 rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/40 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
                            <h3 className="text-2xl rethink-sans-bold text-[#000000] mb-3">💡 Learn</h3>
              <p className="text-[#56687A] rethink-sans-regular leading-relaxed">
                Master LinkedIn strategies from top creators and industry experts
              </p>
            </div>
          </div>

          <div className="text-center p-8 backdrop-blur-xl bg-gradient-to-br from-sky-50/80 via-white/70 to-cyan-50/60 rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl hover:shadow-[#0A66C2]/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#0A66C2]/40 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl rethink-sans-bold text-[#000000] mb-3">🔗 Connect</h3>
              <p className="text-[#56687A] rethink-sans-regular leading-relaxed">
                Build meaningful professional relationships and expand your network
              </p>
            </div>
          </div>

          <div className="text-center p-8 backdrop-blur-xl bg-gradient-to-br from-rose-50/80 via-white/70 to-pink-50/60 rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-rose-500/40 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl rethink-sans-bold text-[#000000] mb-3">🚀 Grow</h3>
              <p className="text-[#56687A] rethink-sans-regular leading-relaxed">
                Scale your personal brand and become a thought leader in your niche
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement with Glossy Effect */}
        <div className="relative backdrop-blur-2xl bg-gradient-to-r from-[#0A66C2]/95 via-[#0077B5]/95 to-[#004182]/95 rounded-3xl p-12 text-white overflow-hidden shadow-2xl shadow-[#0A66C2]/40 border border-white/20">
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Decorative gradient orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#004182]/30 rounded-full blur-3xl"></div>
          
          <p className="text-2xl md:text-3xl font-semibold italic relative z-10 leading-relaxed">
            &ldquo;A community driven Initiative to help students & professionals build their LinkedIn presence, grow their network & get inspired&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
