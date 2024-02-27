import { Link } from "react-router-dom"
import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.variant2};
  color: ${props => props.theme.colors.white};
  width: 100%;
  padding: 0.5rem 0;
  border-radius: 0 0 1rem 1rem;
  `

export const PatientData = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
`

export const Logo = styled.img `
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
  height: 6rem;
`

export const Close = styled(Link)`
  width: 1,12rem;
  margin: 2rem;
`

export const IconX = styled.img `
  cursor: pointer;
`