'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Target, Cpu, CheckCircle2, Flame, Layers } from 'lucide-react';
import Image from 'next/image';

const milestones = [
  {
    icon: GraduationCap,
    title: 'Hệ Thống Thông Tin - ĐH Thủy Lợi',
    desc: 'Đang theo học ngành Hệ thống Thông tin với tinh thần chủ động nghiên cứu các công nghệ mới.',
    badge: 'Đại Học Thủy Lợi',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Target,
    title: 'Mục Tiêu Tốt Nghiệp Xuất Sắc',
    desc: 'Hoàn thiện kiến thức kiến trúc hệ thống, DevOps, Cloud-Native & Data Mining để sẵn sàng cho các dự án quy mô lớn.',
    badge: 'Mục Tiêu Cao',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cpu,
    title: 'Đam Mê Kiến Trúc & Performance',
    desc: 'Tập trung tối ưu TTFB, Microservices bất đồng bộ, Serverless và bảo mật bản quyền DRM cho media.',
    badge: 'High Performance',
    color: 'from-blue-500 to-indigo-500',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-mono backdrop-blur-md"
          >
            <Flame className="w-4 h-4 text-purple-400" />
            <span>Giới Thiệu Bản Thân</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Về Bản Thân &{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Tầm Nhìn Kỹ Thuật
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            Xây dựng nền tảng phần mềm hiện đại với tư duy hệ thống khắt khe, tối ưu hóa từ dòng code đến hạ tầng Cloud.
          </motion.p>
        </div>

        {/* Main Glassmorphism Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-slate-950/80 border border-slate-700/80 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-2xl overflow-hidden"
        >
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Narrative Column with Profile Image */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-0.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 shadow-xl shadow-purple-500/20">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden relative">
                    <Image
                      src="/profile2.jpg"
                      alt="Giang Thanh Tùng Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-mono uppercase tracking-widest font-semibold">
                    <Layers className="w-4 h-4" />
                    Hành trình & Định hướng
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    Giang Thanh Tùng
                  </h3>
                  <span className="text-xs font-mono text-purple-300">
                    Hệ Thống Thông Tin &bull; ĐH Thủy Lợi
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Tôi là <strong className="text-white font-bold">Giang Thanh Tùng</strong>, sinh viên chuyên ngành <strong className="text-cyan-300 font-bold">Hệ thống Thông tin</strong> tại trường <strong className="text-white font-bold">Đại học Thủy Lợi</strong>. Với niềm đam mê mãnh liệt dành cho công nghệ, tôi luôn chủ động tìm tòi và thực chiến với các công nghệ web/mobile hiện đại.
                </p>
                <p>
                  Thế mạnh cốt lõi của tôi tập trung vào <strong className="text-purple-300 font-bold">System Architecture</strong> (Microservices, Serverless, Async Workflows), triển khai hạ tầng tối ưu trên <strong className="text-cyan-300 font-bold">Cloudflare & GCP</strong> với chi phí tiệm cận $0, đồng thời ứng dụng thuật toán <strong className="text-blue-300 font-bold">Data Mining & Machine Learning</strong> để giải quyết bài toán phân tích dữ liệu thực tế.
                </p>
                <p>
                  Mục tiêu lớn nhất hiện tại của tôi là <strong className="text-white font-bold">Tốt nghiệp bằng Xuất sắc</strong> tại Đại học Thủy Lợi, không ngừng hoàn thiện bộ kỹ năng DevOps, CI/CD và sẵn sàng cống hiến cho các dự án công nghệ lớn.
                </p>
              </div>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  'Kiến trúc Cloud-Native 19 Services',
                  'Bảo mật E-learning DRM & FaceID',
                  'Xử lý tính đồng thời Concurrency',
                  'Nghiên cứu Data Mining (Scikit-learn)',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-slate-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Cards Stack Column */}
            <div className="lg:col-span-5 space-y-4">
              {milestones.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:translate-x-1 shadow-lg group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${m.color} text-space-bg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-space-bg" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {m.title}
                          </h4>
                          <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700 font-semibold">
                            {m.badge}
                          </span>
                        </div>
                        <p className="text-sm text-slate-200 leading-relaxed font-light">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
