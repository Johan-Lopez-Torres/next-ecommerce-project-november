/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ae00ff",

          secondary: "#008f00",

          accent: "#c60000",

          neutral: "#09161a",

          "base-100": "#1f2333",

          info: "#0069fc",

          success: "#1ED760",

          warning: "#ffa200",

          error: "#e40044",
        },
      },
    ],
  },
};
