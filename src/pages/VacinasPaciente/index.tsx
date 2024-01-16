
import DefaultPatientPage from '../../components/DefaultPatientPage';
import Vaccine from './Vaccine';
import { VaccineColor, VaccineColorContainer, VaccineItem, VaccinesContainer, VaccinesHeader, VaccinesLegend, VaccinesList, VaccinesTitle, VacinasContainer, VacinasHeader, VacinasTitulo } from './VacinasPaciente.styles';

const VacinasPaciente = () => {

    const patient = {
        id: '5f59f128-148d-469b-9452-4613e6afd67c',
        name: 'Beatrix',
        photo: '/vite.svg'
    }

    const vaccines = [
        { id: 1, date: '1/1/24', title: 'Vacina 1', description: 'lorem ipsum', status: 'apply' },
        { id: 2, date: '1/1/24', title: 'Vacina 2', description: 'lorem ipsum', status: 'not-apply' },
        { id: 3, date: '1/1/24', title: 'Vacina 3', description: 'lorem ipsum', status: 'later' },
        { id: 4, date: '1/1/24', title: 'Vacina 4', description: 'lorem ipsum', status: 'apply' },
        { id: 5, date: '1/1/24', title: 'Vacina 5', description: 'lorem ipsum', status: 'schedule' },
        { id: 5, date: '1/1/24', title: 'Vacina 5', description: 'lorem ipsum', status: 'schedule' },
        { id: 5, date: '1/1/24', title: 'Vacina 5', description: 'lorem ipsum', status: 'schedule' },
        { id: 5, date: '1/1/24', title: 'Vacina 5', description: 'lorem ipsum', status: 'schedule' },
        { id: 5, date: '1/1/24', title: 'Vacina 5', description: 'lorem ipsum', status: 'schedule' },
        { id: 5, date: '1/1/24', title: 'Vacina 5', description: 'lorem ipsum', status: 'schedule' },
    ]

    return (
        <DefaultPatientPage patient={patient}>
            <VaccinesContainer>
                <VaccinesHeader>
                    <VaccinesTitle>Vacinas</VaccinesTitle>

                </VaccinesHeader>
                <VaccinesList>
                    {vaccines.map(vaccine => (
                        <VaccineItem key={vaccine.id}>
                            <Vaccine {...vaccine} />
                        </VaccineItem>
                    ))}
                </VaccinesList>
                <VaccinesLegend>
                    <h3>LEGENDA</h3>
                    <VaccineColorContainer>
                        <VaccineColor className='apply' />
                        <p>Aplicada</p>
                        <VaccineColor className='later' />
                        <p>Aplicada em atraso</p>
                        <VaccineColor className='not-apply' />
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