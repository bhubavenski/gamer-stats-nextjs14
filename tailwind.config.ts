import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      fontFamily: {
        spartan: ['var(--font-spartan)'],
      },
      color: {
        primary: {
          blue: {
            100: '#5653ff',
            200: '#0b0646',
            300: '#181e3a',
            400: '#0a1a2a',
            500: '#0A1A2B',
          },
          cerise: {
            100: '#F52D69',
          }
        },
      },
    },
  },
} satisfies Config;

export default config;
