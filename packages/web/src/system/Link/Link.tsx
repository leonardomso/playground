import React from "react";

import StyledLink from "./Link.styles";

interface LinkProps {
  to: string;
  message: string;
  marginTop?: number;
};

const Link: React.FC<LinkProps> = ({ to, message, marginTop }) => (
  <StyledLink to={to} marginTop={marginTop}>{message}</StyledLink>
);

export default Link;