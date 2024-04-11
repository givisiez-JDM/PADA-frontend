import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: brightness(0.7);
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2.6rem 3.8rem;
  height: 38rem;
  width: 32rem;
  background-color: ${(props) => props.theme.colors.variant1};
  color: ${(props) => props.theme.colors.variant3};
  border-radius: 3.13rem;
  gap: 1.5rem;
`;

export const Close = styled.img`
  width: 1.2rem;
  margin-left: auto;
  cursor: pointer;
`;

export const PhaseField = styled.div`
  display: flex;
  flex-direction: column;

  p {
    padding: 0.1rem 0.6rem;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.13rem;
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.keyboard};
`;

export const DateInput = styled.input`
  background-color: ${(props) => props.theme.colors.background};
  width: 10rem;
  height: 2rem;
  border-radius: 1rem;
  padding: 0 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.variant3};
  color: ${(props) => props.theme.colors.variant3};
`;

export const ContainerCheckBox = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 0.6rem;
  gap: 0.5rem 1rem;

  .checkbox + label:before {
    background: ${(props) => props.theme.colors.background};
  }
`;

export const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const Error = styled.div`
  width: 100%;
  font-size: 0.8rem;
  text-align: center;
  color: ${(props) => props.theme.colors.error};
`;
