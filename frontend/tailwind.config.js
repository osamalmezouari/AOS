/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        mainBleu: "#0071DC",
        myGray: "#F5F6F9",
        yellow: "#FEC400",
        secendBlue: "#F5F6F9",
        darkBleu :"#00224f"
      },
      fontFamily: {
        main: ["Josefin Sans", "sans-serif"],
        secend: ["Archivo", "sans-serif"],
      },
      backgroundImage: {
        logo: "url(D:\\Oussama\\PROJECTS\\Mic-Minah\\frontend\\public\\assets\\images\\logo.png)",
        // landing:
        //   "url(https://shtheme.com/demosd/insuren/wp-content/uploads/2022/11/abs-bg3.png)",
        home: "url(https://images.pexels.com/photos/20184064/pexels-photo-20184064/free-photo-of-man-kneeling-and-pilgrims-walking-at-great-mosque-in-mecca.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
        landing:
          "url(https://loms-moodle.envytheme.com/theme/loms/pix/banner/banner-bg-3.webp)",
        pngfr :"url(./public/assets/images/2.png)",
        pngar :"url(./public/assets/images/1.png)"
      },
    },
  },
  plugins: [],
};
