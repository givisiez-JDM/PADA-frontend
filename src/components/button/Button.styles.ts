import styled from "styled-components";

export const ButtonBase = styled.button`
  background-color: ${(props) => props.theme.colors.variant2};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 6.5rem;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    transition: 0.3s ease-in-out;
    color: ${(props) => props.theme.colors.variant4};
    scale: 1.05;
  }

  &:disabled {
    background: ${(props) => props.theme.colors.buttonOff};
    :hover {
      transition: none;
      scale: none;
    }
  }

  &.small {
    padding: 0.12rem 1.12rem;
    font-size: 0.8rem;
  }
`;

