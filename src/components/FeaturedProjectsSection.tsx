'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, ChevronRight, Cpu, Video, ExternalLink, ShieldAlert } from 'lucide-react';
import ProjectModal, { ProjectData } from '@/components/ProjectModal';
import { useLanguage } from '@/context/LanguageContext';

export default function FeaturedProjectsSection() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const featuredProjects: ProjectData[] = [
    {
      id: 'vocabflow',
      title: 'Cloud-Native Flashcard (VocabFlow)',
      badge: '19 Cloud Services',
      badgeColor: 'from-cyan-500 to-blue-500',
      tagline: t.projects.vocabflowTagline,
      description: t.projects.vocabflowDesc,
      keyHighlight: 'Tối ưu chi phí $0 vận hành với 19 Cloud Services toàn cầu.',
      videoUrl: '/project/CloudFlashCard.mp4',
      githubUrl: 'https://github.com/thanhtung111205',
      architectureHighlights: [
        t.projects.vocabflowArch1,
        t.projects.vocabflowArch2,
        t.projects.vocabflowArch3,
      ],
      techStack: ['Next.js', 'FastAPI', 'Docker', 'GCP Cloud Run', 'Cloudflare Pages', 'Upstash Redis', 'Supabase', 'OpenAI'],
      category: 'Cloud-Native',
      details: {
        overview: t.projects.vocabflowOverview,
        techDetails: [
          t.projects.vocabflowDetail1,
          t.projects.vocabflowDetail2,
          t.projects.vocabflowDetail3,
        ],
        outcomes: [
          'Chi phí vận hành tháng 0-100k users: $0',
          'Time To First Byte (TTFB): < 45ms',
          'Auto-scale từ 0 đến 1000+ instances trong vài giây trên GCP Cloud Run',
        ],
      },
    },
    {
      id: 'elearning-drm',
      title: 'E-learning DRM (Digital Rights Management)',
      badge: 'FaceID & DRM Security',
      badgeColor: 'from-purple-500 to-pink-500',
      tagline: t.projects.drmTagline,
      description: t.projects.drmDesc,
      keyHighlight: 'Bảo vệ bản quyền video 100% kết hợp AI Computer Vision.',
      videoUrl: '/project/DRM-LMS.mp4',
      githubUrl: 'https://github.com/thanhtung111205',
      architectureHighlights: [
        t.projects.drmArch1,
        t.projects.drmArch2,
        t.projects.drmArch3,
      ],
      techStack: ['Next.js', '.NET Core', 'Python', 'OpenCV', 'Google Cloud Storage', 'Docker', 'PostgreSQL'],
      category: 'Microservices / DRM',
      details: {
        overview: t.projects.drmOverview,
        techDetails: [
          t.projects.drmDetail1,
          t.projects.drmDetail2,
          t.projects.drmDetail3,
        ],
        outcomes: [
          'Ngăn chặn 99.9% nguy cơ quay lén bài giảng',
          'Phát hiện gian lận tài khoản bằng FaceID chính xác > 98%',
        ],
      },
    },
    {
      id: 'codedream-exam',
      title: 'Code Dream Exam Platform',
      badge: 'High Concurrency',
      badgeColor: 'from-blue-500 to-cyan-500',
      tagline: t.projects.examTagline,
      description: t.projects.examDesc,
      keyHighlight: 'Xử lý đồng thời cao (FastAPI Async) & Ma trận đề thi động.',
      demoUrl: 'https://luyenthi.codedream.edu.vn/',
      githubUrl: 'https://github.com/thanhtung111205',
      architectureHighlights: [
        t.projects.examArch1,
        t.projects.examArch2,
        t.projects.examArch3,
      ],
      techStack: ['React', 'FastAPI', 'Python Async', 'PostgreSQL', 'Redis', 'Docker'],
      category: 'Concurrency / AI',
      details: {
        overview: t.projects.examOverview,
        techDetails: [
          t.projects.examDetail1,
          t.projects.examDetail2,
        ],
        outcomes: [
          'Xử lý mượt mà > 2000 requests/giây',
          'Tạo ma trận đề ngẫu nhiên chuẩn 100% trong < 100ms',
        ],
      },
    },
  ];

  const extraProjects: ProjectData[] = [
    {
      id: 'codedream-center',
      title: 'Code Dream Center Management',
      badge: 'ERP Management',
      badgeColor: 'from-emerald-500 to-teal-500',
      tagline: 'Code Dream Tech Center ERP System',
      description: t.projects.centerDesc,
      keyHighlight: 'RESTful API chuẩn mực & Dockerized Environment.',
      isConfidential: true,
      architectureHighlights: [
        'Frontend React.js với Dashboard quản trị phong phú.',
        'Node.js RESTful API xử lý nghiệp vụ xếp lịch và doanh thu.',
        'Đóng gói Docker đồng nhất môi trường Dev - Production.',
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      category: 'Enterprise ERP',
      details: {
        overview: t.projects.centerOverview,
        techDetails: [t.projects.centerDetail1],
        outcomes: ['Giảm 70% thời gian xếp lịch học thủ công.'],
      },
    },
    {
      id: 'smartlife-app',
      title: 'SmartLife Mobile App',
      badge: 'Cross-Platform App',
      badgeColor: 'from-indigo-500 to-purple-500',
      tagline: 'Student Finance & Study Companion App',
      description: t.projects.smartlifeDesc,
      keyHighlight: 'Flutter + FastAPI + Redis Caching phản hồi tức thời.',
      isConfidential: true,
      architectureHighlights: [
        'Flutter UI/UX mượt mà chuẩn native cho iOS & Android.',
        'FastAPI Async backend kết hợp Redis Cache tối ưu tốc độ.',
      ],
      techStack: ['Flutter', 'FastAPI', 'Redis', 'PostgreSQL'],
      category: 'Mobile App',
      details: {
        overview: t.projects.smartlifeOverview,
        techDetails: [t.projects.smartlifeDetail1],
        outcomes: ['Trải nghiệm mượt mà 60fps trên cả thiết bị cấu hình thấp.'],
      },
    },
    {
      id: 'depression-research',
      title: 'Student Depression Prediction',
      badge: 'Data Mining Research',
      badgeColor: 'from-pink-500 to-rose-500',
      tagline: 'Data Mining Mental Health Research',
      description: t.projects.depressionDesc,
      keyHighlight: 'Tiền xử lý Pandas, Scikit-learn & Thuật toán tự phát triển.',
      isConfidential: true,
      architectureHighlights: [
        'Quy trình làm sạch dữ liệu thô với Pandas & NumPy.',
        'Huấn luyện K-Means, Random Forest, Logistic Regression, Naive Bayes.',
        'So sánh mô hình thư viện với mô hình tự code thủ công.',
      ],
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      category: 'Data Mining Research',
      details: {
        overview: t.projects.depressionOverview,
        techDetails: [t.projects.depressionDetail1],
        outcomes: ['Độ chính xác mô hình phân loại đạt > 89%.'],
      },
    },
  ];

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-cyan-500/40 text-cyan-600 dark:text-cyan-300 text-xs sm:text-sm font-mono backdrop-blur-md"
          >
            <Rocket className="w-4 h-4 text-cyan-500" />
            <span>{t.projects.sectionBadge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            {t.projects.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            {t.projects.subtitle}
          </motion.p>
        </div>

        {/* Top 3 Featured Projects 3D Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="relative group rounded-3xl bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 p-7 backdrop-blur-xl hover:border-cyan-500/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-cyan-500/25 flex flex-col justify-between overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold text-white bg-gradient-to-r ${project.badgeColor} shadow-md`}>
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {project.videoUrl && (
                      <span className="text-[10px] font-mono font-bold text-purple-600 dark:text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30 flex items-center gap-1">
                        <Video className="w-3 h-3 text-purple-500" />
                        Video Demo
                      </span>
                    )}
                    {project.demoUrl && (
                      <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                        <ExternalLink className="w-3 h-3 text-emerald-500" />
                        Live Demo
                      </span>
                    )}
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20 font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors flex items-center gap-2">
                    {project.title}
                    <ChevronRight className="w-5 h-5 text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-600 dark:text-cyan-300/90 mt-1 font-medium">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div className="text-xs font-mono text-cyan-600 dark:text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-500" />
                    {t.projects.archHighlightsLabel}
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    {project.architectureHighlights.slice(0, 3).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                        <span className="line-clamp-2">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800 mt-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs sm:text-sm font-bold font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  {t.projects.viewCaseStudy} &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Cpu className="w-6 h-6 text-purple-500" />
              {t.projects.otherProjects}
            </h3>
            <div className="h-[1px] flex-1 bg-slate-300 dark:bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extraProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="p-5 rounded-2xl bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-purple-500/60 transition-all duration-300 cursor-pointer backdrop-blur-md group shadow-md hover:shadow-xl hover:shadow-purple-500/15"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold text-white bg-gradient-to-r ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    <span className="text-[10px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 flex items-center gap-1 font-semibold">
                      <ShieldAlert className="w-3 h-3" />
                      Confidential
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
