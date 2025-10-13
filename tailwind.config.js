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
        // Dark theme colors (default)
        'primary-bg': '#0a0a0a',
        'secondary-bg': '#111111',
        'card-bg': '#1a1a1a',
        'accent-bg': '#222222',
        'text-primary': '#ffffff',
        'text-secondary': '#b4b4b4',
        'text-muted': '#888888',
        'accent-color': '#00d4ff',
        'accent-hover': '#00a8cc',
        'border-color': '#333333',
        'shadow-light': 'rgba(255, 255, 255, 0.1)',
        'shadow-dark': 'rgba(0, 0, 0, 0.3)',
        
        // Light theme colors
        'light-primary-bg': '#ffffff',
        'light-secondary-bg': '#f8fafc',
        'light-card-bg': '#ffffff',
        'light-accent-bg': '#f1f5f9',
        'light-text-primary': '#1a202c',
        'light-text-secondary': '#4a5568',
        'light-text-muted': '#718096',
        'light-accent-color': '#0084ff',
        'light-accent-hover': '#0066cc',
        'light-border-color': '#e2e8f0',
        'light-shadow-light': 'rgba(0, 0, 0, 0.05)',
        'light-shadow-dark': 'rgba(0, 0, 0, 0.1)',
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
        'body': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
        'gradient-accent-light': 'linear-gradient(135deg, #0084ff 0%, #0066cc 100%)',
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
    },
  },
  plugins: [],
}
