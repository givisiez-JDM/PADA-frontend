import styled from 'styled-components';

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

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.6rem 3.8rem;
  width: 32rem;
  background-color: ${props => props.theme.colors.variant1};
  color: ${props => props.theme.colors.variant3};
  border-radius: 3.13rem;
`;

export const Close = styled.img`
  width: 1.2rem;
  margin-left: auto;
  cursor: pointer;
`;
