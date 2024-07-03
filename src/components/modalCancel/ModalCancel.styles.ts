import styled from 'styled-components';
import Button from '../../components/button/Button';

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
  padding: 2.6rem 2.875rem;
  height: 23.25rem;
  width: 25rem;
  background-color: ${props => props.theme.colors.variant1};
  color: ${props => props.theme.colors.variant3};
  border-radius: 3.13rem;
  gap: 4.1875rem;
`;

export const Close = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  margin-left: auto;
  cursor: pointer;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  align-self: center;
  width: 14.75rem;
  height: 7.5rem;
  h2 {
    text-align: center;
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.62875rem;
    text-align: center;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// Definindo estilos adicionais para o StyledButton
export const StyledButton = styled(Button)`
  height: 2.5rem;
  width: 6.4375rem;
  border-radius: 3.125rem;
  border: 2px solid transparent;
`;
