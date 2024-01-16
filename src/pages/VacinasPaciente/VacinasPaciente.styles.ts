import styled from "styled-components"

const apply = '#5CED38'
const noApply = '#FACB71'
const later = '#E85656'
const schedule = '#B4B4B4'

export const VaccinesContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    width: 100%;
    height: 100%;
`

export const VaccinesHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
`

export const VaccinesTitle = styled.h1`
    font-size: 2rem;
`

export const VaccinesList = styled.ul`
    padding-top: 2rem;
`

export const VaccineItem = styled.li`
`

export const VaccinesLegend = styled.div`
    background-color: #fff;
    justify-self: flex-end;
    padding: 2rem 0;

    h3 {
        font-size: 0.875rem;
    }
`



export const VaccineColorContainer = styled.div`
    display: flex;
    padding: 1rem 0;
    align-items: flex-end;

    p {
        margin: 0 1rem;
        font-size: 0.75rem;
    }
`

export const VaccineColor = styled.div`
    width: 1rem;
    height: 1rem;
    &.apply {
        background-color: ${apply};
    }
    &.later {
        background-color: ${later};
    }
    &.not-apply {
        background-color: ${noApply};
    }
    &.schedule {
        background-color: ${schedule};
    }
`