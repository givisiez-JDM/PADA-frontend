
import DefaultPatientPage from '../../components/DefaultPatientPage';
import { VaccineItem, VaccinesContainer, VaccinesHeader, VaccinesList, VaccinesTitle, VacinasContainer, VacinasHeader, VacinasTitulo } from './VacinasPaciente.styles';

const VacinasPaciente = () => {

    const patient = {
        id: '5f59f128-148d-469b-9452-4613e6afd67c',
        name: 'Beatrix',
        photo: '/vite.svg'
    }

    const vaccines =[
    {id: 1, date: '1/1/24', title: 'Vacina 1', description: 'lorem ipsum'},
    {id: 2, date: '1/1/24', title: 'Vacina 2', description: 'lorem ipsum'},
    {id: 3, date: '1/1/24', title: 'Vacina 3', description: 'lorem ipsum'},
    {id: 4, date: '1/1/24', title: 'Vacina 4', description: 'lorem ipsum'},
    {id: 5, date: '1/1/24', title: 'Vacina 5', description: 'lorem ipsum'},
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
                    {vaccine.title}
                    </VaccineItem>
                    ))}
            </VaccinesList>

            </VaccinesContainer>

        </DefaultPatientPage>
    );
}

export default VacinasPaciente;