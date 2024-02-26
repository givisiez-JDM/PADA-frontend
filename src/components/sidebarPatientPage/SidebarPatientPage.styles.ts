import styled from "styled-components"
import { Link } from "react-router-dom"


export const SideBar = styled.div`
    width: 15vw;
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