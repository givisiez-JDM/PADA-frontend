
import styled from "styled-components"


export const Modal = styled.div `
    display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 115%;
	position: absolute;
	top: 0;
	left: 0;
	backdrop-filter: brightness(0.7);
	z-index: 2;
    font-family: 'Poppins', sans-serif;
`

export const ModalBox = styled.div `
    display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	height: 31rem;
	width: 26rem;
	background-color: #76A7ED;
	border-radius: 10px;
	gap: 2rem 0;
`


export const ModalContent = styled.div `
    display: flex;
	flex-direction: column;
	gap: 1rem 0;
    
`

export const TreatmentDuration = styled.div `
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1{
        padding-bottom: 0.6rem;
        font-weight: 600;
    }

   input {
        width: 8rem;
        height: 1.8rem;
        border-radius: 6px;
        border: 1px solid gray;
        
   }

   div {
    display: flex;
    justify-content: end;
   }

   img {
        height: 1rem;
        cursor: pointer;
   }
`

export const FrequencyBox = styled.div `  
   display: flex;
   flex-wrap: wrap;
   width: 22rem;
   justify-content: space-between;
   gap: 0.5rem;

    div { 
        display: flex;
        align-items: center;
    }
`

export const Frequency = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
    
    h1 {
        font-weight: 600;
    }
   
`
export const Dosage = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
    
    h1 {
        font-weight: 600;
    }
   
`
export const DosageBox = styled.div `
   display: flex;
   flex-wrap: wrap;
   max-width: 11rem;
   justify-content: space-between;
   
   gap: 0.5rem;
   
    div { 
        display: flex;
        align-items: center;
    }
   
`


export const MdButton = styled.button `
    height: 3rem;
    width: 15rem;
    background-color:  #4C7ABB;
    color: black;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.9rem;
    color: white;

`

export const BoxButton = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`


