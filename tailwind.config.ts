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
        cosmic: {
          purple: {
            900: '#1a0b2e',
            800: '#2d1b4e',
            700: '#3f2a6b',
            600: '#5c3d99',
            500: '#7c4dbd',
            400: '#9d6dd4',
            300: '#b891e6',
          },
          blue: {
            900: '#0a1128',
            800: '#132050',
            700: '#1a2f78',
            600: '#2541a1',
            500: '#3b5bdb',
            400: '#5472e8',
            300: '#7a93f2',
          },
          gold: {
            900: '#4a3c1a',
            800: '#6b5424',
            700: '#8d6f2e',
            600: '#b89439',
            500: '#d4a947',
            400: '#e6c566',
            300: '#f5e099',
          },
        },
        prism: {
          magenta: '#d946ef',
          cyan: '#22d3ee',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#fb7185',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Philosopher', 'sans-serif'],
      },
      animation: {
        'cosmic-gradient': 'cosmicGradient 20s ease infinite',
        float: 'float 8s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        cosmicGradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px) translateX(10px)', opacity: '0.6' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

export default config
