'use client';

import { motion } from 'framer-motion';
import { Network, Server, Database, Cpu, Terminal, Layers } from 'lucide-react';

const archLayers = [
  {
    title: 'Edge & Gateway Layer',
    tech: 'Cloudflare Pages & Workers',
    desc: 'Định tuyến tại Edge toàn cầu, tối ưu hóa TTFB (<45ms), bảo mật chống DDoS bằng Turnstile và lưu trữ media với Cloudflare R2 (0$ Egress fee).',
    icon: Network,
    accent: 'text-cyan-400',
  },
  {
    title: 'Containerized Compute Layer',
    tech: 'GCP Cloud Run & Docker',
    desc: 'Backend đóng gói Docker chạy trên GCP Cloud Run tự động Auto-scale và Scale-to-zero khi không có traffic, kiểm soát phiên bản qua Artifact Registry.',
    icon: Server,
    accent: 'text-purple-400',
  },
  {
    title: 'Database & Caching Layer',
    tech: 'Supabase PostgreSQL & Upstash Redis',
    desc: 'Lưu trữ dữ liệu có cấu trúc với Supabase PostgreSQL. Upstash Redis cache câu hỏi & rate-limit chống spam request với thuật toán sliding window.',
    icon: Database,
    accent: 'text-blue-400',
  },
  {
    title: 'Async Workflows & AI Layer',
    tech: 'GCP Cloud Tasks & OpenAI GPT-4o',
    desc: 'Xử lý các tác vụ nặng như gửi email, chèn watermark DRM bất đồng bộ qua Queue. Tích hợp OpenAI sinh câu ví dụ ngữ cảnh tự động.',
    icon: Cpu,
    accent: 'text-emerald-400',
  },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-mono backdrop-blur-md"
          >
            <Layers className="w-4 h-4 text-purple-400" />
            <span>Phân Tích Kiến Trúc Kỹ Thuật</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            19 Cloud-Native Services &{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              System Design
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            Mô hình phân tầng hệ thống chịu tải cao, sẵn sàng Auto-scale và duy trì chi phí tối thiểu theo thời gian thực.
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
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${layer.accent}`} />
                    </div>
                    <span className="text-xs font-mono text-slate-300 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800 font-semibold">
                      Phân Tầng 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {layer.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-mono text-cyan-300 font-medium mt-0.5">
                      {layer.tech}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {layer.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900 mt-4 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>Độ Sẵn Sàng Sàn</span>
                  <span className="text-emerald-400 font-bold">99.99%</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Architectural Code Console Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl font-mono text-xs sm:text-sm overflow-hidden"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-200 font-semibold text-sm sm:text-base">vocabflow_architecture_pipeline.json</span>
            </div>
            <span className="text-xs text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-md border border-emerald-800/60 font-bold">
              TRẠNG THÁI: ĐÃ TRIỂN KHAI PRODUCTION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-slate-200">
            <div className="space-y-2.5 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="text-cyan-300 font-bold">// Định Tuyến Edge & Microservices</div>
              <div>1. Yêu cầu người dùng -&gt; Cloudflare Edge Workers (Turnstile DDoS Filter)</div>
              <div>2. Tài nguyên tĩnh -&gt; Cloudflare Pages CDN (TTFB &lt; 30ms)</div>
              <div>3. Luồng Media Video -&gt; Cloudflare R2 (Chi phí Egress $0)</div>
              <div>4. Dynamic API Backend -&gt; GCP Cloud Run (Docker Auto-scale 0..100)</div>
            </div>

            <div className="space-y-2.5 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="text-purple-300 font-bold">// Bảo Mật, Caching & Cơ Sở Dữ Liệu</div>
              <div>5. Xác thực JWT & Database -&gt; Supabase PostgreSQL + Row Level Security</div>
              <div>6. Bộ nhớ đệm & Chống Spam -&gt; Upstash Redis (Sliding Window Algorithm)</div>
              <div>7. Quản lý Secret & Key -&gt; GCP Secret Manager</div>
              <div>8. Giám sát lỗi realtime -&gt; Sentry + GitHub Actions CI/CD Pipeline</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
