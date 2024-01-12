import styled from "styled-components"


export const Main = styled.main`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    
`

export const Header = styled.header`
    display: flex;
    padding: 0 6rem;
    height: 5rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: #4C7ABB;
`
export const Picture = styled.img`
    display: flex;
    height: 6rem;
    padding: 1rem 0;
`

export const UserMenu = styled.button`
    background: none;
    border: none;
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