import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ImpactSection from '@/components/sections/ImpactSection'
import AboutSection from '@/components/sections/AboutSection'
import GrowthSection from '@/components/sections/GrowthSection'
import FeatureShowcaseSection from '@/components/sections/FeatureShowcaseSection'
import ProgramsSection from '@/components/sections/ProgramsSection'
import SessionsSection from '@/components/sections/SessionsSection'
import SpeakersSection from '@/components/sections/SpeakersSection'
import StoriesSection from '@/components/sections/StoriesSection'
import CampusConnectSection from '@/components/sections/CampusConnectSection'
import ResourcesSection from '@/components/sections/ResourcesSection'
import FaqSection from '@/components/sections/FaqSection'
import ContactSection from '@/components/sections/ContactSection'
import LearningMarquee from '@/components/sections/LearningMarquee'

export const metadata: Metadata = {
  title: 'Your LinkedIn Growth Starts Here',
  description: 'Learn from creators, connect with professionals, and build your presence with LinkedINspire.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LearningMarquee />
      <ImpactSection />
      <AboutSection />
      <GrowthSection />
      <FeatureShowcaseSection />
      <ProgramsSection />
      <SessionsSection />
      <SpeakersSection />
      <StoriesSection />
      <CampusConnectSection />
      <ResourcesSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}
