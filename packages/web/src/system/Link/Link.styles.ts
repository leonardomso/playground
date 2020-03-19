import { Link } from "react-router-dom";

import { styled } from "../../theme";

interface LinkProps {
  mt?: number;
  fontSize?: number;
  color?: string;
}

const StyledLink = styled(Link)<LinkProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : `12px`)};
  line-height: 15px;
  color: #293744;
  text-decoration: none;
  margin-top: ${({ mt }) => mt}px;

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
