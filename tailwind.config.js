/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    backgroundImage: {
      banner: 'url(../assets/banner.jpg)',
      mission: 'url(../assets/mission.jpg)',
      belief: 'url(../assets/belief.jpg)',
      founders: 'url(../assets/founder.jpg)',
    },
    extend: {
      colors: {
        'primary': '#81276D'
      }
    },
  },
  plugins: [],
}

