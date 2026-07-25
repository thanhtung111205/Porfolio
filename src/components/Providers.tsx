'use client';

import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { AudioProvider } from '@/context/AudioContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AudioProvider>{children}</AudioProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
