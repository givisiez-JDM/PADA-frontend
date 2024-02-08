import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { UserRequest } from '../../requests/UserRequest';
import useAxios from '../../hooks/useAxios';

import DefaultPatientPage from '../../components/defaultPatientPage/DefaultPatientPage';
import Vaccine from './vaccine/Vaccine';

import SearchIco from '../../assets/search.svg'

import { PhaseType, TreatmentType, VaccineType } from '../../types/TreatmentTypes';
import { PatientType } from '../../types/PatientTypes';

import { VaccineColor, VaccineColorContainer, VaccinesContainer, VaccinesDate, VaccinesHeader, VaccinesLegend, VaccinesList, VaccinesTitle } from './VacinasPaciente.styles';


const VacinasPaciente = () => {
    const userRequest = new UserRequest();
    const patient = useAxios<PatientType>();
    const treatmant = useAxios<TreatmentType>();
    const phase = useAxios<PhaseType[]>();
    const vaccine = useAxios<VaccineType[]>();


    const { id } = useParams();
    const token = window.localStorage.getItem("token");


    const [pageError, setPageError] = useState('');
    const [initDate, setInitDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [vaccineList, setVaccineList] = useState<VaccineType[] | null>(null);

    useEffect(() => {
        const { url, headers } = userRequest.GET_PATIENTS_BY_ID(id, token);
        patient.get(url, { headers });
    }, [id, token]);

    useEffect(() => {
        const { url, headers } = userRequest.GET_TREATMENTS_BY_ID(id, token);
        treatmant.get(url, { headers });
    }, [id, token]);

    useEffect(() => {
        try {
            const { url, headers } = userRequest.GET_PHASES_BY_TREATMENTS_ID(String(treatmant.data?.id), token);
            phase.get(url, { headers });
        }
        catch (error) {
            console.error(error);
        }
    }, [token, treatmant.data]);

    useEffect(() => {
        try {
            const lastItem = phase.data?.slice(- 1)[0];
            const { url, headers } = userRequest.GET_VACCINES_BY_PHASES_ID(String(lastItem?.id), token);
            vaccine.get(url, { headers });
        }
        catch (error) {
            console.error(error)
        }
    }, [token, phase.data]);

    useEffect(() => {
        try {
            const newList = initDate || endDate ?
                vaccine.data.filter(item => {
                    const isInit = initDate ?
                        item.scheduledDate.substring(0, 10) >= initDate ||
                        item.applicationDate?.substring(0, 10) >= initDate : true;
                    const isEnd = endDate ?
                        item.scheduledDate.substring(0, 10) <= endDate ||
                        item.applicationDate?.substring(0, 10) <= endDate : true;
                    return isInit && isEnd;
                })
                : vaccine.data;
            setVaccineList(newList);
            setPageError('')
        }
        catch (error) {
            setPageError('error')
            console.error(error)
        }
    }, [token, initDate, endDate, vaccine.data]);

    function getVaccineList() {
        if (pageError) {
            return (
                <h2>Lista de vacinas não encontrada</h2>
            )
        } else {
            return vaccineList?.map((vaccine, index) => (
                <li key={index}>
                    <Vaccine  {...vaccine} />
                </li>
            ))
        }
    }


    return (
        <DefaultPatientPage patient={patient.data}>
            <VaccinesContainer>
                <VaccinesHeader>
                    <VaccinesTitle>Vacinas</VaccinesTitle>
                    <VaccinesDate >
                        <p>Busque no histórico:</p>
                        <div>
                            <img src={SearchIco} alt='icone de busca' />
                            <input type="date" value={initDate} onChange={event => setInitDate(event.target.value)} />
                            <input type="date" value={endDate} onChange={event => setEndDate(event.target.value)} />
                        </div>
                    </VaccinesDate>
                </VaccinesHeader>
                <VaccinesList>
                    {getVaccineList()}
                </VaccinesList>
                <VaccinesLegend>
                    <h3>LEGENDA</h3>
                    <VaccineColorContainer>
                        <VaccineColor className='applied' />
                        <p>Aplicada</p>
                        <VaccineColor className='late' />
                        <p>Aplicada em atraso</p>
                        <VaccineColor className='not-applied' />
                        <p>Não aplicada</p>
                        <VaccineColor className='schedule' />
                        <p>Agendada</p>
                    </VaccineColorContainer>
                </VaccinesLegend>
            </VaccinesContainer>
        </DefaultPatientPage>
    );
}

export default VacinasPaciente;