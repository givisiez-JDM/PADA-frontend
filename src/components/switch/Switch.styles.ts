import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 2rem;
  height: 1rem;
  background: ${(props) => props.theme.colors.background};
  border-radius: 1rem;
  padding: 0.1rem;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 1rem;
    top: 50%;
    left: 0.1rem;
    background: ${(props) => props.theme.colors.white};
    transform: translate(0, -50%);
  }
`;

export const Checkbox = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: ${(props) => props.theme.colors.variant1};

    &:before {
      transform: translate(1rem, -50%);
    }
  }
`;
