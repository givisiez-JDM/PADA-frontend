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

export const Box = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem 0;
    min-height: 14rem;
    width: 25rem;
    border: 3px solid #4C7ABB;
    border-radius: 6px;
` 

export const InputLogin = styled.input `
    height: 2.2rem;
    width: 13rem;
    border-radius: 1rem;
    border: 2px solid #4C7ABB ;
    padding-left: 3.5rem;
    background-repeat: no-repeat;
    background-size: 1.5rem;
    background-position: 1rem;
`

export const Checkbox = styled.p `
    display: flex;
    align-items: center;
    width: 13rem;
    font-size: 0.8rem;
`

export const ButtonLogin = styled.button `
    background-color: #4C7ABB;
    color: white;
    border: none;
    border-radius: 15px;
    width: 13rem;
    height: 2rem;
    font-weight: 500;
`

export const ForgotPassword = styled.p `
    position: relative;
    top: 1rem;
    font-size: small;
    font-weight: 500;

    span {
        color: #4C7ABB;
        cursor: pointer;
    }
`
export const IncorrectUser = styled.p `
    text-indent:-3.3rem;
    color: red;
    font-size: x-small;
    font-weight: 500;
    word-wrap: break-word;
    max-width: 12rem;
`
