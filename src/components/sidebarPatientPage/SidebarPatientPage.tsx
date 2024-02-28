import IconArrowRight from "../../assets/arrow-right.svg";
import { PatientType } from "../../types/PatientTypes";
import { Menu, MenuItem, SideBar } from './SidebarPatientPage.styles';


interface Props {
    patient: PatientType | null
}

const SidebarPatientPage = ({ patient }: Props) => {

  return (
    <SideBar>
      <Menu>
        <MenuItem to={`/paciente/perfil/${patient?.id}`}><p>Perfil</p> <img src={IconArrowRight} alt="seta direita" /></MenuItem>
        <MenuItem to={`/paciente/tratamento/${patient?.id}`}><p>Fases</p> <img src={IconArrowRight} alt="seta direita" /></MenuItem>
        <MenuItem to={`/paciente/vacinas/${patient?.id}`}><p>Vacinas</p> <img src={IconArrowRight} alt="seta direita" /></MenuItem>
      </Menu>
    </SideBar>
  );
}

export default SidebarPatientPage;