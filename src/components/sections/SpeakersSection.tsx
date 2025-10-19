'use client'

import { Linkedin, Star, Calendar, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function SpeakersSection() {
  const speakers = [
    {
      id: 1,
      name: 'Swaroop Talks',
      title: 'LinkedIn Growth Expert',
      company: 'Content Creator & Entrepreneur',
      followers: '500K+',
      expertise: ['Content Strategy', 'Personal Branding', 'LinkedIn Growth'],
      description: 'Leading voice in LinkedIn growth strategies with proven track record of helping professionals scale their online presence.',
      image: '/images/speakers/swaroop.jpg',
      linkedin: '#',
      sessionDate: 'October 10, 2025',
      featured: true
    },
    {
      id: 2,
      name: 'Harshith Sai',
      title: 'Personal Branding Specialist',
      company: 'Digital Marketing Expert',
      followers: '200K+',
      expertise: ['Personal Branding', 'Content Creation', 'Digital Marketing'],
      description: 'Expert in crafting compelling personal brands and storytelling that resonates with professional audiences.',
      image: '/images/speakers/harshith.jpg',
      linkedin: '#',
      sessionDate: 'September 28, 2025',
      featured: true
    },
    {
      id: 3,
      name: 'Karthik Nagapuri',
      title: 'Career Branding Coach',
      company: 'Professional Development Expert',
      followers: '150K+',
      expertise: ['Career Development', 'Professional Branding', 'Leadership'],
      description: 'Helping professionals build authentic career brands that open doors to new opportunities and growth.',
      image: '/images/speakers/karthik.jpg',
      linkedin: '#',
      sessionDate: 'August 14, 2025',
      featured: true
    },
    {
      id: 4,
      name: 'More Speakers',
      title: 'Industry Leaders',
      company: 'Various Industries',
      followers: 'Coming Soon',
      expertise: ['LinkedIn Strategy', 'Networking', 'Professional Growth'],
      description: 'We regularly invite top LinkedIn voices and industry experts to share their insights with our community.',
      image: '/images/speakers/more.jpg',
      linkedin: '#',
      sessionDate: 'Coming Soon',
      featured: false
    }
  ]

  return (
    <section id="speakers" className="py-20 bg-gradient-to-br from-white via-[#F8FBFF] to-[#FDFAF5] relative overflow-hidden">
      {/* Decorative glossy orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#DCE6F1]/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl rethink-sans-bold text-[#000000] mb-6">
            Meet Our Speakers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-[#0A66C2] mx-auto mb-8 rounded-full shadow-lg shadow-[#0A66C2]/30"></div>
          <p className="text-xl rethink-sans-medium text-[#56687A] max-w-4xl mx-auto leading-relaxed">
            Learn from LinkedIn's top voices and industry experts who have built successful personal brands and transformed careers
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {speakers.map((speaker) => (
            <div key={speaker.id} className={`backdrop-blur-xl bg-white/90 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group ${speaker.featured ? 'md:col-span-1' : 'md:col-span-2'}`}>
              {/* Featured Badge */}
              {speaker.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-yellow-500 text-white rounded-full text-sm rethink-sans-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </span>
                </div>
              )}

              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Speaker Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#004182] rounded-2xl flex items-center justify-center text-white rethink-sans-bold text-xl shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  {/* Speaker Info */}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl rethink-sans-bold text-[#000000] mb-1">{speaker.name}</h3>
                        <p className="text-[#0A66C2] rethink-sans-semibold mb-1">{speaker.title}</p>
                        <p className="text-[#56687A] text-sm">{speaker.company}</p>
                      </div>
                      <a href={speaker.linkedin} className="w-10 h-10 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                    </div>

                    <p className="text-[#56687A] leading-relaxed mb-4">{speaker.description}</p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {speaker.expertise.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gradient-to-r from-[#DCE6F1]/80 to-[#DCE6F1]/60 text-[#0A66C2] rounded-full text-sm rethink-sans-medium border border-white/30">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-[#56687A]">
                        <Users className="w-4 h-4" />
                        <span className="text-sm rethink-sans-semibold">{speaker.followers} Followers</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#56687A]">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{speaker.sessionDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Speaker CTA */}
        <div className="backdrop-blur-2xl bg-gradient-to-r from-[#0A66C2]/95 via-[#0077B5]/95 to-[#004182]/95 rounded-3xl p-12 text-white overflow-hidden shadow-2xl shadow-[#0A66C2]/40 border border-white/20">
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Decorative gradient orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#004182]/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl rethink-sans-bold mb-4">Want to Speak at LinkedINspire?</h3>
            <p className="text-white/90 rethink-sans-regular mb-6 max-w-2xl mx-auto leading-relaxed">
              Are you a LinkedIn expert or industry leader? Share your knowledge and insights with our growing community of professionals. 
              We're always looking for inspiring speakers to join our sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Apply to Speak
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-[#0A66C2]">
                Nominate a Speaker
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}