import styled from "styled-components";

const applied = '#5CED38'
const notApplied = '#E85656'
const late = '#FACB71'
const schedule = '#B4B4B4'

export const VaccineContainer = styled.div`
    display: flex;
    align-items: start;
    width: 100%;
    border-bottom: 2px solid #4C7ABB;
    padding: 1rem 0;
`
export const VaccineDate = styled.div.attrs({className:''})`
    width: 20%;
    border-left: 4px solid;
    padding: 1rem;
    &.applied {
        border-color: ${applied};
    }
    &.late {
        border-color: ${late};
    }
    &.not-applied {
        border-color: ${notApplied};
    }
    &.schedule {
        border-color: ${schedule};
    }
`
export const VaccineDescription = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const VaccineTitle = styled.h2`
    padding: 0.5rem;
    color: #273047;
    border-radius: 10px;
    background: #E9EAEC; 
`

export const VaccineText = styled.p`
    display: none;
    padding: 0.5rem;
    color: #273047;
    border-radius: 10px;
    background: #E9EAEC; 

    &.active {
        display: block;
    }
`

export const VaccineButton = styled.button`
    margin: 1rem;
    border: none;
    background: none;
`



