import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
height: 100vh;
`;

export const Logo = styled.img`
    display: flex;
    margin-left: 6rem;
    height: 6rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const SectionDoctor = styled.div`
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
`;

export const Label = styled.label`
    margin-top: 1rem;
    font-weight: bold;
`;

export const InputField = styled.input`
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
`;

export const Button = styled.button`
background-color: #76A7ED;
color: black;
border: none;
border-radius: 20px;
width: 10rem;
height: 2rem;
font-weight: 500;  
`