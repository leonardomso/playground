import React, { useState, useRef, useEffect } from "react";
import MDSpinner from "react-md-spinner";

import StyledButton from "./Button.styles";

interface ButtonProps {
  isSubmitting?: boolean;
  type: "button" | "submit" | "reset";
  width?: number | string;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  backgroundColor?: string;
  color?: string;
  alignSelf?: string;
  justifySelf?: string;
  marginTop?: number;
  onClick?: any;
};

const Button: React.FC<ButtonProps> = ({
  isSubmitting,
  type,
  width,
  height,
  maxWidth,
  maxHeight,
  backgroundColor,
  color,
  alignSelf,
  justifySelf,
  marginTop,
  onClick,
  children
}) => {
  const [componentWidth, setComponentWidth] = useState(0);
  const [componentHeight, setComponentHeight] = useState(0);

  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current && ref.current.getBoundingClientRect().width) {
      setComponentWidth(ref.current.getBoundingClientRect().width);
    }
    if (ref.current && ref.current.getBoundingClientRect().height) {
      setComponentHeight(ref.current.getBoundingClientRect().height);
    }
  }, [children]);

  return (
    <StyledButton
      type={type}
      width={componentWidth}
      height={componentHeight}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      backgroundColor={backgroundColor}
      color={color}
      alignSelf={alignSelf}
      justifySelf={justifySelf}
      marginTop={marginTop}
      onClick={onClick}
    >
      {isSubmitting ?
        <MDSpinner
          size={16}
          color1="#FFF"
          color2="#FFF"
          color3="#FFF"
          color4="#FFF"
          borderSize={2}
        />
        :
        children
      }
    </StyledButton>
  );
}

export default Button;