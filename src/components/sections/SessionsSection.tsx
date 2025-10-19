'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Marketing Manager',
      company: 'Tech Solutions Inc.',
      image: '/images/testimonials/user1.jpg',
      content: 'The detailed advice that Ankur Warikoo sir gave on how to post opening content on LinkedIn, the first line was mind-blowing. I have no words to express how grateful I feel for this amazing course.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Rahul Verma',
      role: 'Content Creator',
      company: 'Digital Media Co.',
      image: '/images/testimonials/user2.jpg',
      content: 'Amazing LinkedIn course! After joining I have a clear understanding of what I need to do to grow on LinkedIn, I was confused previously on where to start and what my purpose. But now I have a clear understanding of what to do.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Sneha Patel',
      role: 'Business Analyst',
      company: 'Consulting Group',
      image: '/images/testimonials/user3.jpg',
      content: 'This course completely transformed my LinkedIn strategy. The insights on content creation and networking are invaluable. Highly recommended for anyone serious about building their personal brand!',
      rating: 5,
    },
    {
      id: 4,
      name: 'Arjun Mehta',
      role: 'Software Engineer',
      company: 'StartupXYZ',
      image: '/images/testimonials/user4.jpg',
      content: 'Best investment I made for my career! The course structure is clear, actionable, and the community support is incredible. My LinkedIn engagement has increased 10x!',
      rating: 5,
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#000000] via-[#0A1929] to-[#004182] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#0A66C2]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0077B5]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Students Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white via-[#DCE6F1] to-white mx-auto mb-6 rounded-full shadow-lg shadow-white/30"></div>
          <p className="text-xl text-[#DCE6F1]">
            Join 2,937+ students who have transformed their LinkedIn presence
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card with Glossy Effect */}
          <div className="backdrop-blur-2xl bg-white/95 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/40 relative overflow-hidden">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Decorative gradient */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0A66C2]/20 to-[#004182]/10 backdrop-blur-xl flex items-center justify-center mb-6 shadow-lg border border-white/30">
                <Quote className="w-12 h-12 text-[#0A66C2]" />
              </div>
              
              <div className="mb-8">
                <p className="text-xl md:text-2xl text-[#56687A] leading-relaxed italic mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-md">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#004182] flex items-center justify-center text-white font-bold text-xl shadow-lg border border-white/20">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#000000]">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[#56687A]">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons with Glossy Effect */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-14 h-14 backdrop-blur-xl bg-white/90 rounded-full shadow-2xl flex items-center justify-center border border-white/40 hover:bg-white hover:scale-110 transition-all duration-300 relative overflow-hidden group"
            aria-label="Previous testimonial"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
            <ChevronLeft className="w-7 h-7 text-[#0A66C2] relative z-10" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-14 h-14 backdrop-blur-xl bg-white/90 rounded-full shadow-2xl flex items-center justify-center border border-white/40 hover:bg-white hover:scale-110 transition-all duration-300 relative overflow-hidden group"
            aria-label="Next testimonial"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
            <ChevronRight className="w-7 h-7 text-[#0A66C2] relative z-10" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full backdrop-blur-xl transition-all duration-300 border border-white/30 ${
                  index === currentIndex
                    ? 'bg-white w-10 shadow-lg'
                    : 'bg-white/40 w-3 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Student Count Badge with Glossy Effect */}
        <div className="mt-12 text-center">
          <div className="inline-block backdrop-blur-xl bg-white/20 rounded-full px-10 py-5 border border-white/30 shadow-xl hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 pointer-events-none"></div>
            <p className="text-white text-lg relative z-10">
              <span className="font-bold text-2xl text-amber-300">2,937+</span> students have taken this course!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
