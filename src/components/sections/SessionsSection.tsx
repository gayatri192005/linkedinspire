'use client'

import { Calendar, Users, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function SessionsSection() {
  const sessions = [
    {
      id: 1,
      title: 'LinkedIn Growth Series ft. Swaroop Talks',
      date: 'November 15, 2025',
      speaker: 'Swaroop Talks',
      speakerDescription: 'Tech Mentor & Content Creator with 600K+ Followers. Leading expert in LinkedIn growth strategies and content creation techniques.',
      type: 'Live Session',
      attendees: 500,
      duration: '90 min',
      status: 'upcoming',
      highlights: ['Growth Strategies', 'Content Creation', 'Engagement Tips']
    },
    {
      id: 2,
      title: 'LinkedINspire x Harshith Sai Tunuguntla',
      date: 'October 20, 2025', 
      speaker: 'Harshith Sai Tunuguntla',
      speakerDescription: 'LinkedIn Top Voice, Mentor & Software Engineer with 100K+ Followers. Expert in personal branding and professional storytelling.',
      type: 'Completed Session',
      attendees: 320,
      duration: '75 min',
      status: 'completed',
      highlights: ['Personal Branding', 'Professional Storytelling', 'Profile Optimization']
    },
    {
      id: 3,
      title: 'Career Branding with Karthik Nagapuri',
      date: 'October 5, 2025',
      speaker: 'Karthik Nagapuri',
      speakerDescription: 'Public Speaker and expert on the evolving startup ecosystem in India. Helps professionals build strong career brands.',
      type: 'Completed Session', 
      attendees: 280,
      duration: '80 min',
      status: 'completed',
      highlights: ['Career Branding', 'Startup Ecosystem', 'Industry Leadership']
    },
    {
      id: 4,
      title: 'LinkedIN Foundation Series ft. Gayatri G & Mythrisri',
      date: 'September 15, 2025',
      speaker: 'Gayatri G & Mythrisri Kurra',
      speakerDescription: 'Co-founders of LinkedINspire, passionate community leaders focused on empowering students and professionals in their LinkedIn journey.',
      type: 'Completed Session',
      attendees: 400,
      duration: '120 min',
      status: 'completed',
      highlights: ['LinkedIn Basics', 'Profile Optimization', 'Personal Branding', 'AI Tools']
    }
  ]

  return (
    <section id="sessions" className="py-20 bg-gradient-to-br from-white via-[#F8FBFF] to-[#FDFAF5] relative overflow-hidden">
      {/* Decorative glossy orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#DCE6F1]/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl rethink-sans-bold text-[#000000] mb-6">
            Our Sessions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-[#0A66C2] mx-auto mb-8 rounded-full shadow-lg shadow-[#0A66C2]/30"></div>
          <p className="text-xl rethink-sans-medium text-[#56687A] max-w-4xl mx-auto leading-relaxed">
            Join our live sessions with industry experts and LinkedIn top voices who share real insights and actionable strategies
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {sessions.map((session) => (
            <div key={session.id} className="backdrop-blur-xl bg-white/90 rounded-3xl overflow-hidden border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group">
              {/* Image Header */}
              <div className="relative h-54 bg-gradient-to-br from-[#0A66C2] to-[#004182] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/90 to-[#004182]/90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h4 className="text-lg rethink-sans-bold mb-2">LinkedINspire</h4>
                    <p className="text-sm opacity-90">{session.type}</p>
                  </div>
                </div>
                
                {/* Time and Attendee Overlay */}
                <div className="absolute bottom-4 left-4 flex gap-4">
                  <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md text-white text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{session.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md text-white text-xs">
                    <Users className="w-3 h-3" />
                    <span>{session.attendees}</span>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm rethink-sans-semibold ${
                    session.status === 'upcoming' 
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white' 
                      : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white'
                  }`}>
                    {session.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </span>
                </div>
              </div>

              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 p-8">
                {/* Date */}
                <div className="flex items-center gap-2 text-[#0A66C2] mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm rethink-sans-semibold">{session.date}</span>
                </div>
                
                <h3 className="text-xl rethink-sans-bold text-[#000000] mb-3">{session.title}</h3>

                {/* Speaker */}
                <div className="mb-6">
                  <p className="rethink-sans-semibold text-[#000000]">{session.speaker}</p>
                  <p className="text-sm text-[#56687A]">Guest Speaker</p>
                </div>

                {/* Session Highlights */}
                {session.highlights && (
                  <div className="mb-6">
                    <h4 className="text-sm rethink-sans-semibold text-[#000000] mb-2">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {session.highlights.map((highlight, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-[#DCE6F1]/80 to-[#DCE6F1]/60 text-[#0A66C2] rounded-full text-xs rethink-sans-medium border border-white/30"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <Button
                  variant={session.status === 'upcoming' ? 'primary' : 'secondary'}
                  className={`w-full ${session.status === 'completed' ? 'border-2 border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white' : ''}`}
                >
                  {session.status === 'upcoming' ? 'Register Now' : 'View Recording'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
