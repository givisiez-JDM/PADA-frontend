
import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif; 
`

export const Section = styled.section`
    display: flex;
    width: 100%;
    padding: 3rem 4rem ;
    flex-direction: column;
    gap: 2rem; 
`

export const Middle = styled.div`
    display: flex;
    height: 100%;
`

export const Title = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 2rem;
    border-bottom: 3px solid #F5F5F5;  
`

export const ArticleName = styled.div`
    h1{
        padding-bottom: 0.6rem;
        font-weight: 600;
    }  
`

export const ArticleContact = styled.div`
   display: flex;
   flex-direction: column;
   
   div{
        display: flex;
        gap: 0 5rem;
   }
   
    h1{
        padding-bottom: 1rem;
        font-weight: 600;
    }
`

export const ArticleEmail = styled.article`
    p {
        font-weight: 400;
    }

    h1 {
        font-weight: 600;
    }
`

export const Tel = styled.div`
    display: flex;
    flex-direction: column;
    
    h1 {
        font-weight: 600;
    }
    
    p {
        font-weight: 400;
    }
`

export const Born = styled.div`
    h1{
        font-weight: 600;
        padding-bottom: 1rem;
    } 
`

export const Alergis = styled.div`
    h1 {
        margin-bottom: 1.5rem;
        font-weight: 600;

        &::before {
            content: '|';
            color: #4C7ABB ;
            border-radius: 1rem;
            margin-right: 0.7rem;
            background-color: #4C7ABB;
        }

        img {
            transform: rotate(180deg);    
        }
    }

    p {
        display: flex;
        margin-bottom: 0.5rem;
    } 
`

export const TreatmentContainer = styled.div `
    display: flex;
    gap: 2rem;
`

export const TitleTreatment = styled.h1 `
    padding-bottom: 0.4rem;
    font-weight: 600;

    &::before {
        content: '|';
        color: #4C7ABB;
        border-radius: 1rem;
        margin-right: 0.7rem;
        background-color: #4C7ABB;
    }

    img {
        transform: rotate(180deg);
    }    
`

export const Treatment = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p{
        padding-bottom: 0.5rem;  
    }
`

export const TreatmentDuration = styled.div `
    h1{
        padding-bottom: 1rem;
        font-weight: 600;
    }
`

export const Medication = styled.div `
    h1{
        padding-bottom: 1rem;
        font-weight: 600;
    }
`

export const MethodTreatment = styled.div `
    h1{
        padding-bottom: 1rem;
        font-weight: 600;
    }
`

export const Button = styled.button `
    position: absolute;
    right: 2rem;
    bottom: 1rem;
    background-color: #4C7ABB;
    color: white;
    border: none;
    border-radius: 16px;
    padding: 0.5rem 2rem;
    font-weight: 500;

    &:hover {
        color: black;
        transition: 0.3s ease-in-out;
    }
   
`
