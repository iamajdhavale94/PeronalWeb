'use client';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectShowcase from '../components/ProjectShowcase';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectShowcase />
      <ContactSection />
      <Footer />
    </div>
  );
}