import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, User, Tag } from 'lucide-react';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Cloudflare Workers Edge SSG requirement
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
      <Navbar />

      <article className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Quay lại Danh Sách Bài Viết
        </Link>

        {/* Post Metadata Header */}
        <div className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 text-xs font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-cyan-400" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-cyan-400" />
              {post.author}
            </span>
          </div>
        </div>

        {/* Post Content */}
        <div className="prose prose-invert max-w-none prose-cyan prose-p:text-slate-300 prose-p:leading-relaxed prose-h2:text-white prose-h2:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-code:text-cyan-300 prose-code:bg-slate-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded">
          <div className="whitespace-pre-line text-slate-200 text-base leading-relaxed space-y-4">
            {post.content}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
