import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  padding: 3rem 4rem;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 2rem;
  border-bottom: 3px solid ${(props) => props.theme.colors.separation};
`;

export const PhaseBlock = styled.section`
  width: 100%;
  padding: 0 1rem;
`;

export const PhaseTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 0;
  cursor: pointer;

  &::before {
    content: ".";
    color: ${(props) => props.theme.colors.variant2};
    border-radius: 1rem;
    margin-right: 0.9rem;
    background-color: ${(props) => props.theme.colors.variant2};
  }

  img {
    margin-left: 1rem;
    width: 0.5rem;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  gap: 5rem;
  margin-top: 1.5rem;

  &.centered {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
