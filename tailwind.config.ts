/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        'card-bg': '#0F0F0F',
        'card-border': '#1E1E2E',
        purple: {
          DEFAULT: '#7C3AED',
          light: '#9D5FF5',
          dark: '#5B21B6',
          glow: 'rgba(124, 58, 237, 0.4)',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
          glow: 'rgba(6, 182, 212, 0.4)',
        },
        'text-primary': '#F1F5F9',
        'text-secondary': '#94A3B8',
        success: '#10B981',
        gold: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 0.4s steps(1) infinite',
        'blink': 'blink 1s step-end infinite',
        'float-up': 'float-up 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'pulse-glow-gold': 'pulse-glow-gold 2s ease-in-out infinite',
        'pulse-glow-cyan': 'pulse-glow-cyan 2s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'timeline-dot': 'timeline-dot 2s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%': { clipPath: 'inset(40% 0 61% 0)', transform: 'translate(-2px, 2px)' },
          '20%': { clipPath: 'inset(92% 0 1% 0)', transform: 'translate(2px, -2px)' },
          '40%': { clipPath: 'inset(43% 0 1% 0)', transform: 'translate(2px, 2px)' },
          '60%': { clipPath: 'inset(25% 0 58% 0)', transform: 'translate(-2px, -2px)' },
          '80%': { clipPath: 'inset(54% 0 7% 0)', transform: 'translate(2px, 2px)' },
          '100%': { clipPath: 'inset(58% 0 43% 0)', transform: 'translate(-2px, -2px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'float-up': {
          '0%': { transform: 'translateY(0px)', opacity: '0' },
          '10%': { opacity: '0.15' },
          '90%': { opacity: '0.15' },
          '100%': { transform: 'translateY(-100vh)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(124, 58, 237, 0.4), 0 0 20px rgba(124, 58, 237, 0.2)' },
          '50%': { boxShadow: '0 0 15px rgba(124, 58, 237, 0.8), 0 0 40px rgba(124, 58, 237, 0.4)' },
        },
        'pulse-glow-gold': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(245, 158, 11, 0.4), 0 0 20px rgba(245, 158, 11, 0.2)' },
          '50%': { boxShadow: '0 0 15px rgba(245, 158, 11, 0.8), 0 0 40px rgba(245, 158, 11, 0.4)' },
        },
        'pulse-glow-cyan': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.4), 0 0 20px rgba(6, 182, 212, 0.2)' },
          '50%': { boxShadow: '0 0 15px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.4)' },
        },
        'timeline-dot': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(124, 58, 237, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(124, 58, 237, 0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
        'purple-glow': 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
      },
      boxShadow: {
        'purple-glow': '0 0 20px rgba(124, 58, 237, 0.5), 0 0 60px rgba(124, 58, 237, 0.2)',
        'cyan-glow': '0 0 20px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.2)',
        'gold-glow': '0 0 20px rgba(245, 158, 11, 0.5), 0 0 60px rgba(245, 158, 11, 0.2)',
        'card-hover': '0 20px 60px rgba(124, 58, 237, 0.3), 0 0 0 1px rgba(124, 58, 237, 0.5)',
      },
    },
  },
  plugins: [],
}

export default config
