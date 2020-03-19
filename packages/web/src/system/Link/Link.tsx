import React from "react";

import StyledLink from "./Link.styles";

interface LinkProps {
  to: string;
  message: string;
  mt?: number;
  fontSize?: number;
  color?: string;
}

const Link: React.FC<LinkProps> = ({ to, message, mt, fontSize, color }) => (
  <StyledLink to={to} mt={mt} fontSize={fontSize} color={color}>
    {message}
  </StyledLink>
);

export default Link;
