import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

const COLOR = {
    primary: css`
      color: #FFFFFF;
      background-color: #76A7ED;
      border: 2px solid #4C7ABB;
    `,
    secondary: css`
      color: #76A7ED;
      background-color: #FFFFFF;
      border: 2px solid #4C7ABB;
    `,
  };

  const DISABLED = css`
  cursor: not-allowed;
  color: #4C7ABB;
  background: #BBBBBB;
`;

  export const Container = styled.button<ButtonProps>`
  width: 15rem;
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
`;