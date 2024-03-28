import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  gap: 1rem 0;
`

export const FirstBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem 0;
  font-weight: 500;
`

export const SecondBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  padding-top: 1.7rem;
`

export const TreatmentDuration = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
  font-weight: 500;
`

export const Medication = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
  font-weight: 700;
`

export const TreatmentMethod = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;

  div {
    display: flex;
    align-items: center;
    gap: 0 1rem;

    div {
      gap: 0;
    }
  }
`

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10rem;
`

export const AllergiesContainer = styled.div`
  display: flex;
  gap: 0.5rem 0;
  align-items: flex-end;
  justify-content: space-between;
`

export const AllergiesBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
`

export const Allergies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 3rem;
  flex-wrap: wrap;
  height: 10rem;
  width: auto;
`

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 3.5rem;
    width: 4rem;
  }

  h1 {
    margin-left: 1rem;
    font-size: 1.3rem;
  }
`

export const RigthBox = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 13rem;
  cursor: pointer;
  margin-right: 3rem;
`

export const BoxButton = styled.div`
  button {
    background-color: ${(props) => props.theme.colors.variant2};
    outline: none;
    border: none;
    color: ${(props) => props.theme.colors.white};
    padding: 0.5rem 3rem;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 500;
    margin-right: 5rem;

    &:hover {
      background-color: ${(props) => props.theme.colors.variant3};
      transition: 0.3s;
    }
  }
`