import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 15rem;
  padding: 1rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
`;

export const Title = styled.p`
  width: 100%;
  font-weight: 700;
  font-size: 0.8rem;
`;

export const ProgressContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 0.6rem;
`;
