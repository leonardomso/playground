import styled, { css } from "styled-components";

interface InputProps {
	width?: number | string;
  height?: number;
	maxWidth?: number;
	maxHeight?: number;
	marginLeft?: number;
	onError?: any;
}

const StyledInput = styled.input<InputProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || 42}px;
  max-width: ${({ maxWidth }) => maxWidth || 346}px;
  max-height: ${({ maxHeight }) => maxHeight || 42}px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #4E4E4E;
  text-indent: 20px;
  background: rgba(196, 196, 196, 0.05);
  border: none;
  border-radius: 6px;

	&:hover {
		border: 0.5px solid rgba(196, 196, 196, 0.09);
	}

	::-webkit-input-placeholder { /* Edge */
		font-weight: 400;
		color: #d8dde6;color: #C4C4C4;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
	}
	
	:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #C4C4C4;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
	}
	
	::placeholder {
    color: #C4C4C4;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }
  
  ${({ onError }) => onError && 
		css`
      background: rgba(196, 196, 196, 0.05);
      border: 0.5px solid #F4333D;
      box-sizing: border-box;
      border-radius: 6px;

			&:hover {
				background: rgba(196, 196, 196, 0.05);
        border: 0.5px solid #F4333D;
        box-sizing: border-box;
        border-radius: 6px;
			}
		`};
`;

export default StyledInput;
