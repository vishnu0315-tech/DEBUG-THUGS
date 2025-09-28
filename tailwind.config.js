/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./scr/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          border: 'var(--color-border)', /* transparent black */
          input: 'var(--color-input)', /* white */
          ring: 'var(--color-ring)', /* blue-700 */
          background: 'var(--color-background)', /* gray-50 */
          foreground: 'var(--color-foreground)', /* gray-800 */
          primary: {
            DEFAULT: 'var(--color-primary)', /* blue-700 */
            foreground: 'var(--color-primary-foreground)', /* white */
          },
          secondary: {
            DEFAULT: 'var(--color-secondary)', /* slate-500 */
            foreground: 'var(--color-secondary-foreground)', /* white */
          },
          destructive: {
            DEFAULT: 'var(--color-destructive)', /* red-500 */
            foreground: 'var(--color-destructive-foreground)', /* white */
          },
          muted: {
            DEFAULT: 'var(--color-muted)', /* slate-50 */
            foreground: 'var(--color-muted-foreground)', /* gray-500 */
          },
          accent: {
            DEFAULT: 'var(--color-accent)', /* amber-500 */
            foreground: 'var(--color-accent-foreground)', /* gray-800 */
          },
          popover: {
            DEFAULT: 'var(--color-popover)', /* white */
            foreground: 'var(--color-popover-foreground)', /* gray-800 */
          },
          card: {
            DEFAULT: 'var(--color-card)', /* white */
            foreground: 'var(--color-card-foreground)', /* gray-800 */
          },
          success: {
            DEFAULT: 'var(--color-success)', /* emerald-500 */
            foreground: 'var(--color-success-foreground)', /* white */
          },
          warning: {
            DEFAULT: 'var(--color-warning)', /* amber-500 */
            foreground: 'var(--color-warning-foreground)', /* gray-800 */
          },
          error: {
            DEFAULT: 'var(--color-error)', /* red-500 */
            foreground: 'var(--color-error-foreground)', /* white */
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', 'monospace'],
        },
        fontSize: {
          'xs': ['0.75rem', { lineHeight: '1rem' }],
          'sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'base': ['1rem', { lineHeight: '1.5rem' }],
          'lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'xl': ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1' }],
          '6xl': ['3.75rem', { lineHeight: '1' }],
        },
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
          '128': '32rem',
        },
        boxShadow: {
          'elevation-1': '0 2px 4px rgba(0, 0, 0, 0.05)',
          'elevation-2': '0 4px 8px rgba(0, 0, 0, 0.08)',
          'elevation-3': '0 8px 16px rgba(0, 0, 0, 0.10)',
          'elevation-4': '0 8px 24px rgba(0, 0, 0, 0.12)',
        },
        animation: {
          'fade-in': 'fadeIn 200ms ease-out',
          'slide-down': 'slideDown 300ms ease-in-out',
          'slide-up': 'slideUp 300ms ease-in-out',
          'scale-in': 'scaleIn 200ms ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideDown: {
            '0%': { transform: 'translateY(-10px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(10px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          scaleIn: {
            '0%': { transform: 'scale(0.95)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
        },
        transitionTimingFunction: {
          'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('tailwindcss-animate'),
    ],
  }