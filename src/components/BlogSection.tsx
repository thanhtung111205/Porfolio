'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, Tag, User } from 'lucide-react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { useLanguage } from '@/context/LanguageContext';

export default function BlogSection() {
  const { t } = useLanguage();
  const posts = getAllPosts().slice(0, 2);

  return (
    <section id="blog" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-mono backdrop-blur-md"
          >
            <BookOpen className="w-4 h-4 text-purple-500" />
            <span>{t.nav.blog}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            {t.blog.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-light"
          >
            {t.blog.subtitle}
          </motion.p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {posts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="p-7 rounded-3xl bg-slate-100/90 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 backdrop-blur-xl transition-all shadow-xl hover:-translate-y-1.5 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-purple-500" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-purple-500" />
                    {post.author}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20 text-xs font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 mt-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-600 dark:text-purple-400 hover:underline"
                >
                  {t.blog.readMore} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity"
          >
            <BookOpen className="w-4 h-4" />
            {t.blog.allPosts}
          </Link>
        </div>

      </div>
    </section>
  );
}
