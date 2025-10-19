export default function ProblemsSection() {
  const problems = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Can't think of new content ideas",
      description: "Understand how to set up a content system so you never run out of ideas and create consistent content."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Struggle to get visibility!",
      description: "Learn to leverage the LinkedIn algorithm to expand your professional network and increase visibility."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Unable to expand your network",
      description: "Learn to leverage the LinkedIn algorithm to expand your professional network."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Finding it difficult to monetize your content",
      description: "Generate consistent leads and monetize your content and professional presence."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-[#F8FBFF] to-[#FDFAF5] relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-rose-300/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
            Are You Struggling With These Problems?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-[#0A66C2] mx-auto rounded-full shadow-lg shadow-[#0A66C2]/30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group"
            >
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Animated glow on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-rose-300/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-400/20 to-red-500/10 backdrop-blur-xl flex items-center justify-center mb-6 text-rose-600 shadow-lg border border-white/30 group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">{problem.title}</h3>
                <p className="text-[#56687A] leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="backdrop-blur-2xl bg-gradient-to-r from-[#0A66C2]/95 via-[#0077B5]/95 to-[#004182]/95 rounded-3xl p-12 text-white shadow-2xl shadow-[#0A66C2]/40 border border-white/20 relative overflow-hidden">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Decorative elements */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#004182]/30 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                "Grow Professionally Through LinkedIn"
              </h3>
              <p className="text-xl text-[#DCE6F1]">
                Transform your LinkedIn presence and unlock new opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
