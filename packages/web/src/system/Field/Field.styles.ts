import styled, { css } from "styled-components";

interface FieldProps {
  width?: number | string;
  height?: number;
	maxWidth?: number;
  maxHeight?: number;
  marginTop?: number;
  onError: any;
}

const Field = styled.div<FieldProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || 42}px;
  max-width: ${({ maxWidth }) => maxWidth || 346}px;
  max-height: ${({ maxHeight }) => maxHeight || 42}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  ${({ onError }) => onError && 
		css`
      height: 70px;
      max-height: 70px;
		`};
`;

export default Field;