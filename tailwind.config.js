export default {
  // This line in the tailwind.config.js file specifies the content that Tailwind CSS should scan for classes to generate styles for. In this case, it tells Tailwind CSS to look for JavaScript, JSX, TypeScript, and TypeScript JSX files within the src directory and its subdirectories.
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000",
          orange: "#FF5A00",
          gray: "#e5e7eb"
        },
      },
      screens: {
        xs: "0px",
        s: "320px",
        m: "375px",
        l: "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
