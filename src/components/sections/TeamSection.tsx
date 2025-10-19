'use client'

import { Linkedin, Github, Twitter, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Gayatri',
      role: 'Founder & Community Lead',
      handle: '@Gayatri',
      description: 'Passionate about building communities and helping professionals grow their LinkedIn presence. Leading the LinkedINspire movement with vision and dedication.',
      image: '/images/team/gayatri.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'gayatri@linkedinspire.com',
      achievements: ['Community Builder', 'LinkedIn Expert', 'Mentor']
    },
    {
      id: 2,
      name: 'Mukti',
      role: 'Co-Founder & Technical Lead',
      handle: '@Mukti',
      description: 'Tech enthusiast and community builder focused on creating impactful learning experiences and driving the technical vision of LinkedINspire.',
      image: '/images/team/mukti.jpg',
      linkedin: '#',
      github: '#',
      email: 'mukti@linkedinspire.com',
      achievements: ['Tech Leader', 'Community Advocate', 'Developer']
    },
    {
      id: 3,
      name: 'Community Team',
      role: 'Support & Operations',
      handle: '@Team',
      description: 'Our dedicated team of volunteers and contributors who make LinkedINspire a thriving community for professionals worldwide.',
      image: '/images/team/team.jpg',
      linkedin: '#',
      email: 'team@linkedinspire.com',
      achievements: ['Community Support', 'Content Creation', 'Event Management']
    }
  ]

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-[#000000] via-[#0A1929] to-[#004182] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#0A66C2]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0077B5]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white via-[#DCE6F1] to-white mx-auto mb-6 rounded-full shadow-lg shadow-white/30"></div>
          <p className="text-xl text-[#DCE6F1] max-w-3xl mx-auto">
            The passionate individuals behind LinkedINspire, dedicated to empowering professionals and building meaningful connections
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="backdrop-blur-2xl bg-white/95 rounded-3xl p-8 shadow-2xl border border-white/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Decorative gradient */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#004182] rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#000000] mb-1">{member.name}</h3>
                  <p className="text-[#0A66C2] font-semibold mb-1">{member.handle}</p>
                  <p className="text-[#56687A] text-sm mb-3">{member.role}</p>
                  <p className="text-[#56687A] text-sm leading-relaxed">{member.description}</p>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.achievements.map((achievement, index) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-r from-[#DCE6F1]/80 to-[#DCE6F1]/60 text-[#0A66C2] rounded-full text-xs font-medium border border-white/30">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {member.linkedin && (
                    <a href={member.linkedin} className="w-10 h-10 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} className="w-10 h-10 bg-gradient-to-br from-gray-700 to-black rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center">
          <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-8 border border-white/30 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Join Our Team?</h3>
            <p className="text-[#DCE6F1] mb-6 leading-relaxed">
              We're always looking for passionate individuals who want to make a difference in the professional community. 
              Help us empower more professionals to succeed on LinkedIn.
            </p>
            <Button variant="primary" size="lg">
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}