const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.tsx", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.black,
          to_bg: colors.black,
        },
        titles: colors.yellow[400],
        links: {
          txt: colors.yellow[400],
          hover_txt: colors.yellow[600],
        },
        loading_spinner: colors.yellow[400],
        popups: {
          bg: colors.black,
          txt: colors.white,
          internal_border: colors.black,
        },
        warning: {
          txt: colors.white,
          bg: colors.black,
          border: colors.black,
        },
        error: {
          txt: colors.red[600],
          bg: colors.black,
          border: colors.black,
        },

        // Inputs
        btn: {
          txt: colors.white,
          bg: colors.black,
          border: colors.white,
          hover_txt: colors.black,
          hover_bg: colors.white,
          hover_border: colors.white,
        },
        btn_primary: {
          txt: colors.white,
          bg: colors.black,
          border: colors.white,
          hover_txt: colors.black,
          hover_bg: colors.white,
          hover_border: colors.white,
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.red[600],
        txt_input: {
          txt: colors.indigo[600],
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: colors.indigo[600],
          focus_bg: colors.slate[50],
          focus_border: colors.indigo[300],
        },

        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: colors.indigo[100],
        },

        // Mint widget
        token_preview: colors.yellow[200],
      },
    },
  },
  variants: {},
  plugins: [],
};
