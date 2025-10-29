'use client'

import { BookOpen, Users, Trophy, MapPin, ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CampusConnectSection() {
  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Exclusive Sessions",
      description: "Private workshops and sessions for your college community"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Leadership Opportunities", 
      description: "Become a Campus Lead and build your leadership portfolio"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Resources & Materials",
      description: "Access to exclusive LinkedIn growth resources and materials"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Recognition",
      description: "Get featured on our platforms and build your personal brand"
    }
  ]

  const steps = [
    {
      step: "01",
      title: "Submit Application",
      description: "Fill out our Campus Connect application form with your college details"
    },
    {
      step: "02", 
      title: "Review Process",
      description: "Our team will review your application and reach out within 48 hours"
    },
    {
      step: "03",
      title: "Onboarding",
      description: "Get onboarded as a Campus Lead with exclusive resources and support"
    },
    {
      step: "04",
      title: "Launch",
      description: "Start hosting LinkedINspire sessions at your college and grow your community"
    }
  ]

  return (
    <section id="campus-connect" className="py-20 bg-gradient-to-br from-[#F8FBFF] via-white to-[#FDFAF5] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#DCE6F1]/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-[#0A66C2] to-[#0077B5] text-white rounded-full text-sm rethink-sans-bold shadow-lg">
              🎓 Campus Connect Program
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl rethink-sans-bold text-[#000000] mb-6">
            LinkedINspire Campus Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-[#0A66C2] mx-auto mb-8 rounded-full shadow-lg shadow-[#0A66C2]/30"></div>
          <p className="text-xl rethink-sans-medium text-[#56687A] max-w-4xl mx-auto leading-relaxed">
            Bring LinkedINspire to your college! Partner with us to host exclusive LinkedIn growth sessions, 
            build your campus community, and become a recognized student leader.
          </p>
        </div>

        {/* What is Campus Connect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl rethink-sans-bold text-[#000000] mb-4">What is Campus Connect?</h3>
              <p className="text-[#56687A] rethink-sans-regular leading-relaxed mb-6">
                Campus Connect is our initiative to bring LinkedINspire&apos;s proven LinkedIn growth strategies 
                directly to college campuses. We partner with student leaders to host exclusive sessions, 
                workshops, and community-building events.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-[#56687A]">Free for all participating colleges</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-[#56687A]">Expert speaker sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-[#56687A]">Campus Lead recognition program</span>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-gradient-to-br from-[#0A66C2]/10 via-white/80 to-[#DCE6F1]/70 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl rethink-sans-bold text-[#000000] mb-4">How Colleges Can Collaborate</h3>
              <p className="text-[#56687A] rethink-sans-regular leading-relaxed mb-6">
                Colleges and student clubs can partner with us to bring LinkedIn expertise to their students. 
                Our Campus Leads get training, resources, and ongoing support to successfully run programs 
                on their campuses.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-[#56687A]">Training for Campus Leads</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-[#56687A]">Marketing materials provided</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-[#56687A]">Ongoing mentorship and support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-3xl rethink-sans-bold text-center mb-12">Why Join Campus Connect?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 backdrop-blur-xl bg-white/70 rounded-2xl border border-white/40 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <h4 className="text-lg rethink-sans-bold text-[#000000] mb-2">{benefit.title}</h4>
                <p className="text-[#56687A] rethink-sans-regular text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply Process */}
        <div className="mb-16">
          <h3 className="text-3xl rethink-sans-bold text-center mb-12">How to Apply</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-full flex items-center justify-center mx-auto mb-4 text-white rethink-sans-bold">
                      {step.step}
                    </div>
                    <h4 className="text-lg rethink-sans-bold text-[#000000] mb-3">{step.title}</h4>
                    <p className="text-[#56687A] rethink-sans-regular text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#0A66C2]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center backdrop-blur-xl bg-gradient-to-r from-[#0A66C2]/95 via-[#0077B5]/95 to-[#004182]/95 rounded-3xl p-12 text-white shadow-2xl shadow-[#0A66C2]/40 border border-white/20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl rethink-sans-bold mb-4">Ready to Become a Campus Lead?</h3>
            <p className="text-white/90 rethink-sans-regular mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our growing network of Campus Leads and bring LinkedINspire to your college. 
              Help your fellow students grow their LinkedIn presence and build your leadership portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-[#0A66C2] hover:bg-yellow-300 hover:text-[#004182] rethink-sans-bold"
              >
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#0A66C2] rethink-sans-bold"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}