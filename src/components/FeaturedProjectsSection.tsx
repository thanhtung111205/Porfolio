'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, ExternalLink, ShieldCheck, Zap, Cloud, Database, Lock, CheckCircle2, ChevronRight, X, Cpu, Server } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  tagline: string;
  description: string;
  keyHighlight: string;
  architectureHighlights: string[];
  techStack: string[];
  cloudServicesCount?: string;
  category: 'Cloud-Native' | 'Microservices / DRM' | 'Concurrency / AI';
  demoUrl?: string;
  githubUrl?: string;
  details: {
    overview: string;
    techDetails: string[];
    outcomes: string[];
  };
}

const featuredProjects: Project[] = [
  {
    id: 'vocabflow',
    title: 'Cloud-Native Flashcard (VocabFlow)',
    badge: '19 Cloud Services',
    badgeColor: 'from-cyan-500 to-blue-500',
    tagline: 'Hệ thống học từ vựng Flashcard thông minh chuẩn Microservices & Cloud-Native',
    description:
      'Thiết kế theo chuẩn Microservices & Cloud-Native giúp tự động mở rộng (Auto-scaling), tối ưu chi phí vận hành tiếp cận $0 (Pay-as-you-go).',
    keyHighlight: 'Tối ưu chi phí $0 vận hành với 19 Cloud Services toàn cầu.',
    architectureHighlights: [
      'Edge & Frontend: Cloudflare Pages hosting Next.js tại các cụm Edge toàn cầu. Cloudflare Workers & Turnstile định tuyến chống DDoS.',
      'Compute: Backend Docker triển khai trên GCP Cloud Run (Auto-scale & Scale-to-zero). Image quản lý qua Artifact Registry.',
      'Database & Cache: Supabase (PostgreSQL) + Auth JWT. Upstash Redis cache từ vựng và Upstash Rate Limiter chống Spam API.',
      'Async & Automation: GCP Cloud Tasks, Cloud Scheduler & Resend API gửi email bất đồng bộ.',
      'Security & AI: GCP Secret Manager bảo mật key. Tích hợp OpenAI API (GPT-4o mini) dịch & sinh câu ngữ cảnh.',
    ],
    techStack: ['Next.js', 'FastAPI', 'Docker', 'GCP Cloud Run', 'Cloudflare Pages', 'Upstash Redis', 'Supabase', 'OpenAI'],
    cloudServicesCount: '19 Services',
    category: 'Cloud-Native',
    details: {
      overview:
        'VocabFlow là dự án đỉnh cao thể hiện tư duy Cloud-Native Architecture. Bằng cách tận dụng tối đa mô hình Serverless và Edge Computing, hệ thống sẵn sàng đáp ứng hàng nghìn người dùng truy cập đồng thời mà không phát sinh chi phí duy trì máy chủ cố định.',
      techDetails: [
        'Lưu trữ media dung lượng cao bằng Cloudflare R2 (Zero Egress Fee).',
        'Giám sát lỗi realtime với Sentry và tự động hóa deploy toàn bộ hạ tầng qua GitHub Actions.',
        'Hệ thống tự động chấm điểm và đánh giá trí nhớ từ vựng dựa trên thuật toán Spaced Repetition.',
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
    tagline: 'Hệ thống bảo vệ bản quyền bài giảng trực tuyến & Nhận diện khuôn mặt FaceID',
    description:
      'Hệ thống bảo vệ bản quyền bài giảng trực tuyến, tích hợp Dynamic Watermarking và nhận diện FaceID chống gian lận trong quá trình học tập.',
    keyHighlight: 'Bảo vệ bản quyền video 100% kết hợp AI Computer Vision.',
    architectureHighlights: [
      'Frontend SSR/CSR: Next.js (App Router) xây dựng trang quản trị ERP phức tạp, SSR tối ưu SEO và CSR mượt mà.',
      'Core Microservices (.NET Core): Đóng vai trò Backend vững chắc xử lý phân quyền, thanh toán và nghiệp vụ kinh doanh.',
      'Media Processing Microservice (Python): Xử lý tính toán nặng chèn Watermark động thời gian thực.',
      'AI Computer Vision: Sử dụng FaceID để xác thực khuôn mặt người học định kỳ chống chia sẻ tài khoản trái phép.',
    ],
    techStack: ['Next.js', '.NET Core', 'Python', 'OpenCV', 'Google Cloud Storage', 'Docker', 'PostgreSQL'],
    category: 'Microservices / DRM',
    details: {
      overview:
        'E-learning DRM giải quyết bài toán nhức nhối về vi phạm bản quyền video bài giảng trong giáo dục trực tuyến. Hệ thống kết hợp sự vững chắc của .NET Core cho nghiệp vụ chính và sự linh hoạt của Python AI cho xử lý thị giác máy tính.',
      techDetails: [
        'Watermark động mang thông tin người dùng được chèn trực tiếp vào luồng stream video.',
        'Nhận diện khuôn mặt liên tục qua Webcam với mô hình nhẹ chạy bất đồng bộ.',
        'Quản lý phân quyền chặt chẽ với JWT token gắn liền thiết bị phần cứng.',
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
    tagline: 'Hệ thống thi trắc nghiệm trực tuyến & Thuật toán ma trận đề thi tự động',
    description:
      'Hệ thống thi trực tuyến giải quyết bài toán Spike Traffic khi hàng ngàn thí sinh cùng truy cập nộp bài thời gian thực.',
    keyHighlight: 'Xử lý đồng thời cao (FastAPI Async) & Ma trận đề thi động.',
    architectureHighlights: [
      'Async High Concurrency: Sử dụng FastAPI (Python) xử lý đồng thời hàng nghìn request nộp bài cùng lúc.',
      'Ma trận đề thi tự động: Thuật toán bóc tách, xáo trộn câu hỏi thông minh tạo ma trận đề thi riêng biệt cho từng thí sinh.',
      'Tự động chấm điểm: Hệ thống chấm điểm trực tiếp tức thì ngay khi nhấn nộp bài.',
      'State Management: Frontend React quản lý state phức tạp của bài thi, đếm ngược thời gian thực và tự động lưu nháp.',
    ],
    techStack: ['React', 'FastAPI', 'Python Async', 'PostgreSQL', 'Redis', 'Docker'],
    category: 'Concurrency / AI',
    details: {
      overview:
        'Code Dream Exam Platform là sản phẩm phục vụ các kỳ thi trực tuyến quy mô lớn. Yêu cầu khắt khe nhất là khả năng chịu tải đột biến (Spike Traffic) khi hàng nghìn học viên bấm nộp bài ở những giây cuối cùng.',
      techDetails: [
        'Sử dụng Redis caching đề thi và câu trả lời tạm thời để giảm tải 85% truy vấn database.',
        'Hỗ trợ đếm ngược đồng bộ server-client chống gian lận thời gian.',
      ],
      outcomes: [
        'Xử lý mượt mà > 2000 requests/giây',
        'Tạo ma trận đề ngẫu nhiên chuẩn 100% trong < 100ms',
      ],
    },
  },
];

const extraProjects: Project[] = [
  {
    id: 'codedream-center',
    title: 'Code Dream Center Management',
    badge: 'ERP Management',
    badgeColor: 'from-emerald-500 to-teal-500',
    tagline: 'Hệ thống ERP quản lý toàn diện trung tâm công nghệ Code Dream',
    description:
      'Quản lý học viên, lịch học, giảng viên và tính toán doanh thu tự động cho trung tâm công nghệ.',
    keyHighlight: 'RESTful API chuẩn mực & Dockerized Environment.',
    architectureHighlights: [
      'Frontend React.js với Dashboard quản trị phong phú.',
      'Node.js RESTful API xử lý nghiệp vụ xếp lịch và doanh thu.',
      'Đóng gói Docker đồng nhất môi trường Dev - Production.',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    category: 'Microservices / DRM',
    details: {
      overview: 'Hệ thống quản lý trung tâm toàn diện với báo cáo doanh thu tự động.',
      techDetails: ['Tích hợp tự động gửi thông báo qua Email/Zalo OA.'],
      outcomes: ['Giảm 70% thời gian xếp lịch học thủ công.'],
    },
  },
  {
    id: 'smartlife-app',
    title: 'SmartLife Mobile App',
    badge: 'Cross-Platform App',
    badgeColor: 'from-indigo-500 to-purple-500',
    tagline: 'Ứng dụng di động hỗ trợ sinh viên quản lý tài chính & học tập',
    description:
      'Nền tảng di động đa chức năng hỗ trợ sinh viên quản lý thời gian biểu, tài chính cá nhân và kết nối cộng đồng.',
    keyHighlight: 'Flutter + FastAPI + Redis Caching phản hồi tức thời.',
    architectureHighlights: [
      'Flutter UI/UX mượt mà chuẩn native cho iOS & Android.',
      'FastAPI Async backend kết hợp Redis Cache tối ưu tốc độ.',
    ],
    techStack: ['Flutter', 'FastAPI', 'Redis', 'PostgreSQL'],
    category: 'Concurrency / AI',
    details: {
      overview: 'App di động toàn diện cho sinh viên với giao diện cực kỳ hiện đại.',
      techDetails: ['Push Notification thời gian thực với Firebase Cloud Messaging.'],
      outcomes: ['Trải nghiệm mượt mà 60fps trên cả thiết bị cấu hình thấp.'],
    },
  },
  {
    id: 'depression-research',
    title: 'Student Depression Prediction',
    badge: 'Data Mining Research',
    badgeColor: 'from-pink-500 to-rose-500',
    tagline: 'Nghiên cứu ứng dụng Data Mining dự đoán nguy cơ trầm cảm ở sinh viên',
    description:
      'Nghiên cứu ứng dụng các thuật toán phân lớp & phân cụm (K-Means, Random Forest) để dự đoán sớm sức khỏe tinh thần sinh viên.',
    keyHighlight: 'Tiền xử lý Pandas, Scikit-learn & Thuật toán tự phát triển.',
    architectureHighlights: [
      'Quy trình làm sạch dữ liệu thô với Pandas & NumPy.',
      'Huấn luyện K-Means, Random Forest, Logistic Regression, Naive Bayes.',
      'So sánh mô hình thư viện với mô hình tự code thủ công.',
    ],
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    category: 'Concurrency / AI',
    details: {
      overview: 'Dự án nghiên cứu khoa học đạt độ chính xác cao trong bài toán phân tích tâm lý.',
      techDetails: ['Đánh giá mô hình bằng Precision, Recall và F1-Score.'],
      outcomes: ['Độ chính xác mô hình phân loại đạt > 89%.'],
    },
  },
];

export default function FeaturedProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md"
          >
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            <span>Dự Án Tiêu Biểu</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Các Sản Phẩm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Trọng Tâm & Kiến Trúc
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base"
          >
            Những hệ thống thực tế minh chứng cho năng lực thiết kế Cloud-Native, Microservices đa ngôn ngữ và xử lý dữ liệu phức tạp.
          </motion.p>
        </div>

        {/* Top 3 Featured Projects 3D Cards Grid (2 cols on Desktop, 1 col on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="relative group rounded-3xl bg-slate-950/70 border border-slate-800/80 p-7 backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              {/* Star Light Hover Glow Effect Background */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Badge & Category */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold text-space-bg bg-gradient-to-r ${project.badgeColor} shadow-md`}>
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-950/40 px-2.5 py-1 rounded-lg border border-cyan-800/30">
                    {project.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    {project.title}
                    <ChevronRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Architecture Highlights Bullet list */}
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/60 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-yellow-400" />
                    Đặc điểm kiến trúc nổi bật:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.architectureHighlights.slice(0, 3).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span className="line-clamp-2">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tech Stack Tags */}
              <div className="pt-6 relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 mt-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:underline"
                >
                  Xem chi tiết &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-400" />
              Các Dự Án Thực Chiến Khác
            </h3>
            <div className="h-[1px] flex-1 bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extraProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-purple-500/40 transition-all cursor-pointer backdrop-blur-md group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold text-space-bg bg-gradient-to-r ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 text-[10px] text-slate-400 font-mono">
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
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold text-space-bg bg-gradient-to-r ${selectedProject.badgeColor}`}>
                  {selectedProject.badge}
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-mono text-cyan-400">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Tổng Quan Hệ Thống
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {selectedProject.details.overview}
                </p>
              </div>

              {/* Architecture Details */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Cloud className="w-4 h-4" />
                  Chi Tiết Kiến Trúc Kỹ Thuật
                </h4>
                <div className="space-y-2">
                  {selectedProject.architectureHighlights.map((arch, aIdx) => (
                    <div key={aIdx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-200">
                      {arch}
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Kết Quả Đạt Được
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedProject.details.outcomes.map((out, oIdx) => (
                    <li key={oIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer Tech Badges */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl bg-cyan-500 text-space-bg font-bold text-xs hover:bg-cyan-400 transition-colors"
                >
                  Đóng
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
