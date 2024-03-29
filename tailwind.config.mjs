import starlightPlugin from "@astrojs/starlight-tailwind";
import animatePlugin from "tailwindcss-animate";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: colors.red,
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray: colors.neutral,
      },
      fontFamily: {
        sans: ["gg sans", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        fifty: "50rem",
      },
    },
  },
  plugins: [starlightPlugin(), animatePlugin],
};
