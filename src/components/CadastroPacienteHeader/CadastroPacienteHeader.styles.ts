import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: 10vh;
  width: 100vw;
  padding: 1rem;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  background: rgb(76, 122, 187);
  color: #ffffff;
`;

export const HeaderLogo = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: darkgrey;
  color: #000;
  border-radius: 5px;
  font-weight: 600;
`;

export const HeaderTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const HeaderGreeting = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;
