import Switch from "@mui/material/Switch";
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
   
    h1{
  font-size: 35px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${(props) => props.theme['white']};
  }
`;




export const SectionDoctor = styled.div`
    display: flex;
    margin-right: 6rem;
    color: white;
    font-size: larger;
    align-items: center;
    justify-content: end;
    padding-right: 2rem;
    

    img {
       margin-left: 1rem;
       height: 1.3rem;
       width: 0.6rem;
       cursor: pointer;
    }
`


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
  margin-bottom: 1rem;
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
export const ContainerCheckbox = styled.div`
 
 .checkbox {
  display: none;
}
.checkbox + label:before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 3px;
  margin-right: 5px;
  border: 2px solid black;
  margin-bottom: -2px;
  background: ${(props) => props.theme['Button-off']}
}


.custom-checkbox input:checked + label:before{
  background-image: url('../../../src/assets/Vector.png');
  background-position: center;
  }
`

export const ButtonLocal = styled.div`
margin-top: 40px;

`

export const TextInputTime = styled.input`
  background-color: #f5f5f5;
  border-radius: 15px;
  padding: 10px 10px;
  border: 1px solid #334c76;
  color: #334C76;

`

export const SwitchContainer = styled.div`

margin-top: 40px;
`
