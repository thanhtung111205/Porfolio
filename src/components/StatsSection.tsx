'use client';

import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

const skillStats = [
  {
    skill: 'Frontend & Mobile Development',
    tech: 'Next.js, Flutter, React, Tailwind CSS',
    percentage: 90,
    bar: '█████████░',
    color: 'from-cyan-500 to-blue-500',
    desc: 'Xây dựng UI/UX phức tạp, tối ưu hóa SEO (SSR/SSG), phát triển Mobile App đa nền tảng.',
  },
  {
    skill: 'Backend API & Microservices',
    tech: 'FastAPI, .NET Core, Node.js, Python',
    percentage: 85,
    bar: '████████░░',
    color: 'from-purple-500 to-pink-500',
    desc: 'Thiết kế Microservices, xử lý luồng dữ liệu bất đồng bộ (Async), quản lý đồng thời cao.',
  },
  {
    skill: 'Cloud-Native & DevOps Infra',
    tech: 'Cloudflare, GCP Cloud Run, Docker, Redis',
    percentage: 80,
    bar: '███████░░░',
    color: 'from-blue-500 to-emerald-500',
    desc: 'Ứng dụng Serverless, tối ưu hóa chi phí vận hành, xây dựng CI/CD Pipeline.',
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-mono backdrop-blur-md"
          >
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            <span>Thống Kê Năng Lực & GitHub</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Đánh Giá Mức Độ{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Trải Nghiệm Thực Tế
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            Số liệu thống kê kỹ năng chuyên môn và hoạt động đóng góp mã nguồn thực tế.
          </motion.p>
        </div>

        {/* Skill Progress Bars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {skillStats.map((stat, idx) => (
            <motion.div
              key={stat.skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {stat.skill}
                  </h3>
                  <span className="text-sm font-mono font-bold text-cyan-400">
                    {stat.percentage}%
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-mono text-cyan-300">
                  {stat.tech}
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                  />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {stat.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900 mt-4 text-xs font-mono text-cyan-300 font-medium">
                {stat.bar} Năng Lực Đã Kiểm Chứng
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Activity & Stats Integration Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Hoạt Động Đóng Góp Mã Nguồn GitHub
                </h3>
                <p className="text-xs sm:text-sm font-mono text-slate-300">
                  @thanhtung111205 &bull; Chỉ Số Kho Mã Nguồn Thực Tế
                </p>
              </div>
            </div>

            <a
              href="https://github.com/thanhtung111205"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-mono text-cyan-300 hover:border-cyan-400 transition-all flex items-center gap-2 font-semibold"
            >
              <GithubIcon className="w-4 h-4" />
              Xem Trang GitHub Cá Nhân &rarr;
            </a>
          </div>

          {/* GitHub Stats Badges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center">
            <div className="w-full flex justify-center p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
              <img
                src="https://github-readme-stats.vercel.app/api?username=thanhtung111205&show_icons=true&theme=radium&hide_border=true&cache_seconds=86400"
                alt="GitHub Stats"
                className="w-full max-w-md h-auto rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="w-full flex justify-center p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=thanhtung111205&layout=compact&theme=radium&hide_border=true&cache_seconds=86400"
                alt="Top Languages"
                className="w-full max-w-md h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Activity Graph */}
          <div className="w-full p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex justify-center">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=thanhtung111205&theme=react-dark&custom_title=Bi%E1%BB%83u%20%C4%90%E1%BB%93%20Ho%E1%BA%A1t%20%C4%90%E1%BB%99ng%20%C4%90%C3%B3ng%20G%C3%B3p%20(Contribution)"
              alt="GitHub Activity Graph"
              className="w-full max-w-3xl h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
