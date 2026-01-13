/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // ← WICHTIG! Aktiviert Dark Mode via class="dark"
  theme: {
    extend: {
      colors: {
        // LIGHT MODE (Standard)
        bg: {
          DEFAULT: '#FAF7F2', // Light Beige
          dark: '#0F172A', // Dark Slate (für Dark Mode)
        },
        surface: {
          DEFAULT: '#FFFFFF', // White
          dark: '#1E293B', // Dark Gray (für Dark Mode)
        },

        text: {
          DEFAULT: '#111827', // Almost Black
          dark: '#F1F5F9', // Light Gray (für Dark Mode)
        },
        muted: {
          DEFAULT: '#4B5563', // Gray
          dark: '#94A3B8', // Light Gray (für Dark Mode)
        },
        heading: {
          DEFAULT: '#0F172A', // Dark Slate
          dark: '#F8FAFC', // Almost White (für Dark Mode)
        },

        // Brand Colors (bleiben gleich in beiden Modi!)
        primary: {
          DEFAULT: '#0F766E',
          hover: '#115E59',
        },
        accent: {
          DEFAULT: '#D97706',
          hover: '#B45309',
        },

        // UI
        border: {
          DEFAULT: '#E5E7EB',
          dark: '#334155', // Darker Border (für Dark Mode)
        },
        focus: '#0D9488',
        header: {
          DEFAULT: '#B8DDD1', // Sage Green
          dark: '#1E3A32', // Dark Teal (für Dark Mode)
        },
      },

      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },

      boxShadow: {
        sm: '0 2px 8px rgba(15, 118, 110, 0.08)',
        md: '0 4px 16px rgba(15, 118, 110, 0.12)',
        lg: '0 10px 25px rgba(15, 118, 110, 0.15)',
        xl: '0 20px 40px rgba(15, 118, 110, 0.2)',
        // Dark Mode Shadows (weicher)
        'sm-dark': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'md-dark': '0 4px 16px rgba(0, 0, 0, 0.4)',
        'lg-dark': '0 10px 25px rgba(0, 0, 0, 0.5)',
      },

      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },

      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },

      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}
