'use client';

import React from 'react';
import { Volume2, VolumeX, Radio } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAudio } from '@/context/AudioContext';
import { useLanguage } from '@/context/LanguageContext';

export default function AudioPlayer() {
  const { t } = useLanguage();
  const { isPlaying, toggleMusic, soundEnabled, toggleSoundFX } = useAudio();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 p-2 rounded-2xl bg-white/90 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl"
    >
      {/* Music Toggle */}
      <button
        onClick={toggleMusic}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono transition-all ${
          isPlaying
            ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/40'
            : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
        }`}
        title={isPlaying ? t.audio.musicPlaying : t.audio.musicMuted}
      >
        <Radio className={`w-4 h-4 ${isPlaying ? 'animate-pulse text-cyan-500' : ''}`} />
        <span className="hidden sm:inline font-semibold">
          {isPlaying ? t.audio.musicPlaying : 'Lo-Fi Music'}
        </span>
        {isPlaying && (
          <span className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 h-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0.1s' }} />
            <span className="w-0.5 h-2/3 bg-cyan-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
            <span className="w-0.5 h-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0.3s' }} />
          </span>
        )}
      </button>

      {/* UI Sound FX Toggle */}
      <button
        onClick={toggleSoundFX}
        className={`p-2 rounded-xl text-xs transition-colors ${
          soundEnabled ? 'text-cyan-500 bg-slate-100 dark:bg-slate-800/60' : 'text-slate-400 bg-slate-200 dark:bg-slate-900'
        }`}
        title={soundEnabled ? t.audio.soundOn : t.audio.soundOff}
      >
        {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
      </button>
    </motion.div>
  );
}
