module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-nesting"),
    ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
  ],
};
