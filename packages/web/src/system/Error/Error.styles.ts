import styled from "styled-components";

interface ErrorProps {}

const StyledError = styled.h4<ErrorProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #F4333D;
`;

export default StyledError;