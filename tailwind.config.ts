import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          bg: '#030712',
          card: 'rgba(15, 23, 42, 0.65)',
          border: 'rgba(51, 65, 85, 0.5)',
          accent: '#00f3ff',
          blue: '#3b82f6',
          purple: '#a855f7',
          pink: '#ec4899',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'hero-gradient': 'radial-gradient(circle at 50% 30%, rgba(0, 243, 255, 0.15), rgba(168, 85, 247, 0.08) 40%, rgba(3, 7, 18, 0.95) 75%)',
        'hero-gradient-light': 'radial-gradient(circle at 50% 30%, rgba(2, 132, 199, 0.12), rgba(124, 58, 237, 0.06) 40%, rgba(248, 250, 252, 0.95) 75%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0, 243, 255, 0.4))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(168, 85, 247, 0.7))' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 20px -5px rgba(0, 243, 255, 0.5)',
        'neon-purple': '0 0 20px -5px rgba(168, 85, 247, 0.5)',
        'neon-blue': '0 0 20px -5px rgba(59, 130, 246, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
};

export default config;
