import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStackSection from '@/components/TechStackSection';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-100 overflow-hidden bg-grid-pattern">
      {/* Interactive Starry Night tsParticles Background (low opacity, low z-index) */}
      <ParticlesBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <FeaturedProjectsSection />
        <ArchitectureSection />
        <StatsSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
