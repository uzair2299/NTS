/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary: Red (industrial/electrical theme)
          blue: {
            50: '#fff1f2',
            100: '#ffe4e6',
            200: '#fecdd3',
            300: '#fda4af',
            400: '#fb7185',
            500: '#ef4444',
            600: '#dc2626', // Primary red
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
            DEFAULT: '#dc2626',
          },
          // Secondary accent: Deep Crimson
          orange: {
            50: '#fdf2f2',
            100: '#f9d9d9',
            200: '#f1a7a7',
            300: '#e97575',
            400: '#df4444',
            500: '#cc0000', // Deep crimson
            600: '#aa0000',
            700: '#880000',
            800: '#660000',
            900: '#440000',
            DEFAULT: '#cc0000',
          },
          // WhatsApp green — unchanged
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#25d366',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            DEFAULT: '#25d366',
          },
          dark: '#0a0a0a',    // Near-black
          slate: '#374151',   // Dark gray text
          light: '#f9fafb',   // Light background
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
