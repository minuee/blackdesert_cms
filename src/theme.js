// material-ui/core/styles
import {
  createMuiTheme,
  responsiveFontSizes,
  useTheme,
} from "@material-ui/core/styles";

import grey from "@material-ui/core/colors/grey";

let theme = createMuiTheme({
  // mixins: {
  //   toolbar: {
  //     minHeight: 56,
  //     "@media (min-width:0px) and (orientation: landscape)": { minHeight: 48 },
  //     "@media (min-width:600px)": {
  //       minHeight: 96,
  //     },
  //   },
  // },
  overrides: {
    // MuiCssBaseline: {
    //   "@global": {
    //     body: {
    //       backgroundColor: defaultTheme.palette.action.hover,
    //     },
    //   },
    // },

    MuiTypography: {
      colorTextPrimary: {
        color: "#ffffff",
      },
      colorTextSecondary: {
        color: "#999999",
      },
    },
    MuiButton: {
      contained: {
        color: "#ffffff",
        // backgroundColor: grey[700],
      },
      outlined: {
        // backgroundColor: "white",
        boxShadow:
          "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
      },
    },
    // MuiAppBar: {
    //   colorDefault: {
    //     color: "rgba(0, 0, 0, 0.87)",
    //     backgroundColor: "#fafafa",
    //   },
    // },
  },
  typography: {
    fontFamily: ["Noto Sans KR", "Montserrat", "sans-serif"].join(","),
    h5: {
      // fontWeight: 500,
    },
    // fontWeightRegular: 300,
  },
  palette: {
    type: "light",
    primary: {
      main: "#f1c787",
      // light: "#1A5AA6",
      // dark: "#002e65",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#000",
      contrastText: "#ffffff",
    },
  },
  linearGradient: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
});

theme = responsiveFontSizes(theme);

export default theme;
