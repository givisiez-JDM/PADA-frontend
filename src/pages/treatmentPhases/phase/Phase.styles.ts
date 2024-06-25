import styled from 'styled-components';
import Button from '../../../components/button/Button';

export const PhaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const ContentGroup = styled.div`
  color: ${props => props.theme.colors.keyboard};
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.buttonOff};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
`;

export const CardTitle = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid ${props => props.theme.colors.separation};
`;

export const CardContent = styled.div`
  display: flex;
  padding: 0.5rem;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  font-size: 1.2rem;

  :not(:last-child) {
    border-right: 2px solid ${props => props.theme.colors.separation};
  }
`;

export const ItemTitle = styled.p`
  color: ${props => props.theme.colors.variant4};
  font-weight: 500;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem 2.5rem;
`;

export const BackButton = styled(Button)`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.keyboard};
  border: 1px solid ${props => props.theme.colors.keyboard};
  margin-right: auto;
  justify-self: flex-start;
`;
