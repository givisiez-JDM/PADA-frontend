import styled from "styled-components";

export const PhaseTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  padding-bottom: 1rem;

  &::before {
    content: ".";
    color: #4c7abb;
    border-radius: 1rem;
    margin-right: 0.9rem;
    background-color: #4c7abb;
  }
`;

export const PhaseField = styled.div`
  padding: 0.5rem 0;
`;

export const PhaseSubtitle = styled.div`
  padding-bottom: 1.2rem;
  font-weight: 600;
`;

export const PhaseContent = styled.div`
  padding-bottom: 1rem;
`;
