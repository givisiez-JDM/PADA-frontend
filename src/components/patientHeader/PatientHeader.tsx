import IconPatient from "../../assets/iconPatient.svg"
import IconClose from "../../assets/close.svg"
import { PatientType } from "../../types/PatientTypes";
import { Close, Header, IconX, Logo, PatientData } from "./PatientHeader.styles"

interface HeaderProps {
  patient: PatientType | null
}

const PatientHeader: React.FC<HeaderProps> = ({ patient }) => {

  return (
    <Header>
      <PatientData>
        <Logo src={patient?.photo || IconPatient} />
        <p>{patient?.name}</p>
      </PatientData>
      <Close to={'/menu-medico'}>
        <IconX src={IconClose} alt="Fechar" />
      </Close>
    </Header>
  )
}

export default PatientHeader
