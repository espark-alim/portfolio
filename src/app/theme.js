"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import "@fontsource/caveat"; // Import Caveat font
import "@fontsource/caveat/700.css"; // Import specific weight

let theme = createTheme({
  palette: {
    primary: {
      main: "#000", // Blue
    },
    secondary: {
      main: "#FF4081", // Pink
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "40px",
      fontWeight: 700,
      color: "#1e2125",
      fontFamily: "'Caveat', cursive",
    },
    h2: {
      fontSize: "35px",
      fontWeight: 500,
      fontFamily: "'Caveat', cursive",
    },
    h3: {
      fontSize: "28px",
      fontWeight: 500,
      fontFamily: "'Caveat', cursive",
    },
    h6: {
      fontSize: "14px",
      letterSpacing: "5px",
      textTransform: "capitalize",
      color: "#3c3e41",
    },
  },
  shape: {
    borderRadius: 12,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
