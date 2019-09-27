import { styled } from "../../system/theme";

export const StyledLogin = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 346px;
  max-height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, minmax(min-content, max-content));
  grid-row-gap: 20px;
`;

export const MuTitle = styled.h1`
  color: ${({ theme }) => theme.color.primary};
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  font-size: calc(40px + (42 - 40) * ((100vw - 300px) / (1600 - 300)));
  align-self: center;
  justify-self: center;
`;

export const SubTextContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 270px;
  align-self: center;
  justify-self: center;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-center;
`;

export const SubText = styled.h3`
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-size: calc(12px + (14 - 12) * ((100vw - 300px) / (1600 - 300)));
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  line-height: 15px;
  color: ${({ theme }) => theme.color.primary};
`;

export const LoginWithText = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #c4c4c4;
  text-transform: uppercase;
  margin-top: 20px;
`;
