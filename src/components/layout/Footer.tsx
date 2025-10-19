import Link from 'next/link'
import { Linkedin, Youtube, Instagram, Phone, MessageCircle } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Use', href: '/terms' },
      { name: 'Refund Policy', href: '/refund' },
      { name: 'Contact Us', href: '/contact' },
    ],
  }

  return (
    <footer className="bg-gradient-to-br from-[#000000] via-[#0A1929] to-[#004182] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0A66C2]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0077B5]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#004182] rounded-2xl flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-xl relative overflow-hidden group">
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
                <span className="text-white font-bold text-xl relative z-10">LI</span>
              </div>
              <span className="text-white font-bold text-xl">LinkedINspire</span>
            </div>
            <p className="text-[#DCE6F1] mb-6 leading-relaxed">
              A community driven initiative to help students & professionals build their LinkedIn presence, grow their network & get inspired.
            </p>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[#DCE6F1] font-medium">Connect with us</span>
            </div>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/linkedinspire"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 backdrop-blur-xl bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border border-white/20 relative overflow-hidden group"
                title="LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                <Linkedin size={20} className="relative z-10" />
              </a>
              <a
                href="https://wa.me/+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 backdrop-blur-xl bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border border-white/20 relative overflow-hidden group"
                title="WhatsApp Community"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                <MessageCircle size={20} className="relative z-10" />
              </a>
              <a
                href="https://whatsapp.com/channel/linkedinspire"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 backdrop-blur-xl bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border border-white/20 relative overflow-hidden group"
                title="WhatsApp Channel"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                <Phone size={20} className="relative z-10" />
              </a>
              <a
                href="https://youtube.com/@linkedinspire"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 backdrop-blur-xl bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border border-white/20 relative overflow-hidden group"
                title="YouTube Channel"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                <Youtube size={20} className="relative z-10" />
              </a>
              <a
                href="https://instagram.com/linkedinspire"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 backdrop-blur-xl bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg border border-white/20 relative overflow-hidden group"
                title="Instagram Page"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                <Instagram size={20} className="relative z-10" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#DCE6F1] hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2] group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#DCE6F1] hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2] group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#DCE6F1] hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2] group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Support Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-3 text-white">For support</h4>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/+1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 backdrop-blur-xl bg-white/10 rounded-2xl px-4 py-3 border border-white/20 shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent pointer-events-none"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-md relative z-10">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                  <span className="text-emerald-300 font-semibold relative z-10">WhatsApp Community</span>
                </a>
                <a
                  href="https://whatsapp.com/channel/linkedinspire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 backdrop-blur-xl bg-white/10 rounded-2xl px-4 py-3 border border-white/20 shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent pointer-events-none"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-md relative z-10">
                    <Phone size={16} className="text-white" />
                  </div>
                  <span className="text-teal-300 font-semibold relative z-10">WhatsApp Channel</span>
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[#DCE6F1] text-sm">
                Need help? Our support team is here for you
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#DCE6F1] text-sm">
              © Copyright 2025 LinkedINspire Community
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-[#DCE6F1] hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-[#DCE6F1]">•</span>
              <Link href="/terms" className="text-[#DCE6F1] hover:text-white transition-colors">
                Terms of Use
              </Link>
              <span className="text-[#DCE6F1]">•</span>
              <Link href="/contact" className="text-[#DCE6F1] hover:text-white transition-colors">
                Contact Us
              </Link>
              <span className="text-[#DCE6F1]">•</span>
              <Link href="/refund" className="text-[#DCE6F1] hover:text-white transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
