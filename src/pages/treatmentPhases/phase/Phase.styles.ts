import styled from "styled-components";

export const PhaseField = styled.div`
  padding: 0.5rem 0;
`;

export const PhaseSubtitle = styled.div`
  padding-bottom: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.keyboard};
`;

export const PhaseContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-bottom: 1rem;
  color: ${(props) => props.theme.colors.keyboard};
`;
