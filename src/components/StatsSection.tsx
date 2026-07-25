'use client';

import { motion } from 'framer-motion';
import { BarChart3, Activity } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { useLanguage } from '@/context/LanguageContext';

export default function StatsSection() {
  const { t, language } = useLanguage();

  const skillStats = [
    {
      skill: 'Frontend & Mobile Development',
      tech: 'Next.js, Flutter, React, Tailwind CSS',
      percentage: 90,
      bar: '█████████░',
      color: 'from-cyan-500 to-blue-500',
      desc: t.stats.skill1Desc,
    },
    {
      skill: 'Backend API & Microservices',
      tech: 'FastAPI, .NET Core, Node.js, Python',
      percentage: 85,
      bar: '████████░░',
      color: 'from-purple-500 to-pink-500',
      desc: t.stats.skill2Desc,
    },
    {
      skill: 'Cloud-Native & DevOps Infra',
      tech: 'Cloudflare, GCP Cloud Run, Docker, Redis',
      percentage: 80,
      bar: '███████░░░',
      color: 'from-blue-500 to-emerald-500',
      desc: t.stats.skill3Desc,
    },
  ];

  const graphTitle = language === 'en' ? 'Contribution%20Activity%20Graph' : 'Bi%E1%BB%83u%20%C4%90%E1%BB%93%20Ho%E1%BA%A1t%20%C4%90%E1%BB%93ng%20%C4%90%C3%B3ng%20G%C3%B3p%20(Contribution)';

  return (
    <section id="stats" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-cyan-500/40 text-cyan-600 dark:text-cyan-300 text-xs sm:text-sm font-mono backdrop-blur-md"
          >
            <BarChart3 className="w-4 h-4 text-cyan-500" />
            <span>{t.stats.sectionBadge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            {t.stats.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            {t.stats.subtitle}
          </motion.p>
        </div>

        {/* Skill Progress Bars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {skillStats.map((stat, idx) => (
            <motion.div
              key={stat.skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-100/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 backdrop-blur-xl hover:border-cyan-500/60 transition-all duration-300 shadow-xl hover:shadow-cyan-500/15 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {stat.skill}
                  </h3>
                  <span className="text-sm font-mono font-bold text-cyan-600 dark:text-cyan-400">
                    {stat.percentage}%
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-mono text-cyan-600 dark:text-cyan-300">
                  {stat.tech}
                </div>

                <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-900 overflow-hidden p-0.5 border border-slate-300 dark:border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                  />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                  {stat.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-900 mt-4 text-xs font-mono text-cyan-600 dark:text-cyan-300 font-medium">
                {stat.bar} {t.stats.verifiedSkillTag}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Activity Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-slate-100/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl hover:border-cyan-500/50 transition-all duration-300 space-y-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {t.stats.githubTitle}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-300">
                  {t.stats.githubSubtitle}
                </p>
              </div>
            </div>

            <a
              href="https://github.com/thanhtung111205"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono text-cyan-600 dark:text-cyan-300 hover:border-cyan-500 transition-all flex items-center gap-2 font-semibold shadow-sm hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
              {t.stats.viewProfile} &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center">
            <div className="w-full flex justify-center p-4 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 transition-colors">
              <img
                src="https://github-readme-stats.vercel.app/api?username=thanhtung111205&show_icons=true&theme=dark&hide_border=true"
                alt="GitHub Stats"
                className="w-full max-w-md h-auto rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="w-full flex justify-center p-4 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/40 transition-colors">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=thanhtung111205&layout=compact&theme=dark&hide_border=true"
                alt="Top Languages"
                className="w-full max-w-md h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* GitHub Activity Graph (Line Chart) */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              {t.stats.graphTitle}:
            </div>
            <div className="w-full p-4 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex justify-center overflow-x-auto shadow-sm hover:border-cyan-500/40 transition-colors">
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=thanhtung111205&theme=react-dark&custom_title=${graphTitle}`}
                alt="GitHub Activity Graph"
                className="w-full max-w-3xl h-auto rounded-lg filter drop-shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
