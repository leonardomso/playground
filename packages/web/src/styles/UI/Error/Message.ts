import { styled } from "../../Theme/Theme";

interface MessageProps {
    fontSize?: number;
    fontWeight?: number;
    backgroundColor?: string;
}

const Message = styled.div<MessageProps>`
    color: ${props => props.theme.error.color};
    font-family: ${props => props.theme.font.fontFamily};
    font-size: ${props => props.fontSize || 0.8}rem;
    font-weight: ${props => props.fontWeight || 400}rem;
`;

export default Message;
