/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sub/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Theme-aware tokens (wired to CSS variables in `styles/globals.css`)
        'primary-bg': 'var(--primary-bg)',
        'secondary-bg': 'var(--secondary-bg)',
        'card-bg': 'var(--card-bg)',
        'accent-bg': 'var(--accent-bg)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'accent-color': 'var(--accent-color)',
        'accent-hover': 'var(--accent-hover)',
        'border-color': 'var(--border-color)',
        'shadow-light': 'var(--shadow-light)',
        'shadow-dark': 'var(--shadow-dark)',
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        'full': '9999px',
      },
      fontFamily: {
        'body': ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['var(--font-jetbrains-mono)', 'Fira Code', 'monospace'],
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-accent': 'var(--gradient-accent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'pulse': 'pulse 3s ease-in-out infinite',
        'rotate': 'rotate 2s linear infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite alternate',
        'modal-appear': 'modalAppear 0.3s ease-out forwards',
        'theme-transition': 'themeTransition 0.3s ease',
        'dash': 'dash 1.5s ease-in-out infinite',
        'color': 'color 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { transform: 'translateY(30px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          'from': { transform: 'translateX(-30px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          'from': { transform: 'translateX(30px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.2' },
        },
        rotate: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        borderGlow: {
          'from': { opacity: '0.4' },
          'to': { opacity: '0.7' },
        },
        modalAppear: {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        themeTransition: {
          '0%': { opacity: '0.8' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        dash: {
          '0%': { strokeDasharray: '1, 200', strokeDashoffset: '0' },
          '50%': { strokeDasharray: '89, 200', strokeDashoffset: '-35' },
          '100%': { strokeDasharray: '89, 200', strokeDashoffset: '-124' },
        },
        color: {
          '0%': { stroke: '#212121' },
          '40%': { stroke: '#212121' },
          '66%': { stroke: '#212121' },
          '80%, 90%': { stroke: '#212121' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // you can add custom breakpoints here
        'mobile-sm': '400px', // example: for very small phones
      },
    },
  },
  plugins: [],
}
