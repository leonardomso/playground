import React from "react";

import { StyledGoogleButton, Wrapper } from "./GoogleButton.styles";

import { ReactComponent as GoogleIcon } from "../../images/google-icon.svg";

interface GoogleButtonProps {
  type: "button";
  text: string;
  width?: number | string;
  height?: number;
  color?: string;
  mt?: number;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({
  type,
  text,
  width,
  height,
  color,
  mt
}) => (
  <StyledGoogleButton
    type={type}
    width={width}
    height={height}
    color={color}
    mt={mt}
  >
    <Wrapper>
      <GoogleIcon />
      {text}
    </Wrapper>
  </StyledGoogleButton>
);

export default GoogleButton;
