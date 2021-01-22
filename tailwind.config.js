const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./templates/**/*.html", "./content/**/*.md"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.trueGray,
        brand: "#b1361e",
        note: colors.coolGray[600],
        "note-content": colors.coolGray[500],
        tip: colors.emerald[600],
        "tip-content": colors.emerald[600],
        info: colors.lightBlue[500],
        "info-content": colors.lightBlue[700],
        warning: colors.orange[500],
        "warning-content": colors.orange[700],
        danger: colors.red[600],
        "danger-content": colors.red[500],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:last-of-type::after": {
              content: "none",
            },
            code: {
              color: theme("colors.gray.900"),
              borderColor: theme("colors.gray.500"),
              borderWidth: "1px",
              padding: theme("spacing.1"),
              borderRadius: theme("borderRadius.DEFAULT"),
              fontWeight: null,
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            "a code": {
              color: theme("colors.gray.900"),
            },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: "inherit",
            },
            "pre code::before": {
              content: "none",
            },
            "pre code::after": {
              content: "none",
            },
          },
        },
        // Light text variant for dark-mode.
        light: {
          css: [
            {
              color: theme("colors.gray.300"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.gray.300"),
              },
              strong: {
                color: theme("colors.gray.300"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.700"),
              },
              blockquote: {
                color: theme("colors.gray.300"),
                borderLeftColor: theme("colors.gray.700"),
              },
              h1: {
                color: theme("colors.gray.300"),
              },
              h2: {
                color: theme("colors.gray.300"),
              },
              h3: {
                color: theme("colors.gray.300"),
              },
              h4: {
                color: theme("colors.gray.300"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.gray.300"),
              },
              "a code": {
                color: theme("colors.gray.300"),
              },
              pre: {
                color: theme("colors.gray.700"),
              },
              thead: {
                color: theme("colors.gray.300"),
                borderBottomColor: theme("colors.gray.600"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      display: ["dark"],
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")({ modifiers: [] })],
};
