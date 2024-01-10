import styled from "styled-components";

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

export const Plusbutton = styled.button`
width: 22px;
  height: 22px;
  border: none ;
  border-radius:50%;
  background-color: #EFECE8;
 position:relative;
 top: -20px;
 left: 40px;
 display: flex;
 align-items: center;
 justify-content: center;
 


`


export const AvatarConatiner = styled.div`

     
`

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



export const ContentContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 7rem;

  width: 80vw;
  max-height: 120vh;
  padding: 1rem 3rem;
  margin: 1rem 0;
  color: #334c76;
  align-self: center;
  
`;

export const ContentRegister = styled.div`

display: flex;
flex-direction: column;

.ContentInput{
  display: flex;
  flex-direction: column;
}

.date{
  margin-top: 1rem;

}

label{
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props) => props.theme['Keyboard']};
  margin-bottom: 0.35rem;
  margin-top: 0.35rem;
}

`

export const TextInputTreatment = styled.input`
  background-color: #f5f5f5;
  border-radius: 15px;
  padding: 10px 10px;
  border: 1px solid #334c76;
  color: #334C76;

`


export const RegisterAlergis = styled.div`
display: flex;
flex-direction: column;

h2{
  color: ${(props) => props.theme['Keyboard']};
  margin-top: 1.25rem;

}

.inputCheckbox{
 display: grid;
 grid-template-columns: 1fr 1fr;
 margin-top: 1rem;

 
}

`

export const ContentTreatment = styled.div`
p{
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props) => props.theme['Keyboard']};
  margin-bottom: 0.35rem;
  margin-top: 0.35rem;
}

.duration{
  display: flex;
  flex-direction: column;
}


label{
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 1.125rem;
}
.labelTreatment{
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props) => props.theme['Keyboard']};
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.medication{
  height: 2rem!important;
  width: 16.313rem!important;
  margin-bottom: 1rem;
}
`

export const InputDate = styled.input`
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 10px 10px;
  border: 1px solid #334c76;
  color: #334c76;
  width: 12rem;

`;

export const ContainerCheckbox = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 margin-top: 1rem;
 gap:15px;

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

export const RegisterButton = styled.button`

width: 12rem;
height: 3.125rem;
border-radius: 50px;
border: none;
background: ${(props) => props.theme['variant-3']};
color:${(props) => props.theme['white']};
font-size: 1.2rem;
font-weight: 500;

display:flex;
justify-content: center;
align-items: center;

`

export const ConteinerCheckbox = styled.div`
display: grid;
 grid-template-columns: 1fr 1fr;
 margin-top: 1rem;


`

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


export const ConteinerButton = styled.div`
 display: flex;
justify-content: flex-end;
padding-right: 126px;
`