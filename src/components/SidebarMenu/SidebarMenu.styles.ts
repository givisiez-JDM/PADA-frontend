import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 80vh;
  width: 20vw;
  left: 0;
  margin-top: 2vh;
  padding-left: 2rem;
  padding-top: 10vh;
  position: fixed;
`;

export const StyledList = styled.ul`
  margin-top: 2vh;
`;

export const StyledListItem = styled.li`
  list-style: none;
  font-size: 1.2rem;
  border-left: 4px solid #4c7abb;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
`;
