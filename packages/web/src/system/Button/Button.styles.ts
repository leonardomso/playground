import { styled } from "../theme";

interface ButtonProps {
  type: string;
  width?: number | string;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  backgroundColor?: string;
  color?: string;
  alignSelf?: string;
  justifySelf?: string;
  marginTop?: number;
}

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || 42}px;
  max-width: ${({ maxWidth }) => maxWidth || 346}px;
  max-height: ${({ maxHeight }) => maxHeight || 42}px;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.color.primary};
  color: ${({ color, theme }) => color || theme.color.secondary};
  border: none;
  border-radius: 6px;
  margin-top: ${({ marginTop }) => marginTop}px;
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;

export default StyledButton;
