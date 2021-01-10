const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./templates/**/*.html", "./content/**/*.md"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        tgray: colors.trueGray,
        wgray: colors.warmGray,
        cgray: colors.coolGray,
        bgray: colors.blueGray,
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
              color: theme("colors.tgray.300"),
              '[class~="lead"]': {
                color: theme("colors.tgray.300"),
              },
              a: {
                color: theme("colors.tgray.200"),
              },
              strong: {
                color: theme("colors.tgray.200"),
              },
              "ol > li::before": {
                color: theme("colors.tgray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.tgray.600"),
              },
              hr: {
                borderColor: theme("colors.tgray.700"),
              },
              blockquote: {
                color: theme("colors.tgray.200"),
                borderLeftColor: theme("colors.tgray.700"),
              },
              h1: {
                color: theme("colors.tgray.200"),
              },
              h2: {
                color: theme("colors.tgray.200"),
              },
              h3: {
                color: theme("colors.tgray.200"),
              },
              h4: {
                color: theme("colors.tgray.200"),
              },
              "figure figcaption": {
                color: theme("colors.tgray.400"),
              },
              code: {
                color: theme("colors.tgray.200"),
              },
              "a code": {
                color: theme("colors.tgray.200"),
              },
              pre: {
                color: theme("colors.tgray.700"),
              },
              thead: {
                color: theme("colors.tgray.200"),
                borderBottomColor: theme("colors.tgray.600"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.tgray.700"),
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
