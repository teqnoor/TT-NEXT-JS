const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        fields: ['var(--font-fields)', 'sans-serif'],
      },
    },
  },
};

export default config;
