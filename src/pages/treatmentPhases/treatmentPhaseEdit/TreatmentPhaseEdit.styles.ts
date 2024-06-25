import styled from 'styled-components';

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PhaseField = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 1.12rem;
  color: ${props => props.theme.colors.keyboard};
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const DateInput = styled.input`
  background-color: ${props => props.theme.colors.background};
  width: 11rem;
  border-radius: 1rem;
  padding: 0.2rem 1rem;
  border: 1px solid ${props => props.theme.colors.variant3};
  color: ${props => props.theme.colors.variant3};
  font-size: 1rem;
`;

export const CheckBoxContainer = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
  gap: 0.563rem;
`;

export const PhaseStatus = styled.div`
  width: 8rem;
  font-size: 1.12rem;
  font-weight: 700;
  color: ${props => props.theme.colors.keyboard};
`;

export const Error = styled.div`
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.error};
  border: 1px solid ${props => props.theme.colors.error};
  border-radius: 0.5rem;
  padding: 0.2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
  padding: 0 3rem;
  width: 100%;
`;
