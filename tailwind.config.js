/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    backgroundImage: {
      banner: 'url(../assets/wine.png)',
      bannerMobile: 'url(../assets/heormob.png)',
      banner2: 'url(../assets/banner.jpg)',
      mission: 'url(../assets/mission.jpg)',
      belief: 'url(../assets/belief.jpg)',
      founders: 'url(../assets/founder.jpg)',
      man: 'url(../assets/man.avif)',
      woman: 'url(../assets/womannn.jpg)',
      woman2: 'url(../assets/wogroup.jpg)',
      children: 'url(../assets/children.jpg)',
      youth: 'url(../assets/youth.jpg)',
      
    },
    extend: {
      colors: {
        'primary': '#81276D'
      }
    },
  },
  plugins: [],
}

