import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
	color: {
		primary: "#212672",
		secondary: "#FFFFFF",
		third: "#FFCE00"
	},
	font: {
		fontFamily: "Inter"
	}
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
