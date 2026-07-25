'use client';

import { motion } from 'framer-motion';
import { User, GraduationCap, Target, Cpu, Award, Rocket, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  const highlightCards = [
    {
      title: t.about.card1Title,
      subtitle: t.about.card1Badge,
      desc: t.about.card1Desc,
      icon: GraduationCap,
      accent: 'from-cyan-500 to-blue-500',
      badgeColor: 'border-cyan-500/40 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10',
    },
    {
      title: t.about.card2Title,
      subtitle: t.about.card2Badge,
      desc: t.about.card2Desc,
      icon: Target,
      accent: 'from-purple-500 to-pink-500',
      badgeColor: 'border-purple-500/40 text-purple-600 dark:text-purple-400 bg-purple-500/10',
    },
    {
      title: t.about.card3Title,
      subtitle: t.about.card3Badge,
      desc: t.about.card3Desc,
      icon: Cpu,
      accent: 'from-blue-500 to-emerald-500',
      badgeColor: 'border-blue-500/40 text-blue-600 dark:text-blue-400 bg-blue-500/10',
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-cyan-500/40 text-cyan-600 dark:text-cyan-300 text-xs sm:text-sm font-mono backdrop-blur-md shadow-sm"
          >
            <User className="w-4 h-4 text-cyan-500" />
            <span>{t.about.sectionBadge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            {t.about.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cyan-600 dark:text-cyan-400 text-base sm:text-lg font-mono font-semibold"
          >
            {t.about.subtitle}
          </motion.p>
        </div>

        {/* Biography & Key Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Bio Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 backdrop-blur-xl shadow-xl flex flex-col justify-between space-y-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-cyan-500/10"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-cyan-500" />
                Hành Trình Chuyên Môn
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-light">
                {t.about.bio1}
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-light">
                {t.about.bio2}
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-light">
                {t.about.bio3}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-mono font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>{t.about.bullet1}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-mono font-medium">
                <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                <span>{t.about.bullet2}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-mono font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>{t.about.bullet3}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-mono font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.about.bullet4}</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Feature Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  className="p-6 rounded-2xl bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 backdrop-blur-xl hover:border-cyan-500/60 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-cyan-500/15 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-500 group-hover:scale-110 transition-transform shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${card.badgeColor}`}>
                          {card.subtitle}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
