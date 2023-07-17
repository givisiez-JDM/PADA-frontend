import styled from "styled-components";

export const FaseContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #334c76;
  max-width: 30vw;
  margin-top: 2vh;
  margin-left: 5vw;
  padding-bottom: 1rem;
`;

export const DuracaoTratamento = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem
  color: #334c76;
  margin-bottom: 2rem;
`;

export const PeriodicidadeTratamento = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1vh;
  grid-row-gap: 1vw;
  margin-bottom: 2rem;
`;

export const DosagemMedicamento = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1vw;
  grid-row-gap: 1vh;
  margin-bottom: 2rem;
`;

export const DivTitle = styled.div`
  grid-area: 1 / 1 / 2 / 3;
`;

export const Inativa = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;
