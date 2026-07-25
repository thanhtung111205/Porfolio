'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cloud, CheckCircle2, ExternalLink, Github, Layers, ShieldAlert, Video, Globe, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface ProjectData {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  tagline: string;
  description: string;
  keyHighlight: string;
  architectureHighlights: string[];
  techStack: string[];
  category: string;
  demoUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
  isConfidential?: boolean;
  details: {
    overview: string;
    techDetails: string[];
    outcomes: string[];
  };
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'demo' | 'architecture' | 'outcomes'>('overview');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setActiveTab('overview');
  }, [project]);

  if (!mounted || !project) return null;

  const hasDemoTab = Boolean(project.videoUrl || project.demoUrl);

  const modalContent = (
    <AnimatePresence>
      {/* High Z-Index Backdrop supporting Light & Dark themes */}
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 dark:bg-slate-950/98 backdrop-blur-2xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#090d16] border border-slate-200 dark:border-slate-700/80 p-5 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-6 scrollbar-thin my-auto text-slate-900 dark:text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-cyan-500 transition-colors z-20 shadow-sm"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-2 pr-10">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold text-white bg-gradient-to-r ${project.badgeColor} shadow-md`}>
                {project.badge}
              </span>
              {project.isConfidential && (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/30 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Confidential
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
              {project.tagline}
            </p>
          </div>

          {/* Confidentiality Warning (for Projects 4, 5, 6) */}
          {project.isConfidential && (
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-mono flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 shrink-0 text-amber-500 dark:text-amber-400" />
              <span>{t.projects.confidentialNotice}</span>
            </div>
          )}

          {/* Prominent Top Segmented Tab Navigation Bar */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md flex-wrap sm:flex-nowrap shadow-inner">
            {/* TAB 1: OVERVIEW */}
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900/80'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{language === 'en' ? 'Overview' : 'Tổng Quan'}</span>
            </button>

            {/* TAB 2: DEMO */}
            {hasDemoTab && (
              <button
                onClick={() => setActiveTab('demo')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'demo'
                    ? project.videoUrl
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/25'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900/80'
                }`}
              >
                {project.videoUrl ? (
                  <>
                    <Video className="w-4 h-4" />
                    <span>Video Demo</span>
                  </>
                ) : (
                  <>
                    <Globe className="w-4 h-4" />
                    <span>Live Demo</span>
                  </>
                )}
              </button>
            )}

            {/* TAB 3: ARCHITECTURE */}
            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'architecture'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900/80'
              }`}
            >
              <Cloud className="w-4 h-4" />
              <span>{language === 'en' ? 'Architecture' : 'Kiến Trúc'}</span>
            </button>

            {/* TAB 4: OUTCOMES */}
            <button
              onClick={() => setActiveTab('outcomes')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'outcomes'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-900/80'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{language === 'en' ? 'Outcomes' : 'Kết Quả'}</span>
            </button>
          </div>

          {/* Active Tab Content Area */}
          <div className="min-h-[180px] text-slate-700 dark:text-slate-300 pt-1">
            {/* TAB 1 CONTENT: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-light">
                  {project.details.overview}
                </p>

                {/* Quick Demo Banner Link if available */}
                {project.demoUrl && (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 dark:bg-gradient-to-r dark:from-emerald-950/40 dark:via-teal-950/40 dark:to-slate-900 border border-emerald-500/40 flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <div>
                        <div className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300">
                          {language === 'en' ? 'Live System Available' : 'Hệ Thống Đang Hoạt Động Live:'}
                        </div>
                        <div className="text-xs font-mono text-slate-600 dark:text-slate-300">{project.demoUrl}</div>
                      </div>
                    </div>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {language === 'en' ? 'Open Live Demo →' : 'Truy Cập Live Demo →'}
                    </a>
                  </div>
                )}

                <div className="p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2.5 shadow-sm">
                  <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase">
                    {t.projects.keyFeaturesLabel}
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {project.details.techDetails.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 2 CONTENT: DEMO */}
            {activeTab === 'demo' && (
              <div className="space-y-4">
                {project.videoUrl && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase">
                      <span className="flex items-center gap-1.5">
                        <Video className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                        Video Demo Thực Tế Sản Phẩm:
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 font-normal">Full HD Video</span>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-black shadow-2xl">
                      <video
                        src={project.videoUrl}
                        controls
                        controlsList="nodownload"
                        className="w-full aspect-video object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                )}

                {project.demoUrl && (
                  <div className="p-6 rounded-2xl bg-emerald-500/5 dark:bg-slate-950/80 border border-emerald-500/40 space-y-4 shadow-xl">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          <Globe className="w-6 h-6 animate-pulse" />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                            Hệ Thống Trực Tuyến Live Production
                          </h4>
                          <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                            {project.demoUrl}
                          </p>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                        ● Online 99.99% Uptime
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                      Hệ thống đã được triển khai thực tế trên hạ tầng Production. Bạn có thể truy cập trực tiếp vào hệ thống để trải nghiệm tính năng thi trắc nghiệm và ma trận đề thi tự động.
                    </p>

                    <div className="pt-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02]"
                      >
                        <ExternalLink className="w-5 h-5" />
                        {language === 'en' ? 'Open Live Demo System (New Tab) →' : '🌍 Mở Trang Live Demo Trực Tiếp (Tab Mới) →'}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3 CONTENT: ARCHITECTURE */}
            {activeTab === 'architecture' && (
              <div className="space-y-3">
                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase mb-1">
                  {t.projects.archBreakdownLabel}
                </div>
                {project.architectureHighlights.map((arch, aIdx) => (
                  <div key={aIdx} className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed shadow-sm">
                    {arch}
                  </div>
                ))}
              </div>
            )}

            {/* TAB 4 CONTENT: OUTCOMES */}
            {activeTab === 'outcomes' && (
              <div className="space-y-3">
                <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase mb-1">
                  {t.projects.outcomesLabel}
                </div>
                {project.details.outcomes.map((out, oIdx) => (
                  <div key={oIdx} className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/30 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tech Stack Badges */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
              {language === 'en' ? 'Technologies Used:' : 'Công nghệ sử dụng:'}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-800 dark:text-slate-200 font-medium shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-between pt-2 flex-wrap gap-3">
            <div className="flex gap-3 flex-wrap">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.projects.liveDemo}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs flex items-center gap-2 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  {t.projects.sourceCode}
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-300 font-bold text-xs transition-colors shadow-sm"
            >
              {t.projects.closeModal}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
