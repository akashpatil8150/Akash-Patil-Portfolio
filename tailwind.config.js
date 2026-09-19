/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050709',
        'bg-2': '#0a0d12',
        panel: '#0d1117',
        'panel-2': '#111620',
        primary: '#e8f0fe',
        muted: '#8b9ab5',
        dim: '#3d4a5c',
        brand: '#4f8cff',
        'brand-2': '#00d4aa',
        'brand-3': '#a855f7',
        accent: '#f59e0b',
        border: '#1a2030',
        'border-2': '#242d3d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(79,140,255,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(79,140,255,0.6), 0 0 100px rgba(79,140,255,0.2)' },
        },
      },
    },
  },
  plugins: [],
}
