/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#50352c",
        secondary : "#577f4b"
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Arial', 'Helvetica', 'sans-serif'],
        bitter: ['var(--font-bitter)', 'serif'],
        lora: ['var(--font-lora)', 'serif'],
        sacramento: ['var(--font-sacramento)', 'cursive'],
      },
    },
  },
  plugins: [],
};
