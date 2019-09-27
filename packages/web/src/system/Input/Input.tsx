import React from "react";

import StyledInput from "./Input.styles";

interface InputProps {
  width?: number | string;
  height?: number;
  type: string;
  name: string;
  placeholder: string;
  value?: any;
  onChange?: any;
  onBlur?: any;
  onError?: any;
};

const Input: React.FC<InputProps> = ({
  width,
  height,
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  onError
 }) => (
  <StyledInput 
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
);

export default Input;