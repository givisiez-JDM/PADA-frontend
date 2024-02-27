import { Link } from "react-router-dom"
import styled from "styled-components"


export const PatientData = styled.div`
    display: flex;
    align-items: center;
`

export const Logo = styled.img `
    display: flex;
    margin-left: 2rem;
    margin-right: 2rem;
    height: 6rem;
    padding-top: 1rem ;
    padding-bottom: 1rem;
    border: 1px solid white;
`

export const Close = styled(Link)`
    width: 1,12rem;
    margin: auto 0;
`

export const IconX = styled.img `
    cursor: pointer;
`



