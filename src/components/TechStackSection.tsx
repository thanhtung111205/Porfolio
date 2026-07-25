'use client';

import { motion } from 'framer-motion';
import { Cpu, Layout, Server, Cloud } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TechStackSection() {
  const { t } = useLanguage();

  const techGroups = [
    {
      category: t.skills.frontendCategory,
      description: 'Xây dựng UI/UX hiện đại, tối ưu SEO, mượt mà đa nền tảng (Web & Mobile App)',
      icon: Layout,
      accent: 'from-cyan-500 to-blue-500',
      borderColor: 'hover:border-cyan-500/60',
      skills: [
        { name: 'Next.js (App Router)', desc: 'SSR, SSG, Server Actions, Route Handlers', level: '90%', icon: '🚀' },
        { name: 'Flutter', desc: 'Cross-platform Mobile App (iOS & Android)', level: '85%', icon: '📱' },
        { name: 'React.js', desc: 'SPA, State Management, Custom Hooks', level: '90%', icon: '⚛️' },
        { name: 'Tailwind CSS', desc: 'Design Systems, Micro-interactions, Glassmorphism', level: '95%', icon: '🎨' },
      ],
    },
    {
      category: t.skills.backendCategory,
      description: 'Kiến trúc dịch vụ bất đồng bộ, xử lý đồng thời cao (High Concurrency) & RESTful API',
      icon: Server,
      accent: 'from-purple-500 to-pink-500',
      borderColor: 'hover:border-purple-500/60',
      skills: [
        { name: 'FastAPI', desc: 'Python Async, Asyncio, Pydantic, High Throughput', level: '88%', icon: '⚡' },
        { name: '.NET Core', desc: 'Clean Architecture, Enterprise REST API, DRM Core', level: '85%', icon: '🛡️' },
        { name: 'Node.js / Express', desc: 'Microservices, REST API, Event-driven', level: '85%', icon: '🟢' },
        { name: 'Python', desc: 'Data Mining, OpenCV Watermarking, Scikit-learn', level: '88%', icon: '🐍' },
      ],
    },
    {
      category: t.skills.cloudCategory,
      description: 'Triển khai hạ tầng Serverless, Edge Computing, CI/CD Pipeline & Cache Layer',
      icon: Cloud,
      accent: 'from-blue-500 to-emerald-500',
      borderColor: 'hover:border-emerald-500/60',
      skills: [
        { name: 'Cloudflare', desc: 'Pages, Workers, Edge R2 Storage, Turnstile Security', level: '90%', icon: '☁️' },
        { name: 'GCP (Cloud Run)', desc: 'Containerized Serverless, Auto-scaling, Secret Manager', level: '82%', icon: '🌩️' },
        { name: 'Docker', desc: 'Containerization, Multi-stage Builds, Docker Compose', level: '85%', icon: '🐳' },
        { name: 'Redis & Supabase', desc: 'Upstash Caching, Supabase PostgreSQL, Auth JWT', level: '85%', icon: '⚡' },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-cyan-500/40 text-cyan-600 dark:text-cyan-300 text-xs sm:text-sm font-mono backdrop-blur-md"
          >
            <Cpu className="w-4 h-4 text-cyan-500" />
            <span>{t.skills.sectionBadge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            {t.skills.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            {t.skills.subtitle}
          </motion.p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techGroups.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: groupIdx * 0.15 }}
                className={`relative rounded-3xl bg-slate-100/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 backdrop-blur-xl shadow-xl ${group.borderColor} transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:shadow-cyan-500/15`}
              >
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <GroupIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                        {group.category}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {group.description}
                  </p>
                </div>

                <div className="space-y-3.5">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.03, x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{skill.icon}</span>
                          <div>
                            <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                              {skill.name}
                            </div>
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal mt-0.5">
                              {skill.desc}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20 font-bold flex-shrink-0">
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
