import { useState } from "react";

import iconArrowUp from '../../../assets/arrow-up.svg';
import iconArrowDown from '../../../assets/arrow-down.svg';

import { VaccineType } from "../../../types/TreatmentTypes";

import { VaccineButton, VaccineContainer, VaccineDate, VaccineDescription, VaccineText, VaccineTitle } from "./Vaccine.style";


function Vaccine({ title, observation, scheduledDate, status, applicationDate }: VaccineType) {
    const [showDescription, setShowDescription] = useState(false);

    function toggledescription() {
        setShowDescription(!showDescription)
    }

    function getVaccineStatus() {
        return {
            'aplicado': 'applied',
            'não aplicado': 'not-applied',
            'aplicado com atraso': 'late',
            'agendado': 'schedule',
        }[status] || ''
    }

    function getDate() {
        const date = new Date(applicationDate || scheduledDate)
        return date.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', dateStyle: 'long', timeStyle: 'medium' })
    }

    return (
        <VaccineContainer>
            <VaccineDate className={getVaccineStatus()}>{getDate()}</VaccineDate>
            <VaccineDescription>
                <VaccineTitle>{title}</VaccineTitle>
                <VaccineText
                    className={showDescription ? 'active' : ''}
                >{observation}</VaccineText>
            </VaccineDescription>
            <VaccineButton
                onClick={toggledescription}
            ><img src={showDescription ? iconArrowUp : iconArrowDown} alt="Mostrar descrição" /></VaccineButton>

        </VaccineContainer>
    );
}

export default Vaccine;