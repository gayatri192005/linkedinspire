'use client'

import { Download, Book, Video, FileText, ExternalLink, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function ResourcesSection() {
  const resources = [
    {
      id: 1,
      title: 'LinkedIn Profile Optimization Guide',
      type: 'PDF Guide',
      description: 'Complete guide to optimizing your LinkedIn profile for maximum visibility and engagement.',
      icon: FileText,
      downloadCount: 2500,
      free: true,
      link: '#'
    },
    {
      id: 2,
      title: 'Content Creation Templates',
      type: 'Template Pack',
      description: 'Ready-to-use templates for LinkedIn posts, articles, and story formats that drive engagement.',
      icon: Book,
      downloadCount: 1800,
      free: true,
      link: '#'
    },
    {
      id: 3,
      title: 'LinkedIn Growth Masterclass',
      type: 'Video Course',
      description: 'Comprehensive video series covering advanced LinkedIn growth strategies and tactics.',
      icon: Video,
      downloadCount: 1200,
      free: false,
      link: '#'
    },
    {
      id: 4,
      title: 'Networking Strategies Workbook',
      type: 'Interactive Guide',
      description: 'Step-by-step workbook for building meaningful professional relationships on LinkedIn.',
      icon: Users,
      downloadCount: 950,
      free: true,
      link: '#'
    },
    {
      id: 5,
      title: 'LinkedIn Analytics Dashboard',
      type: 'Tool',
      description: 'Track your LinkedIn performance with our custom analytics dashboard and insights.',
      icon: Download,
      downloadCount: 750,
      free: false,
      link: '#'
    },
    {
      id: 6,
      title: 'Personal Branding Checklist',
      type: 'Checklist',
      description: 'Essential checklist to build and maintain a strong personal brand on LinkedIn.',
      icon: FileText,
      downloadCount: 1600,
      free: true,
      link: '#'
    }
  ]

  const categories = [
    { name: 'All Resources', count: resources.length },
    { name: 'Free Resources', count: resources.filter(r => r.free).length },
    { name: 'Premium Resources', count: resources.filter(r => !r.free).length },
    { name: 'Templates', count: resources.filter(r => r.type.includes('Template')).length }
  ]

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-[#000000] via-[#0A1929] to-[#004182] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#0A66C2]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0077B5]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resources & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white via-[#DCE6F1] to-white mx-auto mb-6 rounded-full shadow-lg shadow-white/30"></div>
          <p className="text-xl text-[#DCE6F1] max-w-4xl mx-auto leading-relaxed">
            Access our curated collection of templates, guides, and tools to accelerate your LinkedIn growth journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 backdrop-blur-xl bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-105"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource) => {
            const IconComponent = resource.icon
            
            return (
              <div key={resource.id} className="backdrop-blur-2xl bg-white/95 rounded-3xl p-8 shadow-2xl border border-white/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
                {/* Free/Premium Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    resource.free 
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white' 
                      : 'bg-gradient-to-r from-amber-400 to-yellow-500 text-white'
                  }`}>
                    {resource.free ? 'Free' : 'Premium'}
                  </span>
                </div>

                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="relative z-10">
                  {/* Resource Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0A66C2]/40 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Resource Info */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#000000] mb-2">{resource.title}</h3>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#DCE6F1]/80 to-[#DCE6F1]/60 text-[#0A66C2] rounded-full text-sm font-medium mb-3">
                      {resource.type}
                    </span>
                    <p className="text-[#56687A] leading-relaxed">{resource.description}</p>
                  </div>

                  {/* Download Count */}
                  <div className="flex items-center gap-2 text-[#56687A] mb-6">
                    <Download className="w-4 h-4" />
                    <span className="text-sm">{resource.downloadCount.toLocaleString()} downloads</span>
                  </div>

                  {/* Action Button */}
                  <Button
                    variant={resource.free ? 'primary' : 'secondary'}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    {resource.free ? 'Download Free' : 'Get Premium'}
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Community Resources CTA */}
        <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-12 border border-white/30 shadow-xl text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Join Our Resource Library</h3>
            <p className="text-[#DCE6F1] mb-6 leading-relaxed">
              Get exclusive access to our growing collection of LinkedIn resources, templates, and tools. 
              New resources added every month based on community feedback and latest LinkedIn trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Join Community
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-[#0A66C2]">
                Request Resource
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}