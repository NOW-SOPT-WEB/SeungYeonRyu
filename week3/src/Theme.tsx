import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainBlue: "#0085FF",
    darkGrey: "#353535",
    pointGreen: "#31F167",
    magenta: "#FB4CFF",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
