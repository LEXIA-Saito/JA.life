/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9fafb',
          500: '#6b7280',
          600: '#374151',
          700: '#111827',
        },
        secondary: {
          50: '#f9fafb',
          500: '#6b7280',
          600: '#4b5563',
        }
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}