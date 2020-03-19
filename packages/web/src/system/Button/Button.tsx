import React from "react";

import StyledButton from "./Button.styles";

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

const Button: React.FC<ButtonProps> = ({
  type,
  variant,
  onClick,
  isSubmitting,
  submittingText,
  isDisabled,
  isSelected,
  ariaLabel,
  width,
  height,
  bgColor,
  color,
  mt,
  mb,
  children
}) => (
  <StyledButton
    type={type}
    variant={variant}
    onClick={onClick}
    isSubmitting={isSubmitting}
    submittingText={submittingText}
    isDisabled={isDisabled}
    isSelected={isSelected}
    ariaLabel={ariaLabel}
    width={width}
    height={height}
    bgColor={bgColor}
    color={color}
    mt={mt}
    mb={mb}
    disabled={isSubmitting || isDisabled}
  >
    {children}
  </StyledButton>
);

export default Button;
