import styled from "styled-components";

export const FaseContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #334c76;
  max-width: 25vw;
  margin-top: 2vh;
  margin-left: 5vw;
  padding-bottom: 1rem;

 .faseOne{
  border-left:4px solid ${(props) => props.theme['variant-2']} ;
  border-radius: 2px;
  padding-left: 0.875rem;
  margin-bottom: 1.1rem;
 }
`;

export const ConteinerTreatment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #334c76;
  margin-bottom: 2rem;
`;

export const PeriodicidadeTratamento = styled.div`


`;

export const DosagemMedicamento = styled.div`

`;

export const Title = styled.h3`
font-family: sans-serif;
font-weight: bold;
font-size: 1.125rem;
color: ${(props) => props.theme['keyboard']};
margin-top: 1rem;
margin-bottom: 1rem;

`;

export const Inativa = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

export const ConteinerCheckBox = styled.div`
 
 display: grid;
 grid-template-columns: 1fr 1fr;
 margin-top: 1rem;
 gap: 0.563rem;

`

export const ButtonLocal = styled.div`
position: relative;
left: 50rem;
width: 12rem;

`