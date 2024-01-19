import { useState } from "react";

import ArrowUpIco from '../../../assets/arrow-up.svg';
import ArrowDownIco from '../../../assets/arrow-down.svg';

import { VaccineType } from "../../../types/VaccineTypes";

import { VaccineButton, VaccineContainer, VaccineDate, VaccineDescription, VaccineText, VaccineTitle } from "./Vaccine.style";


function Vaccine({ title, observation, scheduledDate, status, applicationDate }: VaccineType) {
    const [showDescription, setShowDescription] = useState(false);

    function toggledescription() {
        setShowDescription(!showDescription)
    }

    function getVaccineStatus() {
        return {
            'applied': 'applied',
            'not applied': 'not-applied',
            'late': 'late',
            'schedule': 'schedule',
        }[status] || ''
    }

    return (

        <VaccineContainer>
            <VaccineDate className={getVaccineStatus()}>{applicationDate || scheduledDate}</VaccineDate>
            <VaccineDescription>
                <VaccineTitle>{title}</VaccineTitle>
                <VaccineText
                    className={showDescription ? 'active' : ''}
                >{observation}</VaccineText>
            </VaccineDescription>
            <VaccineButton
                onClick={toggledescription}
            ><img src={showDescription ? ArrowUpIco : ArrowDownIco} alt="Mostra descrição" /></VaccineButton>

        </VaccineContainer>
    );
}

export default Vaccine;