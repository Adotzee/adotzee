import { defineConfig } from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      primary: '#1e3a8a', // Deep blue
      light: '#e5e7eb', // Light gray
      logo: '#052949',
      good: '#23a8f2',
    },
    fontFamily: {
      serif: ['Georgia', 'serif'], // For Georgia Bold
      playfair: ['"Playfair Display"', 'serif'], // For Playfair Display Bold
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.5s ease-in forwards',
    },
  },
});
