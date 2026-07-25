'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Cpu, Rocket, User, Mail, Sparkles, Sun, Moon, Globe, BookOpen, Music } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { useAudio } from '@/context/AudioContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { isPlaying, toggleMusic } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.about, href: '#about', icon: User },
    { name: t.nav.skills, href: '#tech-stack', icon: Cpu },
    { name: t.nav.projects, href: '#projects', icon: Rocket },
    { name: t.nav.architecture, href: '#architecture', icon: Code2 },
    { name: t.nav.blog, href: '/blog', icon: BookOpen },
    { name: t.nav.contact, href: '#contact', icon: Mail },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-100/90 dark:bg-[#030712]/85 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/80 py-3 shadow-2xl shadow-cyan-950/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl p-[1.5px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[9px] overflow-hidden relative">
                <Image
                  src="/AVA1.jpg"
                  alt="Giang Thanh Tùng"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-1">
                Giang Thanh Tùng
                <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 animate-pulse" />
              </span>
              <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono tracking-wider uppercase font-semibold">
                Full-Stack Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800/80 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/60"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400/70" />
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Header Controls: Music + Language + Theme + Contact CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Music Header Button */}
            <button
              onClick={toggleMusic}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
                isPlaying
                  ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-600 dark:text-cyan-400 shadow-sm'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-cyan-500'
              }`}
              title={isPlaying ? t.audio.musicPlaying : t.audio.musicMuted}
            >
              <Music className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin-slow text-cyan-500' : ''}`} />
              <span className="font-semibold">{isPlaying ? 'Music ON' : 'Music OFF'}</span>
              {isPlaying && (
                <span className="flex items-end gap-0.5 h-3 ml-0.5">
                  <span className="w-0.5 h-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <span className="w-0.5 h-2/3 bg-cyan-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <span className="w-0.5 h-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0.3s' }} />
                </span>
              )}
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200 hover:border-cyan-500 transition-colors shadow-sm"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-500" />
              <span className="font-bold">{language.toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-cyan-500 transition-colors shadow-sm"
              title={theme === 'dark' ? t.theme.light : t.theme.dark}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Contact CTA Button */}
            <a
              href="#contact"
              className="relative group px-4 py-2 rounded-xl text-xs font-bold text-white overflow-hidden shadow-md shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 group-hover:opacity-90 transition-opacity" />
              <span className="relative flex items-center justify-center gap-1.5 font-mono">
                <Mail className="w-3.5 h-3.5" />
                {t.hero.ctaContact}
              </span>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleMusic}
              className={`p-2 rounded-xl text-xs border ${
                isPlaying
                  ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-500'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              <Music className={`w-4 h-4 ${isPlaying ? 'animate-spin-slow text-cyan-500' : ''}`} />
            </button>
            <button
              onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
              className="px-2 py-1 rounded-lg bg-white dark:bg-slate-900 text-xs font-mono font-bold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:text-cyan-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800/80 px-4 pt-3 pb-6 mt-3 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-900/80 transition-all"
                  >
                    <Icon className="w-4 h-4 text-cyan-500" />
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20"
                >
                  <Mail className="w-4 h-4" />
                  {t.hero.ctaContact}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
