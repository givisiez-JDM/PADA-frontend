import IconPatient from "../../assets/iconPatient.svg"
import IconClose from "../../assets/close.svg"
import MenuHeader from "../menuHeader/MenuHeader";
import { PatientType } from "../../types/PatientTypes";
import { Close, IconX, Logo, PatientData } from "./PatientHeader.styles"

interface HeaderProps {
  patient: PatientType | null
}

const PatientHeader: React.FC<HeaderProps> = ({ patient }) => {
  
  return (
    <MenuHeader>
      <PatientData>
        <Logo src={patient?.photo || IconPatient} />
        <p>{patient?.name}</p>
      </PatientData>
      <Close  to={'/menu-medico'}>
        <IconX src={IconClose} alt="Fechar" />
      </Close>
    </MenuHeader>
  )
}

export default PatientHeader
