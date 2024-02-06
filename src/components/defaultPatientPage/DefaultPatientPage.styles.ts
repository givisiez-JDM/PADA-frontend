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
    display: flex;
    height: 6rem;
    margin: 1rem;
    box-shadow: 0 4 ;
`
export const Close = styled.a`
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

export const MenuItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem; 
    font-weight: 700; 

    &:hover {
        background-color: ${props => props.theme.colors.variant2};
        color: ${props => props.theme.colors.white};
    }
`