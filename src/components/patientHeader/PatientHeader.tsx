import IconPatient from '../../assets/iconPatient.svg';
import IconClose from '../../assets/close.svg';
import { PatientType } from '../../types/PatientTypes';
import { Close, Header, IconX, Logo, PatientData } from './PatientHeader.styles';

interface HeaderProps {
  patient: PatientType | null
}

const PatientHeader: React.FC<HeaderProps> = ({ patient }) => {
  const getPhoto = () => {
    if (typeof (patient?.photo) === 'string') {
      return patient.photo;
    }
    return '';
  };

  return (
    <Header>
      <PatientData>
        <Logo src={getPhoto() || IconPatient} alt="Foto do paciente" />
        <p>{patient?.name}</p>
      </PatientData>
      <Close to="/menu-medico">
        <IconX src={IconClose} alt="Fechar" />
      </Close>
    </Header>
  );
};

export default PatientHeader;
