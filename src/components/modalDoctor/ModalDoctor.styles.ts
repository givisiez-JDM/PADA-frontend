import styled from "styled-components"


export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    width: 11rem;
    height: 13rem;
    background-color: white;
    position: absolute;
    right: 4rem;
    top: 5rem;
    border-radius: 1rem;
    gap: 0.8rem 0;
    box-shadow: 0px 0px 5px 0.5px #c1c1c1;
    transition: 5s ease-in-out;
    z-index: 10;

    div {
        display: flex;
        gap: 0 0.5rem ;
        align-items: center;
        transition: 0.3s ease-in-out;
        cursor: pointer;

    &:hover  {
        scale: 1.1;
    }

        img {
            height: 1.5rem;
            width: 1.5rem;
        }
    }
`

