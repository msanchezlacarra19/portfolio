import { createTheme } from "@mui/material/styles";

const sharedTypography = {
  fontFamily: "'Segoe UI', 'Noto Sans', 'Helvetica Neue', Arial, sans-serif",
  h2: {
    fontSize: "clamp(2.25rem, 5.2vw, 3.75rem)",
    lineHeight: 1.12,
    fontWeight: 700
  },
  h4: {
    fontSize: "clamp(1.55rem, 3vw, 2.25rem)",
    lineHeight: 1.25,
    fontWeight: 600
  },
  h6: {
    fontSize: "1.22rem",
    lineHeight: 1.35,
    fontWeight: 600
  },
  subtitle2: {
    fontSize: "1rem",
    lineHeight: 1.45,
    fontWeight: 500
  },
  body1: {
    fontSize: "1.1rem",
    lineHeight: 1.72
  },
  button: {
    fontSize: "1rem",
    fontWeight: 600,
    textTransform: "none"
  }
};

const sharedComponents = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        fontSize: "17px"
      },
      body: {
        lineHeight: 1.6,
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased"
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontSize: "0.98rem"
      }
    }
  }
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF"
    },
    text: {
      primary: "#212121",
      secondary: "#555555"
    },
    primary: {
      main: "#a14170"
    },
    secondary: {
      main: "#7b2d8e"
    }
  },
  typography: sharedTypography,
  components: sharedComponents
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1E1E1E"
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0"
    },
    primary: {
      main: "#ff93dc"
    },
    secondary: {
      main: "#c084fc"
    }
  },
  typography: sharedTypography,
  components: sharedComponents
});
