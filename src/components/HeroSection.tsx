'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Terminal, Cloud, ShieldCheck, Database, Cpu, Mail } from 'lucide-react';
import { GithubIcon, FacebookIcon } from '@/components/Icons';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const typingTitles = [
  'Cloud-Native Architect',
  'Full-Stack Developer',
  'System Architecture Enthusiast',
  'Data Mining Researcher',
];

export default function HeroSection() {
  const { t } = useLanguage();
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetTitle = typingTitles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(targetTitle.substring(0, currentText.length + 1));
        if (currentText.length === targetTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(targetTitle.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % typingTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-hero-gradient-light dark:bg-hero-gradient">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.3 }}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-0.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 shadow-xl shadow-cyan-500/30 cursor-pointer"
              >
                <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden relative">
                  <Image
                    src="/AVA1.jpg"
                    alt="Giang Thanh Tùng Avatar"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-cyan-500/40 text-cyan-600 dark:text-cyan-300 text-xs sm:text-sm font-mono backdrop-blur-md shadow-lg shadow-cyan-500/10 cursor-pointer"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span>{t.hero.badge}</span>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {t.hero.greeting}{' '}
                <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {t.hero.name}
                </span>
              </h1>
              
              <div className="h-10 text-xl sm:text-2xl font-mono text-cyan-600 dark:text-cyan-300 flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-6 h-6 text-purple-500 flex-shrink-0" />
                <span className="font-semibold">{currentText}</span>
                <span className="w-2.5 h-7 bg-cyan-500 animate-pulse ml-0.5" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-700 dark:text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {t.hero.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1"
            >
              <motion.span
                whileHover={{ y: -4, scale: 1.05 }}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700/80 text-xs sm:text-sm font-mono text-cyan-600 dark:text-cyan-300 flex items-center gap-2 shadow-md font-semibold cursor-pointer"
              >
                <Cloud className="w-4 h-4 text-cyan-500" />
                19 Cloud Services
              </motion.span>
              <motion.span
                whileHover={{ y: -4, scale: 1.05 }}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700/80 text-xs sm:text-sm font-mono text-purple-600 dark:text-purple-300 flex items-center gap-2 shadow-md font-semibold cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-purple-500" />
                Microservices & DRM
              </motion.span>
              <motion.span
                whileHover={{ y: -4, scale: 1.05 }}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700/80 text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-300 flex items-center gap-2 shadow-md font-semibold cursor-pointer"
              >
                <Database className="w-4 h-4 text-blue-500" />
                Data Mining & AI
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto relative group px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-white overflow-hidden shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 group-hover:opacity-90 transition-opacity" />
                <span className="relative flex items-center justify-center gap-2 font-mono">
                  {t.hero.ctaProjects}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-cyan-600 dark:text-cyan-300 bg-slate-100 dark:bg-slate-900/90 border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md hover:scale-105 active:scale-95 shadow-lg shadow-slate-950/50"
              >
                <Download className="w-5 h-5 text-cyan-500" />
                <span>{t.hero.ctaContact}</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="https://github.com/thanhtung111205"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/50 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/thanh.tungg.638184/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/50 transition-all hover:scale-110"
                aria-label="Facebook Profile"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:gthanhtung.work@gmail.com"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/50 transition-all hover:scale-110"
                aria-label="Gửi Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Floating Cyber Card Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 relative flex justify-center cursor-pointer"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-40 blur-xl group-hover:opacity-70 transition duration-1000" />

              <div className="relative rounded-2xl bg-slate-900/90 dark:bg-slate-950/90 border border-slate-700/80 p-6 sm:p-7 backdrop-blur-2xl shadow-2xl space-y-5 text-white hover:border-cyan-500/60 transition-all duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs font-mono text-cyan-300 flex items-center gap-1.5 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    trang_thai: hoat_dong
                  </span>
                </div>

                <div className="font-mono text-sm sm:text-[15px] space-y-4">
                  <div className="p-3.5 rounded-xl bg-slate-800/90 dark:bg-slate-900/90 border border-slate-700 hover:border-cyan-500/40 transition-colors">
                    <div className="text-cyan-300 font-bold mb-1">// Cloud Native Architecture</div>
                    <div className="text-cyan-400 font-extrabold">Cloudflare Pages + GCP Cloud Run</div>
                    <div className="text-slate-300 text-xs sm:text-sm mt-1 font-light">Serverless | Auto-scale | $0 Operating Cost</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/90 dark:bg-slate-900/90 border border-slate-700 hover:border-purple-500/40 transition-colors">
                    <div className="text-purple-300 font-bold mb-1">// Major Achievements</div>
                    <div className="text-purple-400 font-extrabold">19 Cloud Services Integrated</div>
                    <div className="text-slate-300 text-xs sm:text-sm mt-1 font-light">VocabFlow & DRM Security System</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/90 dark:bg-slate-900/90 border border-slate-700 hover:border-blue-500/40 transition-colors">
                    <div className="text-blue-300 font-bold mb-1">// Academic Focus</div>
                    <div className="text-blue-400 font-extrabold">Đại Học Thủy Lợi (IS)</div>
                    <div className="text-slate-300 text-xs sm:text-sm mt-1 font-light">Data Mining & System Engineering</div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 text-xs sm:text-sm font-mono text-slate-200 font-medium">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    FastAPI / .NET Core
                  </div>
                  <div className="text-purple-300">Next.js / Flutter</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
