import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SessionsSection from '@/components/sections/SessionsSection'
import SpeakersSection from '@/components/sections/SpeakersSection'
import CampusConnectSection from '@/components/sections/CampusConnectSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SessionsSection />
      <SpeakersSection />
      <CampusConnectSection />
      <ContactSection />
    </>
  )
}
