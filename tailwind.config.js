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
        light: '#f3f4f6',
        dark: '#111827',
        white: '#ffffff'
      },
    },
    plugins: [
      require('@tailwindcss/forms')({
        strategy: 'class'
      })
    ]
  },
  plugins: [],
}
