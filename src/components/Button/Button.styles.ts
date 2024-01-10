
import styled from "styled-components";

<<<<<<< HEAD
export const ButtonLogin = styled.button `
    background-color: #4C7ABB;
    color: white;
    border: none;
    border-radius: 15px;
    width: 13rem;
    height: 2rem;
    font-weight: 500;
`
=======
const DISABLED = css`
  cursor: not-allowed;
  color: #4c7abb;
  background: #bbbbbb;
`;

export const Container = styled.button<ButtonProps>`
  width: 15rem;
  min-width: 10vh;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
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
>>>>>>> 5bfbb64a563db6b85e53492513b41285ca609d53
