import { Link } from "react-router-dom"
import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const PatientData = styled.div`
    display: flex;
    align-items: center;
`
export const Picture = styled.img`
    background-color: ${props => props.theme.colors.variant1};
    height: 6rem;
    width: 6rem;
    margin: 1rem;
    box-shadow:  3px 3px 3px rgba(0,0,0,0.5);
    border-radius: 3rem;
`
export const Close = styled(Link)`
    width: 1,12rem;
    margin: auto 0;

    img {
        width: 100%;
    }
`

export const Content = styled.section`
    display: flex;
    height: 100%;
`

export const SideBar = styled.div`
    width: 15%;
    min-width: 130px;
    border-right: 2px solid ${props => props.theme.colors.buttonOff};
`
export const Menu = styled.ul`
    padding: 5rem 0;
`

export const MenuItem = styled(Link)`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem; 
    font-weight: 700; 

    &:hover {
        background-color: ${props => props.theme.colors.variant2};
        color: ${props => props.theme.colors.white};
    }
`