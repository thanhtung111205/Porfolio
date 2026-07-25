'use client';

import { motion } from 'framer-motion';
import { Network, Server, Database, Cpu, Terminal, Layers } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ArchitectureSection() {
  const { t } = useLanguage();

  const archLayers = [
    {
      title: t.architecture.edgeLayer,
      tech: 'Cloudflare Pages & Workers',
      desc: t.architecture.edgeDesc,
      icon: Network,
      accent: 'text-cyan-500',
    },
    {
      title: t.architecture.backendLayer,
      tech: 'GCP Cloud Run & Docker',
      desc: t.architecture.backendDesc,
      icon: Server,
      accent: 'text-purple-500',
    },
    {
      title: t.architecture.dataLayer,
      tech: 'Supabase PostgreSQL & Upstash Redis',
      desc: t.architecture.dataDesc,
      icon: Database,
      accent: 'text-blue-500',
    },
    {
      title: t.architecture.aiLayer,
      tech: 'GCP Cloud Tasks & OpenAI GPT-4o',
      desc: t.architecture.aiDesc,
      icon: Cpu,
      accent: 'text-emerald-500',
    },
  ];

  return (
    <section id="architecture" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-purple-500/40 text-purple-600 dark:text-purple-300 text-xs sm:text-sm font-mono backdrop-blur-md shadow-sm"
          >
            <Layers className="w-4 h-4 text-purple-500" />
            <span>{t.architecture.sectionBadge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            {t.architecture.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            {t.architecture.subtitle}
          </motion.p>
        </div>

        {/* System Layer Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {archLayers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 backdrop-blur-xl hover:border-cyan-500/60 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl hover:shadow-cyan-500/15 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-500 group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${layer.accent}`} />
                    </div>
                    <span className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-2.5 py-0.5 rounded border border-slate-200 dark:border-slate-800 font-semibold">
                      {t.architecture.layerBadge} 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                      {layer.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-mono text-cyan-600 dark:text-cyan-300 font-medium mt-0.5">
                      {layer.tech}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                    {layer.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-900 mt-4 flex items-center justify-between text-xs font-mono text-slate-700 dark:text-slate-300">
                  <span>{t.architecture.uptimeLabel}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">99.99%</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Architectural Code Console Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-white/95 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 font-mono text-xs sm:text-sm overflow-hidden text-slate-900 dark:text-white"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-500" />
              <span className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-200">vocabflow_architecture_pipeline.json</span>
            </div>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/30 font-bold">
              {t.architecture.statusDeployed}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-2.5 bg-slate-100/90 dark:bg-slate-900/80 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-cyan-500/40 transition-colors">
              <div className="text-cyan-600 dark:text-cyan-300 font-bold">{t.architecture.edgeTitle}</div>
              <div>{t.architecture.edgeLine1}</div>
              <div>{t.architecture.edgeLine2}</div>
              <div>{t.architecture.edgeLine3}</div>
              <div>{t.architecture.edgeLine4}</div>
            </div>

            <div className="space-y-2.5 bg-slate-100/90 dark:bg-slate-900/80 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-purple-500/40 transition-colors">
              <div className="text-purple-600 dark:text-purple-300 font-bold">{t.architecture.securityTitle}</div>
              <div>{t.architecture.securityLine5}</div>
              <div>{t.architecture.securityLine6}</div>
              <div>{t.architecture.securityLine7}</div>
              <div>{t.architecture.securityLine8}</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
