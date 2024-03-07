
import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    height: 100vh;
`
export const Middle = styled.div `
    display: flex;
    height: 100%;   
    width: 100%;   
`

export const Nav = styled.nav `
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
    gap: 1rem;
    border-right: 2.5px solid #B4B4B4;
    font-weight: 500;
    cursor: pointer;
    
    p {
        display: flex;
        justify-content: space-between;
        width: 6rem;
    } 
`

export const Section = styled.section`
    display: flex;
    width: 100%;
    padding: 3rem 4rem;
    flex-direction: column;
    gap: 2rem; 
`

export const Title = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 2rem;
    border-bottom: 3px solid #F5F5F5; 
`

export const SubTitle = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
    padding-bottom: 1rem;
    
    &::before {
        content: '.';
        color: #4C7ABB;
        border-radius: 1rem;
        margin-right: 0.9rem;
        background-color: #4C7ABB;        
    } 
`

export const TreatmentDuration = styled.div `
    height: 5.5rem;

    h1{
        padding-bottom: 1.2rem;
        font-weight: 600;
    }

    p {
        padding-bottom: 1rem;
    }
`

export const Frequency = styled.div `
    h1{
        padding-bottom: 1.2rem;
        font-weight: 600;
    }
`

export const Dosage = styled.div `
    h1{
        padding-bottom: 1.2rem;
        font-weight: 600;
    }
`

export const FaseProgress = styled.div `
    height: 10rem;
    width: 16rem;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.2);
    
    h1{
        padding-bottom: 1.2rem;
        font-weight: 600;
    }
     
    p {
        padding-bottom: 2px;
    }

    input {
        width: 13rem;  
    }  
`

export const ChangeButtom = styled.button `
    background-color: #76A7ED;
    color: black;
    border: none;
    border-radius: 20px;
    width: 9rem;
    height: 2rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-left: 2rem;
    color: white;

    &:hover {
        color: black;
        transition: 0.3s ease-in-out;
    }       
`   

export const BoxButton = styled.div `
    display: flex;
    gap: 5rem;
    margin-top: 1.5rem;       
`

export const FinalButton = styled.button `
    height: 3rem;
    width: 10rem;
    background-color: #B4B4B4;
    color: black;
    border: none;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9rem;
    color: white;

    &:hover {
        color: black;
        transition: 0.3s ease-in-out;
    }
`

export const AddButton = styled.button `
    height: 3rem;
    width: 10rem;
    background-color: #76A7ED;
    color: black;
    border: none;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9rem;
    color: white;

    &:hover {
        color: black;
        transition: 0.3s ease-in-out;
    }
`

