'use client'

import { Calendar, Users, Video, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function SessionsSection() {
  const sessions = [
    {
      id: 1,
      title: 'Growth Series ft. Swaroop Talks',
      date: 'October 10, 2025',
      speaker: 'Swaroop Talks',
      type: 'Live Session',
      description: 'Learn advanced LinkedIn growth strategies and content creation techniques from one of the top LinkedIn creators.',
      attendees: 450,
      duration: '90 min',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'LinkedINspire x Harshith Sai',
      date: 'September 28, 2025', 
      speaker: 'Harshith Sai',
      type: 'Recorded Session',
      description: 'Deep dive into personal branding and professional storytelling on LinkedIn platform.',
      attendees: 320,
      duration: '75 min',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Career Branding with Karthik Nagapuri',
      date: 'August 14, 2025',
      speaker: 'Karthik Nagapuri',
      type: 'Recorded Session', 
      description: 'Master the art of career branding and positioning yourself as an industry expert.',
      attendees: 280,
      duration: '80 min',
      status: 'completed'
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
          {sessions.map((session, index) => (
            <div key={session.id} className="backdrop-blur-xl bg-white/90 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
              
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

              <div className="relative z-10">
                {/* Session Type Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0A66C2]/40 group-hover:scale-110 transition-transform duration-300">
                  {session.type === 'Live Session' ? (
                    <Video className="w-8 h-8 text-white" />
                  ) : (
                    <Calendar className="w-8 h-8 text-white" />
                  )}
                </div>

                <h3 className="text-xl rethink-sans-bold text-[#000000] mb-3">{session.title}</h3>
                <p className="text-[#56687A] rethink-sans-regular mb-4 leading-relaxed">{session.description}</p>

                {/* Session Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-[#56687A]">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#56687A]">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{session.attendees} attendees</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#56687A]">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{session.duration}</span>
                  </div>
                </div>

                {/* Speaker */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-white rethink-sans-bold text-sm">
                    {session.speaker.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="rethink-sans-semibold text-[#000000]">{session.speaker}</p>
                    <p className="text-sm text-[#56687A]">Guest Speaker</p>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant={session.status === 'upcoming' ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {session.status === 'upcoming' ? 'Join Session' : 'View Highlights'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Community Impact */}
        <div className="backdrop-blur-2xl bg-gradient-to-r from-[#0A66C2]/95 via-[#0077B5]/95 to-[#004182]/95 rounded-3xl p-12 text-white overflow-hidden shadow-2xl shadow-[#0A66C2]/40 border border-white/20">
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Decorative gradient orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#004182]/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl rethink-sans-bold mb-6 text-center">Our Community Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl rethink-sans-bold mb-2">XXXX+</div>
                <p className="text-white/90">Students Impacted</p>
              </div>
              <div>
                <div className="text-4xl rethink-sans-bold mb-2">5+</div>
                <p className="text-white/90">Live Sessions</p>
              </div>
              <div>
                <div className="text-4xl rethink-sans-bold mb-2">4</div>
                <p className="text-white/90">Top Guest Speakers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
