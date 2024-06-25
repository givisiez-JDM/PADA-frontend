import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 3rem 4rem;
  flex-direction: column;
`;

export const PhaseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 3px solid ${props => props.theme.colors.separation};
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.colors.keyboard};
`;

export const PhaseBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.buttonOff};
  margin: 1rem 0;
`;

export const PhaseTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.keyboard};

  &.active {
    color: ${props => props.theme.colors.variant2};
    border-bottom: 4px solid ${props => props.theme.colors.variant2};
  }
`;

export const PhaseText = styled.p`
  color: ${props => props.theme.colors.variant4};
  font-weight: 600;
  line-height: 1.5rem;

  span {
    color: ${props => props.theme.colors.variant2};
  }
`;

export const PhaseEmpty = styled.div`
  padding: 2rem 1rem;
  height: 100%;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
