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
          blue: {
            50: '#f0f7ff',
            100: '#e0effe',
            200: '#bae2fd',
            300: '#7dd0fc',
            400: '#38bdf8',
            500: '#0066cc', // Premium trust blue
            600: '#0250a3',
            700: '#034085',
            800: '#07376b',
            900: '#0c2e56',
            DEFAULT: '#0066cc',
          },
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdbb74',
            400: '#fb923c',
            500: '#f57c00', // Premium service orange
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
            DEFAULT: '#f57c00',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#25d366', // WhatsApp green
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            DEFAULT: '#25d366',
          },
          dark: '#0f172a',
          slate: '#334155',
          light: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
