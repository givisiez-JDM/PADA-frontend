import { useState } from "react";

import arrowUp from '../../../assets/arrow-up.svg';
import arrowDown from '../../../assets/arrow-down.svg';

import { VaccineButton, VaccineContainer, VaccineDate, VaccineDescription, VaccineText, VaccineTitle } from "./Vaccine.style";

interface Props {
    id: number,
    date: string,
    title: string,
    description: string,
    status: string,
}

function Vaccine({ title, description, date, status }: Props) {
    const [showDescription, setShowDescription] = useState(false);

    function toggledescription() {
        setShowDescription(!showDescription)
    }


    return (

        <VaccineContainer>
            <VaccineDate className={status}>{date}</VaccineDate>
            <VaccineDescription>
                <VaccineTitle>{title}</VaccineTitle>
                <VaccineText
                    className={showDescription ? 'active' : ''}
                >{description}</VaccineText>
            </VaccineDescription>
            <VaccineButton
                onClick={toggledescription}
            ><img src={showDescription ? arrowUp : arrowDown} alt="Mostra descrição" /></VaccineButton>

        </VaccineContainer>
    );
}

export default Vaccine;