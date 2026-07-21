'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin, CheckCircle2, MessageSquare, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { FacebookIcon, GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch (jsonErr) {
        // Trình duyệt nhận response dạng text/HTML (ví dụ lỗi Cloudflare 500 / DEPLOYMENT_PAUSED)
      }

      if (res.ok && data?.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMessage(
          data?.error || `Lỗi máy chủ Cloudflare (Mã HTTP ${res.status}). Vui lòng kiểm tra lại cấu hình RESEND_API_KEY trên Cloudflare Dashboard.`
        );
      }
    } catch (err) {
      setErrorMessage('Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại kết nối mạng.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Liên Hệ Hợp Tác</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Bắt Đầu Kết Nối &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hợp Tác Dự Án
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base"
          >
            Bạn có ý tưởng dự án hoặc cơ hội việc làm phù hợp? Hãy gửi tin nhắn cho tôi ngay!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-xl space-y-6 shadow-xl"
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Thông Tin Kênh Liên Lạc
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href="mailto:gthanhtungg24@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all text-slate-300 hover:text-cyan-400 group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-950/80 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Direct Email</div>
                    <div className="font-semibold text-slate-100">gthanhtungg24@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/thanh.tungg.638184/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all text-slate-300 hover:text-blue-400 group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-950/80 text-blue-400 group-hover:scale-110 transition-transform">
                    <FacebookIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Facebook Profile</div>
                    <div className="font-semibold text-slate-100">Giang Thanh Tùng</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-purple-950/80 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Vị trí sinh sống</div>
                    <div className="font-semibold text-slate-100">Hà Nội, Việt Nam (ĐH Thủy Lợi)</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-xl shadow-xl space-y-6"
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                Gửi Tin Nhắn Trực Tiếp
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto animate-bounce" />
                  <h4 className="font-bold text-lg text-white">Tin nhắn đã được gửi thành công!</h4>
                  <p className="text-xs text-cyan-300 font-light">
                    Cảm ơn bạn đã liên hệ. Giang Thanh Tùng sẽ phản hồi qua Email sớm nhất có thể.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="font-semibold text-red-200">Gửi tin nhắn không thành công</div>
                        <div>{errorMessage}</div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Họ và Tên</label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        placeholder="Nguyễn Văn A"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Địa chỉ Email</label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="example@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Tiêu đề tin nhắn</label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      placeholder="Hợp tác phát triển ứng dụng Cloud-Native / Cơ hội việc làm..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Nội dung chi tiết</label>
                    <textarea
                      rows={4}
                      required
                      disabled={isSubmitting}
                      placeholder="Mô tả nội dung ý tưởng hoặc yêu cầu dự án..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-space-bg font-bold text-sm shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Đang gửi tin nhắn...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Gửi Tin Nhắn Ngay
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
