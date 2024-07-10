/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "Off-white": "hsl(36, 100%, 99%)",
        "Grayish-blue": " hsl(233, 8%, 79%)",
        "Dark-grayish-blue": "hsl(236, 13%, 42%)",
        "Very-dark-blue": "hsl(240, 100%, 5%)",
        "soft-orange": " hsl(35, 77%, 62%)",
        "soft-red": "hsl(5, 85%, 63%)",
      },
      colors: {
        "Off-white": "hsl(36, 100%, 99%)",
        "Grayish-blue": " hsl(233, 8%, 79%)",
        "Dark-grayish-blue": "hsl(236, 13%, 42%)",
        "Very-dark-blue": "hsl(240, 100%, 5%)",
        "soft-orange": " hsl(35, 77%, 62%)",
        "soft-red": "hsl(5, 85%, 63%)",
      },
    },
  },
  plugins: [],
};
