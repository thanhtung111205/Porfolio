'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, CheckCircle2, MessageSquare, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { FacebookIcon } from '@/components/Icons';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formTimestamp, setFormTimestamp] = useState<number>(0);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website_hp: '', // Honeypot field
  });

  useEffect(() => {
    setFormTimestamp(Date.now());
  }, []);

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
        body: JSON.stringify({
          ...formData,
          form_timestamp: formTimestamp,
        }),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch (jsonErr) {
        // Fallback text response parsing
      }

      if (res.ok && data?.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '', website_hp: '' });
      } else {
        setErrorMessage(
          data?.error || t.contact.error
        );
      }
    } catch (err) {
      setErrorMessage(t.contact.error);
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono backdrop-blur-md"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-500" />
            <span>{t.nav.contact}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            {t.contact.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-slate-100/90 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 backdrop-blur-xl space-y-6 shadow-xl hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-500" />
                {t.contact.infoCardTitle}
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href="mailto:gthanhtung.work@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-200/70 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 hover:border-cyan-500/50 transition-all text-slate-800 dark:text-slate-300 hover:text-cyan-500 group hover:scale-[1.02]"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Direct Email</div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">gthanhtung.work@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/thanh.tungg.638184/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-200/70 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 hover:border-blue-500/50 transition-all text-slate-800 dark:text-slate-300 hover:text-blue-500 group hover:scale-[1.02]"
                >
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                    <FacebookIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Facebook Profile</div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Giang Thanh Tùng</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-200/70 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Vị trí sinh sống</div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">{t.contact.location}</div>
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
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-2xl bg-slate-100/90 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 backdrop-blur-xl shadow-xl space-y-6 hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-500" />
                {t.contact.formTitle}
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto animate-bounce" />
                  <h4 className="font-bold text-lg text-white">{t.contact.success}</h4>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot Input - Hidden from humans */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_hp"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website_hp}
                      onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div>{errorMessage}</div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 dark:text-slate-300">{t.contact.nameLabel}</label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        placeholder="Nguyễn Văn A"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 dark:text-slate-300">{t.contact.emailLabel}</label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="example@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300">{t.contact.subjectLabel}</label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      placeholder="Hợp tác phát triển ứng dụng Cloud-Native / Cơ hội việc làm..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300">{t.contact.messageLabel}</label>
                    <textarea
                      rows={4}
                      required
                      disabled={isSubmitting}
                      placeholder="Mô tả nội dung ý tưởng hoặc yêu cầu dự án..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t.contact.submitBtn}
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
