'use client'

import { Mail, Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-[#F8FBFF] to-[#FDFAF5] relative overflow-hidden">
      {/* Decorative glossy orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#DCE6F1]/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-[#0A66C2] mx-auto mb-8 rounded-full shadow-lg shadow-[#0A66C2]/30"></div>
          <p className="text-xl text-[#56687A] max-w-4xl mx-auto leading-relaxed">
            Ready to join our community? Have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-8 border border-white/40 shadow-xl">
              <h3 className="text-2xl font-bold text-[#000000] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#000000]">Email</p>
                    <p className="text-[#56687A]">hello@linkedinspire.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#000000]">WhatsApp Community</p>
                    <p className="text-[#56687A]">Join our active community</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#000000]">WhatsApp Channel</p>
                    <p className="text-[#56687A]">Get updates & announcements</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#000000]">Location</p>
                    <p className="text-[#56687A]">Global Community (Online)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#000000]">Response Time</p>
                    <p className="text-[#56687A]">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-8 border border-white/40 shadow-xl">
              <h3 className="text-xl font-bold text-[#000000] mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Join WhatsApp Community
                </Button>
                <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Subscribe to Channel
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-8 border border-white/40 shadow-xl">
            <h3 className="text-2xl font-bold text-[#000000] mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#000000] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/40 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-[#0A66C2] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#000000] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/40 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-[#0A66C2] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#000000] mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border border-white/40 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-[#0A66C2] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="community">Join Community</option>
                  <option value="partnership">Partnership</option>
                  <option value="speaking">Speaking Opportunity</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-[#000000] mb-2">
                  LinkedIn Profile (Optional)
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  className="w-full px-4 py-3 rounded-xl border border-white/40 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-[#0A66C2] focus:border-transparent transition-all duration-300"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#000000] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/40 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-[#0A66C2] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Community Stats */}
        <div className="backdrop-blur-2xl bg-gradient-to-r from-[#0A66C2]/95 via-[#0077B5]/95 to-[#004182]/95 rounded-3xl p-12 text-white overflow-hidden shadow-2xl shadow-[#0A66C2]/40 border border-white/20">
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Decorative gradient orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#004182]/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-8">Join Our Growing Community</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">XXXX+</div>
                <p className="text-white/90">Community Members</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-white/90">Success Stories</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <p className="text-white/90">Expert Sessions</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-white/90">Community Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}