import styled, { css } from "styled-components";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "minimal";
  onClick?: any;
  isSubmitting?: boolean;
  submittingText?: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  ariaLabel?: string;
  width?: number | string;
  height?: number | string;
  bgColor?: string;
  color?: string;
  mt?: number;
  mb?: number;
}

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || 50}px;
  background-color: ${({ bgColor }) => bgColor || "#293744"};
  color: ${({ color }) => color || "#FFFFFF"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  margin-top: ${({ mt }) => mt}px;
  margin-bottom: ${({ mb }) => mb}px;

  ${({ isSubmitting }) =>
    isSubmitting &&
    css`
      background: #dfe4ea;
      cursor: not-allowed;
    `};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background: #dfe4ea;
      cursor: not-allowed;
    `};
`;

export default StyledButton;
