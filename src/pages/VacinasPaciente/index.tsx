
import DefaultPatientPage from '../../components/DefaultPatientPage';

const VacinasPaciente = () => {

    const patient = {
        id: '5f59f128-148d-469b-9452-4613e6afd67c',
        name: 'Beatrix',
        photo: '/vite.svg'
    }

    return ( 
        <DefaultPatientPage patient={patient}>
            <div>Vacinas paciente</div>

        </DefaultPatientPage>        
     );
}
 
export default VacinasPaciente;