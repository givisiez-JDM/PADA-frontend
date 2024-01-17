import { useState } from "react";

import arrowUp from '../../../assets/arrow-up.svg';
import arrowDown from '../../../assets/arrow-down.svg';
import { VaccineType } from "../../../Types/VaccineTypes";

import { VaccineButton, VaccineContainer, VaccineDate, VaccineDescription, VaccineText, VaccineTitle } from "./Vaccine.style";

function Vaccine({ title, observation, scheduledDate, status, applicationDate }: VaccineType) {
    const [showDescription, setShowDescription] = useState(false);

    function toggledescription() {
        setShowDescription(!showDescription)
    }

    function getVaccineStatus() {
        switch (status) {
            case 'applied':
                return 'applied'
            case 'not applied':
                return 'not-applied'
            case 'late':
                return 'late'
            case 'schedule':
                return 'schedule'
            default:
                return ''
        }
    }

    return (

        <VaccineContainer>
            <VaccineDate className={getVaccineStatus()}>{applicationDate ? applicationDate : scheduledDate}</VaccineDate>
            <VaccineDescription>
                <VaccineTitle>{title}</VaccineTitle>
                <VaccineText
                    className={showDescription ? 'active' : ''}
                >{observation}</VaccineText>
            </VaccineDescription>
            <VaccineButton
                onClick={toggledescription}
            ><img src={showDescription ? arrowUp : arrowDown} alt="Mostra descrição" /></VaccineButton>

        </VaccineContainer>
    );
}

export default Vaccine;