import React from "react";

import Input from "../Input/Input";
import Error from "../Error/Error";

import StyledField from "./Field.styles";

interface FieldProps {
  width?: number | string;
  height?: number;
  marginTop?: number;
  type: string;
  name: string;
  placeholder: string;
  value: any;
  onChange: any;
  onBlur: any;
  onError: any;
};

const Field: React.FC<FieldProps> = ({ 
  width,
  height,
  marginTop,
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  onError
}) => (
  <StyledField width={width} height={height} marginTop={marginTop} onError={onError}>
    <Input 
      width={width}
      height={height}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onError={onError}
    />
    <Error onError={onError} />
  </StyledField>
);

export default Field;