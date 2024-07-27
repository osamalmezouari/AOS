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
        darkBleu: "#00224f",
      },
      fontFamily: {
        main: ["Josefin Sans", "sans-serif"],
        secend: ["Archivo", "sans-serif"],
      },
      backgroundImage: {
        logo: "url(D:\\Oussama\\PROJECTS\\Mic-Minah\\frontend\\public\\assets\\images\\logo.png)",
        home: "url(D:\\Oussama\\PROJECTS\\AOS\\frontend\\public\\assets\\images\\IMG-20240521-WA0010.jpg)",
        landing:
          "url(https://loms-moodle.envytheme.com/theme/loms/pix/banner/banner-bg-3.webp)",
        pngfr: "url(./public/assets/images/2.png)",
        pngar: "url(./public/assets/images/1.png)",
        makah:
          "url(https://images.pexels.com/photos/5620451/pexels-photo-5620451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
      },
    },
  },
  plugins: [],
};
