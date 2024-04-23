import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.white};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.variant2};
  width: 100%;
  padding: 1rem 3.5rem;
  border-radius: 0 0 1rem 1rem;
`;

export const HeaderTitle = styled.h1`
  font-weight: 900;
  font-size: 2rem;
  color: ${props => props.theme.colors.white};
`;

export const Close = styled.img`
  width: 1, 12rem;
  margin: 2rem;
  cursor: pointer;
`;

export const PhaseForm = styled.form`
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  align-items: start;
  padding: 2rem;
  color: ${props => props.theme.colors.variant3};
`;

export const PhaseTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${props => props.theme.colors.keyboard};

  &::before {
    content: ".";
    color: ${props => props.theme.colors.variant2};
    border-radius: 1rem;
    margin-right: 0.9rem;
    background-color: ${props => props.theme.colors.variant2};
  }
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
  width: 12rem;
  border-radius: 1rem;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.colors.variant3};
  color: ${props => props.theme.colors.variant3};
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

export const Error = styled.span`
  color: ${props => props.theme.colors.error};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
  padding: 0 3rem;
  width: 100%;
`;
