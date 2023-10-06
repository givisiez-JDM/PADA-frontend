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

export const TopWave = styled.div`
    height: 33vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transform: rotate(180deg);
    background-repeat: no-repeat;
    background-size:cover;

`
export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem 0;
    min-height: 12rem;
    width: 25rem;
    border: 3px solid #4C7ABB;
    border-radius: 6px;
    background-color: #4C7ABB;

`
export const Button = styled.button`
    background-color: white;
    color: white;
    border: none;
    border-radius: 15px;
    width: 13rem;
    height: 2rem;
    font-weight: 500;
    color: #4C7ABB;

    &:hover {
        background-color: #76A7ED;
        color: white;
    }

`

export const BottomWave = styled.div`
    height: 33vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-repeat: no-repeat;
    background-size:cover;
    
`
