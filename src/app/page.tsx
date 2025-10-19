import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SessionsSection from '@/components/sections/SessionsSection'
import CourseInstructors from '@/components/sections/CourseInstructors'
import CourseCurriculum from '@/components/sections/CourseCurriculum'
import ProblemsSection from '@/components/sections/ProblemsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import PricingSection from '@/components/sections/PricingSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProblemsSection />
      <SessionsSection />
      <CourseInstructors />
      <CourseCurriculum />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
