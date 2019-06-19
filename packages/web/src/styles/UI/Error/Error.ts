import { styled } from "../../Theme/Theme";

const Error = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.error.bgColor};
    border: ${props => props.theme.error.border};
    border-radius: ${props => props.theme.error.borderRadius};
`;

export default Error;
