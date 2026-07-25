'use client';

import { Terminal, Sparkles, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-950/90 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-500" />
            </div>
            <span className="text-xs font-mono text-slate-700 dark:text-slate-300">
              &copy; {new Date().getFullYear()} Giang Thanh Tùng. {t.footer.rights}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1">
              {t.footer.builtWith}
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-cyan-500 hover:border-cyan-500/40 transition-all flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
