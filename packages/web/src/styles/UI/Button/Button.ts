import { styled } from "../../Theme/Theme";

interface ButtonProps {
    width?: number;
    height?: number;
    fontSize?: number;
    fontWeight?: number;
    backgroundColor?: string;
    gridRow?: string;
    gridColumn?: string;
    gridRow850?: string;
    gridColumn850?: string;
}

const Button = styled.button<ButtonProps>`
    width: ${props => props.width || 180}px;
    height: ${props => props.height || 50}px;
    font-family: ${props => props.theme.font.fontFamily};
    font-size: ${props => props.fontSize || 1}rem;
    font-weight: ${props => props.fontWeight || 400}rem;
    border: none;
    border-radius: 5px;
    background-color: #${props => props.backgroundColor || "fe0000"};
    color: #${props => props.color || "FFFFFF"};
    cursor: pointer;
    grid-row: ${props => props.gridRow};
    grid-column: ${props => props.gridColumn};

    @media screen and (min-width: 850px) {
        grid-row: ${props => props.gridRow850};
        grid-column: ${props => props.gridColumn850};
    }
`;

export default Button;
