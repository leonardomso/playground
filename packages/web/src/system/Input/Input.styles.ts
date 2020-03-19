import styled, { css } from "styled-components";

interface InputContainerProps {
  width?: number | string;
  height?: number;
  mt?: number;
  mb?: number;
}

interface InputStyledProps {
  error?: string | undefined;
}

export const InputContainer = styled.div<InputContainerProps>`
  width: ${({ width }) => width || "100%"};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${({ mt }) => (mt ? mt : 0)}px;
`;

export const InputStyled = styled.input<InputStyledProps>`
  width: 100%;
  height: 50px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #4e4e4e;
  background: white;
  border: 1px solid #eff2f6;
  box-sizing: border-box;
  border-radius: 5px;
  text-indent: 20px;

  ::-webkit-input-placeholder {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #92929d;
    text-indent: 20px;
  }

  :-ms-input-placeholder {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #92929d;
    text-indent: 20px;
  }

  ::placeholder {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #92929d;
    text-indent: 20px;
  }

  ${({ error }) =>
    error &&
    css`
      background: white;
      border: 1px solid #fc3d28;
      box-sizing: border-box;
      border-radius: 5px;
      text-indent: 20px;
      &:hover {
        border: 1px solid #fc3d28;
        box-sizing: border-box;
        border-radius: 5px;
        text-indent: 20px;
      }
    `};
`;
