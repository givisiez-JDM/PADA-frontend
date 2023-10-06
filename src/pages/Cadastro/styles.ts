import styled from "styled-components";


export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    font-family: 'Poppins', sans-serif;

`

export const TopWave = styled.div `
    height: 33vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transform: rotate(180deg);
    background-repeat: no-repeat;
    background-size:cover;
`

export const BottomWave = styled.div`
    height: 33vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-repeat: no-repeat;
    background-size:cover;

`

export const Title = styled.h1`
    display: flex;
    position: relative;
    bottom: 1.5rem;
    color: #4C7ABB;
`

export const Box = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem 0;
    min-height: 18rem;
    width: 23rem;
    border: 3px solid #4C7ABB;
    border-radius: 6px;
` 


export const Checkbox = styled.p `
    display: flex;
    align-items: center;
    width: 13.5rem;
    font-size: 0.8rem;
`

export const ButtonSignup = styled.button `
    background-color: #4C7ABB;
    color: white;
    border: none;
    border-radius: 15px;
    width: 13rem;
    height: 2rem;
    font-weight: 500;
`

export const FooterDescription = styled.p `
    display: flex;
    position: relative;
    top: 1.2rem;
    font-size: small;
    font-weight: 500;
    z-index: 1000;
    cursor: pointer;
    
    span {
        text-indent: 2px;
        color: #4C7ABB;
        
    }
`

export const ErrorMessage = styled.p `
    display: flex;
    color: red;
    font-size: x-small;
    font-weight: 500;
    position: relative;
    right: 4rem;
`
