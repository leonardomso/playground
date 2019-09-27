import styled from "styled-components";

interface FormProps {
	width?: number | string;
  height?: number | string;
	maxWidth?: number;
	maxHeight?: number;
	backgroundColor?: string;
}

const Form = styled.form<FormProps>`
	width: ${({ width }) => width || 100}%;
  height: ${({ height }) => height || "420px"};
  max-width: ${({ maxWidth }) => maxWidth || "100%"}px;
  max-height: ${({ maxHeight }) => maxHeight || "100%"};
	background-color: ${({ backgroundColor }) => backgroundColor || "#FFF"};
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	align-self: center;
	justify-self: center;
`;

export default Form;
