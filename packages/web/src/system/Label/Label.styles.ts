import styled from "styled-components";

interface LabelProps {
  mb?: number;
}

export const StyledLabel = styled.label<LabelProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #4e4e4e;
  margin-bottom: ${({ mb }) => mb}px;
`;
