/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pastel-pink": '#FFCFDF',
        "pastel-yellow": '#FEFDCA',
        "pastel-green": '#E0F9B5',
        "pastel-blue": '#A5DEE5',
      },
    },
  },
  plugins: [daisyui,],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FFCFDF",
          "secondary": "#FEFDCA",
          "accent": "#A5DEE5",
          "neutral": "#E0F9B5",
          "base-100": "#ffffff",
          "base-200": "#121212",
          "error": "#EF9595",
          "success":"#CBFFA9",
        },
      },
    ],
  },
}

