import { styled } from "../../Theme/Theme";

interface LabelProps {
    color?: string;
    fontWeight?: number;
    fontSize?: number;
}

const Label = styled.label<LabelProps>`
    align-self: start;
    color: ${props => props.color || "#737373"};
    font-family: ${props => props.theme.font.fontFamily};
    font-weight: ${props => props.fontWeight || 500};
    font-size: ${props => props.fontSize || 1}rem;
    cursor: pointer;
`;

export default Label;
