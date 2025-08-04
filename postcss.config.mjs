const config = {
  plugins: ["@tailwindcss/postcss"],
  // tailwind.config.js
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        fields: ['var(--font-fields)', 'sans-serif'],
      },
    },
  },
  plugins: [],

};

export default config;
