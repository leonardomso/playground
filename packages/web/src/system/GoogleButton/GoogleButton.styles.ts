import styled from "styled-components";

interface GoogleButtonProps {
  type: "button";
  width?: number | string;
  height?: number;
  color?: string;
  mt?: number;
}

export const StyledGoogleButton = styled.button<GoogleButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || 50}px;
  margin-top: ${({ mt }) => mt}px;
  background-color: #ffffff;
  border: 2px solid #eff2f6;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #4e4e4e;
`;

export const Wrapper = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
