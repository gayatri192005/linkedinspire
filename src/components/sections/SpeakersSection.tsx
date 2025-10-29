'use client'

import { Linkedin, Star, Calendar, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function SpeakersSection() {
  const speakers = [
    {
      id: 1,
      name: 'Swaroop Talks',
      title: 'Tech Mentor & Content Creator',
      company: 'LinkedIn Growth Expert',
      followers: '600K+',
      expertise: ['LinkedIn Growth', 'Content Strategy', 'Tech Mentoring'],
      description: 'Leading tech mentor and content creator with 600K+ followers. Specializes in LinkedIn growth strategies and helping professionals build their online presence.',
      image: '/images/speakers/swaroop.jpg',
      linkedin: 'https://www.linkedin.com/in/swaroop-talks/',
      sessionDate: 'November 15, 2025',
      featured: true
    },
    {
      id: 2,
      name: 'Harshith Sai Tunuguntla',
      title: 'LinkedIn Top Voice | Software Engineer',
      company: 'Mentor & Tech Professional',
      followers: '100K+',
      expertise: ['Personal Branding', 'Professional Storytelling', 'Career Growth'],
      description: 'LinkedIn Top Voice, Mentor & Software Engineer with 100K+ followers. Expert in personal branding and professional storytelling on LinkedIn.',
      image: '/images/speakers/harshith.jpg',
      linkedin: 'https://www.linkedin.com/in/harshithtunuguntla/',
      sessionDate: 'October 20, 2025',
      featured: true
    },
    {
      id: 3,
      name: 'Karthik Nagapuri',
      title: 'Public Speaker',
      company: 'Startup Ecosystem Expert',
      followers: '75K+',
      expertise: ['Public Speaking', 'Startup Ecosystem', 'Career Branding'],
      description: 'Public Speaker and expert on the evolving startup ecosystem in India. Helps professionals build strong career brands and industry positioning.',
      image: '/images/speakers/karthik.jpg',
      linkedin: 'https://www.linkedin.com/in/karthiknagpuri/',
      sessionDate: 'October 5, 2025',
      featured: false
    },
    {
      id: 4,
      name: 'Vamsi Bhavani',
      title: 'Edtech Mentor | SDE at Top MNC',
      company: 'YouTube Creator',
      followers: '600K+',
      expertise: ['Edtech', 'Software Development', 'YouTube Growth'],
      description: 'Edtech mentor with 600K+ YouTube followers and Software Development Engineer at a top MNC. Expert in educational content and career guidance.',
      image: '/images/speakers/vamsi.jpg',
      linkedin: '#',
      sessionDate: 'Coming Soon',
      featured: false
    },
    {
      id: 5,
      name: 'Gayatri G',
      title: 'Co-Founder LinkedINspire',
      company: 'Community Leader',
      followers: '25K+',
      expertise: ['LinkedIn Strategy', 'Personal Branding', 'Community Building'],
      description: 'Co-founder of LinkedINspire and passionate community leader focused on empowering students and professionals in their LinkedIn journey.',
      image: '/images/speakers/gayatri.jpg',
      linkedin: '#',
      sessionDate: 'September 15, 2025',
      featured: false
    },
    {
      id: 6,
      name: 'Mythrisri Kurra',
      title: 'Co-Founder LinkedINspire',
      company: 'LinkedIn Optimization Expert',
      followers: '20K+',
      expertise: ['Profile Optimization', 'Content Creation', 'LinkedIn Algorithm'],
      description: 'Co-founder of LinkedINspire and LinkedIn optimization expert. Specializes in profile optimization, content creation strategies, and understanding the LinkedIn algorithm.',
      image: '/images/speakers/mythrisri.jpg',
      linkedin: 'https://www.linkedin.com/in/mythrisri-kurra/',
      sessionDate: 'September 15, 2025',
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
            Learn from LinkedIn&apos;s top voices and industry experts who have built successful personal brands and transformed careers
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="bg-white rounded-2xl p-6 border border-[#E8E8E8] shadow-sm hover:shadow-lg hover:border-[#0A66C2]/30 transition-all duration-300 group">
              {/* Header with Avatar and LinkedIn */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-xl flex items-center justify-center text-white rethink-sans-bold text-lg shadow-sm">
                  {speaker.name.split(' ').map(n => n[0]).join('')}
                </div>
                <a 
                  href={speaker.linkedin} 
                  className="w-10 h-10 bg-[#F4F4F4] hover:bg-[#0A66C2] rounded-lg flex items-center justify-center transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover:text-white transition-colors duration-300" />
                </a>
              </div>

              {/* Name and Featured Badge */}
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl rethink-sans-bold text-[#000000]">{speaker.name}</h3>
                  {speaker.featured && (
                    <span className="px-2 py-1 bg-gradient-to-r from-amber-400 to-yellow-500 text-white rounded-md text-xs rethink-sans-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-[#0A66C2] rethink-sans-semibold text-sm mb-1">{speaker.title}</p>
                <p className="text-[#666666] text-sm">{speaker.company}</p>
              </div>

              {/* Description */}
              <p className="text-[#666666] text-sm leading-relaxed mb-4 line-clamp-3">
                {speaker.description}
              </p>

              {/* Stats Row */}
              <div className="flex items-center justify-between mb-4 p-3 bg-[#F8F8F8] rounded-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#0A66C2]" />
                  <span className="text-sm rethink-sans-semibold text-[#000000]">{speaker.followers}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#666666]" />
                  <span className="text-xs text-[#666666]">{speaker.sessionDate}</span>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-1">
                {speaker.expertise.slice(0, 2).map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-[#E7F3FF] text-[#0A66C2] rounded-md text-xs rethink-sans-medium"
                  >
                    {skill}
                  </span>
                ))}
                {speaker.expertise.length > 2 && (
                  <span className="px-2 py-1 bg-[#F4F4F4] text-[#666666] rounded-md text-xs rethink-sans-medium">
                    +{speaker.expertise.length - 2} more
                  </span>
                )}
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
              We&apos;re always looking for inspiring speakers to join our sessions.
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