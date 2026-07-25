import React from 'react';
import Link from 'next/link';
import { BookOpen, Calendar, ArrowLeft, Tag, User } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Technical Blog | Giang Thanh Tùng',
  description: 'Chia sẻ kiến thức lập trình, kinh nghiệm thiết kế hệ thống Cloud-Native & Microservices.',
};

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
      <Navbar />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-12">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Về Trang Chủ
          </Link>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Technical Blog & Insights
          </h1>
          <p className="text-slate-400 text-base max-w-2xl font-light">
            Góc chia sẻ kinh nghiệm xử lý bug, thiết kế hệ thống Cloud-Native, tối ưu chi phí Serverless và bài học làm dự án thực chiến.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-xl transition-all shadow-xl space-y-4 group"
            >
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  {post.author}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {post.summary}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 text-xs font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-mono font-bold text-cyan-400 hover:underline"
                >
                  Đọc Bài Viết &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
