import styled from "styled-components";

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  width: 80vw;
  height: 70vh;
  padding: 3rem 0;
  margin: 1rem 0;
  color: #334c76;
`;

export const DivRowOne = styled.div`
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(76, 122, 187, 0.1);
  grid-area: 1 / 1 / 2 / 2;

  p {
    font-weight: 600;
    margin-top: 1rem;
  }
`;

export const DivRowTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  width: 20vw;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(76, 122, 187, 0.1);
  grid-area: 1 / 2 / 2 / 3;
`;

export const DivRowThree = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  gap: 1.5rem;
  height: 35vh;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  border-radius: 10px;
  background: rgba(76, 122, 187, 0.1);
  grid-area: 2 / 1 / 3 / 2;
`;

export const DivRowFour = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  grid-area: 2 / 2 / 3 / 3;
`;

export const DivRowFive = styled.div`
  justify-self: end;
  grid-area: 3 / 1 / 4 / 3;
`;

export const DivRowSix = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1.5rem;
  height: 30vh;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(76, 122, 187, 0.1);
  grid-area: 4 / 2 / 5 / 3;
`;

export const DivRowSeven = styled.div`
  justify-self: end;
  grid-area: 5 / 1 / 6 / 3;
`;

export const GridTitle = styled.div`
  grid-area: 1 / 1 / 2 / 3;
`;

export const GridSecondTitle = styled.div`
  grid-area: 3 / 1 / 3 / 3;
`;
