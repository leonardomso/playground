import React from "react";

import StyledError from "./Error.styles";

interface ErrorProps {
  onError: string;
};

const Error: React.FC<ErrorProps> = ({ onError }) => (
  <StyledError>{onError}</StyledError>
);

export default Error;