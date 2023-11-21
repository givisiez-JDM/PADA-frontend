import styled from "styled-components"


export const Main = styled.main`
    display: flex;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    flex-direction: column;
`
export const Header = styled.header`
    display: flex;
    width: 100%;
    background-color: red;
    align-items: center;
    justify-content: space-between;
    background-color: #4C7ABB;
`
export const Logo = styled.img`
    display: flex;
    margin-left: 6rem;
    height: 6rem;
    padding-top: 1rem ;
    padding-bottom: 1rem;
`
export const SectionDoctor = styled.div`
    display: flex;
    margin-right: 6rem;
    color: white;
    font-size: larger;
    

    img {
       margin-left: 1rem;
       height: 1.3rem;
       width: 0.6rem;
       cursor: pointer;
    }
`

export const BoxAddPacient = styled.section`
    place-self: flex-end;
`

export const Button = styled.button`
    background-color: #76A7ED;
    color: black;
    border: none;
    border-radius: 20px;
    width: 10rem;
    height: 2rem;
    font-weight: 500;
    
`
export const PacientList = styled.div`
    height: 30rem;
    width: 12rem;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    

    h1{
        font-size: large;
        position: absolute;
        background-color: white;
        width: 11rem;
        height: 2rem;
    }

    &::-webkit-scrollbar  {
        width: 5px;
        border-radius: 5px;

    }

    &::-webkit-scrollbar-thumb {
        background-color: #d1d1d1;

        &:hover {
            background-color: #b1b1b1;
        }
    }
    
`

export const TitlePacient = styled.ul`
    padding-top: 3rem;
    li{
        margin-bottom: 1.2rem;
        font-weight: 500;
        cursor: pointer;

        &::before {
            content: '|';
            color: #4C7ABB ;
            border-radius: 1rem;
            margin-right: 0.9rem;
            background-color: #4C7ABB;
            
        }
    }
     
    
`

export const Middle = styled.section`
   display: flex;
   flex-direction: column;
   gap: 5rem;
   padding: 1.5rem 5rem;
`
