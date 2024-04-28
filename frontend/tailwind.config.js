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
      },
      fontFamily: {
        main: ["Josefin Sans", "sans-serif"],
        secend: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        logo: "url(D:\\Oussama\\PROJECTS\\Mic-Minah\\frontend\\public\\assets\\images\\logo.png)",
        landing:
          "url(https://shtheme.com/demosd/insuren/wp-content/uploads/2022/11/abs-bg3.png)",
        bg: "url(./public/assets/images/947f1d14-14d7-48c5-8fd2-08c26b3cd4ee.jpg)",
      },
    },
  },
  plugins: [],
};
