import { Calendar, Clock, Video } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function SessionsSection() {
  const sessions = [
    {
      title: 'Growth Series ft. Swaroop Talks',
      date: 'October 10, 2025',
      speaker: '@SwaroopTalks',
      duration: '90 minutes',
      type: 'Live Session',
      status: 'Upcoming',
    },
    {
      title: 'LinkedINspire x Harshith Sai',
      date: 'September 28, 2025',
      speaker: '@HarshithSai',
      duration: '75 minutes',
      type: 'Workshop',
      status: 'Completed',
    },
    {
      title: 'Career Branding with Karthik Nagapuri',
      date: 'August 14, 2025',
      speaker: '@KarthikNagapuri',
      duration: '60 minutes',
      type: 'Masterclass',
      status: 'Completed',
    },
  ]

  return (
    <section id="sessions" className="py-20 bg-gradient-to-br from-white via-[#F8FBFF] to-[#FDFAF5] relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#DCE6F1]/40 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            Our Sessions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-[#0A66C2] mx-auto mb-6 rounded-full shadow-lg shadow-[#0A66C2]/30"></div>
          <p className="text-xl text-[#56687A]">
            Exclusive live sessions with industry leaders and LinkedIn Top Voices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/80 rounded-3xl overflow-hidden border border-white/40 shadow-xl hover:shadow-2xl hover:shadow-[#0A66C2]/20 transition-all duration-500 hover:-translate-y-2 relative group"
            >
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none z-10"></div>
              
              <div className="backdrop-blur-xl bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-[#004182] p-6 text-white relative overflow-hidden">
                {/* Header glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-1.5 backdrop-blur-xl bg-white/30 rounded-full text-sm font-semibold border border-white/30 shadow-md">
                      {session.type}
                    </span>
                    <span className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-md backdrop-blur-xl border border-white/30 ${
                      session.status === 'Upcoming' 
                        ? 'bg-gradient-to-r from-emerald-400 to-green-500 text-white' 
                        : 'bg-white/40 text-white'
                    }`}>
                      {session.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{session.title}</h3>
                  <p className="text-[#DCE6F1]">{session.speaker}</p>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 backdrop-blur-xl bg-white/60 rounded-xl p-3 border border-white/40">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A66C2]/20 to-[#0A66C2]/5 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[#0A66C2]" />
                    </div>
                    <span className="text-[#56687A] font-medium">{session.date}</span>
                  </div>
                  <div className="flex items-center gap-3 backdrop-blur-xl bg-white/60 rounded-xl p-3 border border-white/40">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A66C2]/20 to-[#0A66C2]/5 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#0A66C2]" />
                    </div>
                    <span className="text-[#56687A] font-medium">{session.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 backdrop-blur-xl bg-white/60 rounded-xl p-3 border border-white/40">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A66C2]/20 to-[#0A66C2]/5 flex items-center justify-center">
                      <Video className="w-5 h-5 text-[#0A66C2]" />
                    </div>
                    <span className="text-[#56687A] font-medium">Interactive Q&A</span>
                  </div>
                </div>

                <Button
                  variant={session.status === 'Upcoming' ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {session.status === 'Upcoming' ? 'Register Now' : 'View Highlights →'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
