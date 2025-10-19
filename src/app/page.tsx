import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SessionsSection from '@/components/sections/SessionsSection'
import SpeakersSection from '@/components/sections/SpeakersSection'
import TeamSection from '@/components/sections/TeamSection'
import ResourcesSection from '@/components/sections/ResourcesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactSection from '@/components/sections/ContactSection'
// import CourseInstructors from '@/components/sections/CourseInstructors'
// import CourseCurriculum from '@/components/sections/CourseCurriculum'
// import ProblemsSection from '@/components/sections/ProblemsSection'
// import FAQSection from '@/components/sections/FAQSection'
// import PricingSection from '@/components/sections/PricingSection'
// import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SessionsSection />
      <SpeakersSection />
      <TeamSection />
      <ResourcesSection />
      <TestimonialsSection />
      <ContactSection />
      {/* Commented out sections - can be uncommented if needed */}
      {/* <ProblemsSection /> */}
      {/* <CourseInstructors /> */}
      {/* <CourseCurriculum /> */}
      {/* <PricingSection /> */}
      {/* <FAQSection /> */}
      {/* <CTASection /> */}
    </>
  )
}
