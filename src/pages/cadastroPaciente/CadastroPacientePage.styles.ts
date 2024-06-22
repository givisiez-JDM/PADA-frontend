import styled from 'styled-components';
import Button from '../../components/button/Button';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  gap: 1rem 0;
`;

export const FirstBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem 0;
  font-weight: 500;
`;

export const SecondBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  padding-top: 1.7rem;
`;

export const TreatmentDuration = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
  font-weight: 500;
`;

export const Medication = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
  font-weight: 700;
`;

export const TreatmentMethod = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;

  div {
    display: flex;
    align-items: center;
    gap: 0 1rem;

    div {
      gap: 0;
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10rem;
`;

export const AllergiesContainer = styled.div`
  display: flex;
  gap: 0.5rem 0;
  align-items: flex-end;
  justify-content: space-between;
`;

export const AllergiesBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
`;

export const Allergies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 3rem;
  flex-wrap: wrap;
  height: 10rem;
  width: auto;
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 3.5rem;
    width: 4rem;
  }

  h1 {
    margin-left: 1rem;
    font-size: 1.3rem;
  }
`;

export const RigthBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 13rem;
  cursor: pointer;
  margin-right: 3rem;
`;

export const BoxButton = styled.div`
  margin-right: 9.7rem;
  display: flex;
  justify-content: right;
  }
`;

export const StyledButton = styled(Button)`
  margin-right: 2rem;

  &.WhiteButton {
    background-color: #ffffff;
    color: #383838;
    border: 1px solid #383838;
  }

  &:hover {
    background-color: ${props => props.theme.colors.variant3};
    transition: 0.3s;
  }
`;
