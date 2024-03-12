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
    color: ${props => props.theme.colors.variant2};
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


export const InputBox = styled.div `
    display: flex;
    position: relative;
`

export const I = styled.img `
    position: absolute;
    height: 1.2rem;
    top: 0.5rem;
    left: 0.6rem ;
    box-sizing: border-box;
`

export const Checkbox = styled.p `
    display: flex;
    align-items: center;
    width: 13.5rem;
    font-size: 0.8rem;
`

export const ButtonSignup = styled.button `
    background-color: ${props => props.theme.colors.variant2};
    color: white;
    border: none;
    border-radius: 15px;
    width: 13rem;
    height: 2rem;
    font-weight: 500;
    font-size: 0.9rem;
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
        color: ${props => props.theme.colors.variant2};    
    }
`

export const ErrorMessage = styled.p `
    text-indent:-6.4rem;
    color: red;
    font-size: x-small;
    font-weight: 500;
    word-wrap: break-word;
    max-width: 12rem;
`
export const Sucess = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    img {
        height: 8rem;
    }

    h1 {
        font-size: 1.2rem;
        color: ${props => props.theme.colors.variant2};
    }

    button {
        background-color: ${props => props.theme.colors.variant2};
        color: white;
        border: none;
        border-radius: 15px;
        width: 8rem;
        font-weight: 500;
        font-size: 1rem;
        height: 2rem;
    }
`