import Image from 'next/image'
import { Check } from 'lucide-react'

export default function CourseInstructors() {
  const mainInstructor = {
    name: 'Ankur Warikoo',
    title: 'LinkedIn Top Voice',
    followers: '16 Million+',
    impressions: '10.2 Million+',
    linkedinFollowers: '2.5 Million+',
    achievement: 'Ankur is 1 of the only 4 people in the world with 2 Million+ followers on YouTube, Instagram, and LinkedIn each!',
    image: '/images/ankur-warikoo.jpg'
  }

  const guestLecturers = [
    {
      name: 'Shreya Pattar',
      handle: '@shreyapattar',
      description: 'Founder of a personal branding agency. Shreya shares insights on building engagement.',
      image: '/images/shreya-pattar.jpg'
    },
    {
      name: 'Vaibhav Sisinty',
      handle: '@vaibhavsisinty',
      description: 'An entrepreneur and marketing consultant. Vaibhav helps you leverage your profile for professional growth.',
      image: '/images/vaibhav-sisinty.jpg'
    },
    {
      name: 'Vedika Bhaia',
      handle: '@vedikabhaia',
      description: 'A LinkedIn strategist. Vedika guides you through the basics of building a personal brand online.',
      image: '/images/vedika-bhaia.jpg'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-[#F8FBFF] to-[#FDFAF5] relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#DCE6F1]/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
            Course Instructors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-[#0A66C2] mx-auto rounded-full shadow-lg shadow-[#0A66C2]/30"></div>
        </div>

        {/* Main Instructor - Glossy Card */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-[#DCE6F1]/60 via-white/50 to-[#0A66C2]/20 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl border border-white/40 relative overflow-hidden">
          {/* Glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0A66C2]/10 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
            <div className="flex-shrink-0">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                
                <div className="relative w-64 h-64 rounded-3xl overflow-hidden border-4 border-white/50 shadow-2xl backdrop-blur-xl">
                  <div className="w-full h-full bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#004182] flex items-center justify-center">
                    {/* Glossy overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                    <span className="text-white text-6xl font-bold relative z-10">AW</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 backdrop-blur-xl bg-gradient-to-r from-[#0A66C2] to-[#004182] text-white px-6 py-3 rounded-full text-center font-semibold shadow-lg shadow-[#0A66C2]/40 border border-white/20">
                LinkedIn Top Voice
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-[#000000] mb-6 leading-tight">
                Instructed By<br />Ankur Warikoo
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-5 text-center shadow-lg border border-white/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#0A66C2] to-[#004182] bg-clip-text text-transparent relative z-10">{mainInstructor.followers}</p>
                  <p className="text-[#56687A] text-sm mt-1 relative z-10">followers across<br />social platforms</p>
                </div>
                
                <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-5 text-center shadow-lg border border-white/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#0A66C2] to-[#004182] bg-clip-text text-transparent relative z-10">{mainInstructor.impressions}</p>
                  <p className="text-[#56687A] text-sm mt-1 relative z-10">monthly impressions<br />on LinkedIn</p>
                </div>
                
                <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-5 text-center shadow-lg border border-white/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#0A66C2] to-[#004182] bg-clip-text text-transparent relative z-10">{mainInstructor.linkedinFollowers}</p>
                  <p className="text-[#56687A] text-sm mt-1 relative z-10">followers on LinkedIn</p>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-r from-[#000000]/95 via-[#0A1929]/95 to-[#000000]/95 text-white rounded-2xl p-6 shadow-xl border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                <p className="text-lg italic leading-relaxed relative z-10">
                  {mainInstructor.achievement}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Guest Lecturers Header */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-[#000000] mb-2">Special Guest Lecturers!</h3>
        </div>

        {/* Guest Lecturers - Glossy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guestLecturers.map((lecturer, index) => (
            <div key={index} className="backdrop-blur-xl bg-gradient-to-br from-[#0A66C2]/95 via-[#0077B5]/95 to-[#004182]/95 rounded-3xl p-8 text-white shadow-2xl shadow-[#0A66C2]/40 border border-white/20 hover:scale-105 hover:shadow-3xl transition-all duration-500 relative overflow-hidden group">
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Animated glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold">{lecturer.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1 flex items-center gap-2">
                      {lecturer.name}
                      <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30">
                        <Check className="w-4 h-4 text-[#DCE6F1]" />
                      </div>
                    </h4>
                    <p className="text-[#DCE6F1] text-sm">{lecturer.handle}</p>
                  </div>
                </div>
                <p className="text-white/95 leading-relaxed">{lecturer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
