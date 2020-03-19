import React from "react";

import StyledForm from "./Form.styles";

interface FormProps {
  onSubmit?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  width?: number | string;
  height?: number | string;
  maxWidth?: number;
  maxHeight?: number;
  backgroundColor?: string;
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  width,
  height,
  maxWidth,
  maxHeight,
  backgroundColor,
  children
}) => (
  <StyledForm
    onSubmit={onSubmit}
    width={width}
    height={height}
    maxWidth={maxWidth}
    maxHeight={maxHeight}
    backgroundColor={backgroundColor}
  >
    {children}
  </StyledForm>
);

export default Form;
