import styled from "styled-components";

interface ErrorProps {
  mt?: number;
}

export const ErrorContainer = styled.div<ErrorProps>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ mt }) => (mt ? mt : 0)}px;
`;

export const ErrorText = styled.p<ErrorProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #fc3d28;
  margin-left: 5px;
`;
