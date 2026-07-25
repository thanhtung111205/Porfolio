import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStackSection from '@/components/TechStackSection';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import BlogSection from '@/components/BlogSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden bg-grid-pattern">
      {/* Interactive Canvas Background */}
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
        <BlogSection />
        <StatsSection />
        <ContactSection />
      </div>

      {/* Background Audio & Sound FX Player Widget */}
      <AudioPlayer />

      {/* Footer */}
      <Footer />
    </main>
  );
}
