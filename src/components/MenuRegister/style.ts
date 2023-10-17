import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  width: 100vw;
  padding: 2rem;
  top: 0;
  left: 0;
  z-index: 1;
  background: #4c7abb;
  color: #ffffff;
  border-radius: 0 0 20px 20px;
`;

export const InfoMedicoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 2rem;
`;

export const HeaderImage = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
align-items: center;

  h1{
  font-size: 2.188rem;
  font-weight: bold;
  font-family: sans-serif;
  color: ${(props) => props.theme['white']};
  }
`;

export const HeaderGreeting = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: sans-serif;
  color: ${(props) => props.theme['white']};
  margin-left: 1rem;
`;


export const Avatar1 = styled.div`
  height: 46px;
  width: 46px;
  background: gray;
  border-radius: 50px;
  filter: drop-shadow(black 4px 4px 4px);
 
`

export const AvatarButton = styled.button`
width: 30px;
height: 30px;
fill: #EFECE8;
border-radius: 50px;
border: none;
color: #D1D1D1;
font-family: Noto Sans KR;
font-size: 35px;
font-style: normal;
font-weight: 900;
line-height: normal;

`