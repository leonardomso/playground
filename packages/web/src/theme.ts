import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  bgColor: {
    primary: "#FE0000",
    secondary: "#FFFFFF"
  },
  color: {
    primary: "#FE0000",
    secondary: "#FFFFFF",
    gray: "#92929D"
  },
  font: {
    fontFamily: "Inter"
  },
  input: {
    bgColor: "rgba(246, 246, 246, 0.3)",
    border: "1px solid #d8dde6",
    borderRadius: "4px",
    textIndent: "10px",
    fontSize: "14px",
    fontWeight: 500
  },
  error: {
    bgColor: "rgba(254, 0, 0, 0.2)",
    color: "#FE0000",
    border: `1px solid #FE0000`,
    borderRadius: "4px"
  }
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
