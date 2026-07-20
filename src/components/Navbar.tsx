'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Cpu, Rocket, User, Mail, Sparkles } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { name: 'Về Tôi', href: '#about', icon: User },
  { name: 'Kỹ Năng', href: '#tech-stack', icon: Cpu },
  { name: 'Dự Án', href: '#projects', icon: Rocket },
  { name: 'Kiến Trúc', href: '#architecture', icon: Code2 },
  { name: 'Liên Hệ', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-space-bg/85 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Avatar thumbnail */}
          <a
            href="#"
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
              <span className="font-bold text-lg text-slate-100 tracking-tight flex items-center gap-1">
                Giang Thanh Tùng
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              </span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-wider uppercase font-semibold">
                Full-Stack Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-slate-800/60"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400/70" />
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative group px-4 py-2 rounded-xl text-xs font-semibold text-space-bg overflow-hidden shadow-lg shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 group-hover:opacity-90 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2 font-mono">
                <Mail className="w-3.5 h-3.5" />
                Contact Me
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/80 px-4 pt-3 pb-6 mt-3 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80 border border-transparent hover:border-cyan-500/20 transition-all"
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
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
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
