import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

const COLOR = {
  primary: css`
    color: #ffffff;
    background-color: #76a7ed;
    border: 2px solid #4c7abb;
  `,
  secondary: css`
    color: #76a7ed;
    background-color: #ffffff;
    border: 2px solid #4c7abb;
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  color: #4c7abb;
  background: #bbbbbb;
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

  &:hover {
    color: #ffffff;
    background: #334c76;
    transition: 0.3s;
  }
`;
