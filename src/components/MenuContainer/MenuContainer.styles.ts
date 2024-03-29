import styled from "styled-components";

export const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 20px;
  width: 80vw;
  height: 50vh;
  margin: 2rem auto;
`;

export const SearchbarDiv = styled.div`
  grid-area: 1 / 1;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: start;
`;
