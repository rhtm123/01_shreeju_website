/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

  },

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#3B82F6", // Blue
          "secondary": "#6D28D9", // Purple
          "accent": "#F59E0B", // Amber
          "base-100": "#F3F4F6", // Light Gray
          "base-200": "#E5E7EB", // Gray
          "base-300": "#D1D5DB", // Dark Gray
          "neutral": "#374151", // Darker Gray
          "info": "#2563EB", // Info Blue
          "success": "#10B981", // Green
          "warning": "#FBBF24", // Yellow
          "error": "#EF4444" // Red
        },
      },

      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#3B82F6", // Blue
          "secondary": "#A78BFA", // Light Purple
          "accent": "#FBBF24", // Amber
          "base-100": "#1F2937", // Dark Gray
          "base-200": "#111827", // Darker Gray
          "base-300": "#0F172A", // Even Darker Gray
          "neutral": "#9CA3AF", // Neutral Gray
          "info": "#60A5FA", // Info Blue
          "success": "#34D399", // Green
          "warning": "#F59E0B", // Yellow
          "error": "#EF4444" // Red
        },
      },
    ],


  },
  plugins: [
    require('daisyui'),
  ],

};
