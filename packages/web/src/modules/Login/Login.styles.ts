import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const LoginInsideContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 100%;
  box-shadow: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(min-content, max-content));
  grid-row-gap: 35px;
  margin-top: 30px;
  padding: 30px;
  @media screen and (min-width: 800px) {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
`;

export const LoginTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #293744;
  text-align: center;
  align-self: center;
  justify-self: center;
`;

export const LoginTextContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  align-self: center;
  justify-self: center;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-center;
`;

export const LoginText = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #4e4e4e;
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

export const ErrorText = styled.h3`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  color: #293744;
  text-align: center;
  align-self: center;
  justify-self: center;
  margin-top: 25px;
`;
