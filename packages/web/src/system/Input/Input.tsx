import React from "react";

import Label from "../Label/Label";
import Error from "../Error/Error";

import { InputContainer, InputStyled } from "./Input.styles";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  label?: string;
  onChange: any;
  onBlur?: any;
  error: string | undefined;
  width?: number | string;
  height?: number;
  autoComplete?: "on" | "off";
  mt?: number;
  mb?: number;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  label,
  onChange,
  onBlur,
  error,
  width,
  height,
  autoComplete,
  mt,
  mb
}) => (
  <InputContainer width={width} height={height} mt={mt} mb={mb}>
    {label ? <Label label={label} mb={10} /> : null}

    <InputStyled
      height={40}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      autoComplete={autoComplete}
    />

    {error ? <Error error={error} mt={10} /> : null}
  </InputContainer>
);

export default Input;
