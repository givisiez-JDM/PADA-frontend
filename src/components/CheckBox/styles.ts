import styled from "styled-components";


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
  background-image: url('../../../src/assets/Vector.svg');
  background-position: center;
 
}
`