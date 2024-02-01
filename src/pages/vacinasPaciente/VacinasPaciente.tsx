import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';

import { UserRequest } from '../../requests/UserRequest';
import useAxios from '../../hooks/useAxios';

import DefaultPatientPage from '../../components/defaultPatientPage/DefaultPatientPage';
import Vaccine from './vaccine/Vaccine';

import SearchIco from '../../assets/search.svg'

import { PhaseType, TreatmentType, VaccineType } from '../../types/TreatmentTypes';
import { PatientType } from '../../types/PatientTypes';

import { VaccineColor, VaccineColorContainer, VaccinesContainer, VaccinesDate, VaccinesHeader, VaccinesLegend, VaccinesList, VaccinesTitle } from './VacinasPaciente.styles';

//////////////// TODO remover mocks e integrar com Back End
const vaccines: VaccineType[] = [
    { id: 1, scheduledDate: '2024-01-01', applicationDate: '2024-01-01', title: 'Vacina 1', observation: 'lorem ipsum', status: 'applied' },
    { id: 2, scheduledDate: '2024-01-02', applicationDate: '', title: 'Vacina 2', observation: 'lorem ipsum', status: 'not applied' },
    { id: 3, scheduledDate: '2024-01-03', applicationDate: '2024-01-04', title: 'Vacina 3', observation: 'lorem ipsum', status: 'late' },
    { id: 4, scheduledDate: '2024-01-04', applicationDate: '', title: 'Vacina 4', observation: 'lorem ipsum', status: 'applied' },
    { id: 5, scheduledDate: '2024-01-05', applicationDate: '', title: 'Vacina 5', observation: 'lorem ipsum', status: 'schedule' },
    { id: 6, scheduledDate: '2024-01-06', applicationDate: '', title: 'Vacina 6', observation: 'lorem ipsum', status: 'schedule' },
    { id: 7, scheduledDate: '2024-01-07', applicationDate: '', title: 'Vacina 7', observation: 'lorem ipsum', status: 'schedule' },
    { id: 8, scheduledDate: '2024-01-08', applicationDate: '', title: 'Vacina 8', observation: 'lorem ipsum', status: 'schedule' },
    { id: 9, scheduledDate: '2024-01-09', applicationDate: '', title: 'Vacina 9', observation: 'lorem ipsum', status: 'schedule' },
    { id: 10, scheduledDate: '2024-01-10', applicationDate: '', title: 'Vacina 10', observation: 'lorem ipsum', status: 'schedule' },
]

// const patient: PatientType = {
//     id: '5f59f128-148d-469b-9452-4613e6afd67c',
//     name: 'Beatrix',
//     photo: '/vite.svg',
//     email: 'Beatrix@Beatrix',
//     telephone: '123546',
//     birthDate: '2000-05-23',
// }
//////////////////////////////

const VacinasPaciente = () => {
    const userRequest = new UserRequest();
    const patient = useAxios<PatientType>();
    const treatmant = useAxios<TreatmentType>();
    const phase = useAxios<PhaseType[]>();
    const vaccine = useAxios<VaccineType[]>();


    const { id } = useParams();
    const token = window.localStorage.getItem("token");


    const [pageError, setPageError] = useState('');
    const [searchDate, setSearchDate] = useState('');
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
            const { url, headers } = userRequest.GET_PHASES_BY_TREATMENTS_ID(String(treatmant.data.id), token);
            phase.get(url, { headers });
        }
        catch (error) {
            console.error(error);
        }
    }, [token, treatmant.data]);

    useEffect(() => {
        try {
            const lastItem = phase.data?.slice(- 1);
            const { url, headers } = userRequest.GET_VACCINES_BY_PHASES_ID(String(phase.data[lastItem].id), token);
            phase.get(url, { headers });
        }
        catch (error) {
            console.error(error)
        }
    }, [token, phase.data]);

    useEffect(() => {
        try {
            const newList = vaccines.filter(item => item.scheduledDate === searchDate || item.applicationDate === searchDate);
            // const newList = vaccine.data.filter(item => item.scheduledDate === searchDate || item.applicationDate === searchDate);
            setVaccineList(newList);
            setPageError('')
        }
        catch (error) {
            setPageError('error')
            console.error(error)
        }
    }, [token, searchDate, vaccine.data]);

    function getVaccineList() {
        if (pageError) {
            return (
                <h2>Lista de vacinas não encontrada</h2>
            )
        } else {
            return vaccineList?.map(vaccine => (
                <li key={vaccine.id}>
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
                            <input type="date" value={searchDate} onChange={event => setSearchDate(event.target.value)} />
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