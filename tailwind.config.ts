import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070B14',
        surface: '#101828',
        accent: '#60A5FA',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(96, 165, 250, 0.3), 0 8px 24px rgba(15, 23, 42, 0.25)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 15% 20%, rgba(96,165,250,0.2), transparent 40%), radial-gradient(circle at 80% 0%, rgba(14,165,233,0.18), transparent 35%), linear-gradient(180deg, #070B14 0%, #0F172A 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
