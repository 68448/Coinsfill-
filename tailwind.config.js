/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './UI/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coinBlack: '#1E1E2E',
        coinBlue: '#4D6AE4',
        coinFooter: '#333333',
      },
      boxShadow: {
        shadowGray: '0px 4px 20px 0px rgba(104, 109, 224, 0.50);'
      }
    },
  },
  plugins: [],
}
