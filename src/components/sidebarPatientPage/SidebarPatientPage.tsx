import IconArrowRight from "../../assets/arrow-right.svg";
import { PatientType } from "../../types/PatientTypes";
import { Menu, MenuItem, SideBar } from './SidebarPatientPage.styles';


interface Props {
    patient: PatientType
}

const SidebarPatientPage = ({ patient }: Props) => {

  return (
    <SideBar>
      <Menu>
        <MenuItem to={`/perfil/paciente/${patient.id}`}><p>Perfil</p> <img src={IconArrowRight} alt="seta direita" /></MenuItem>
        <MenuItem to={'/fase/tratamento'}><p>Fases</p> <img src={IconArrowRight} alt="seta direita" /></MenuItem>
        <MenuItem to={`/vacinas/paciente/${patient.id}`}><p>Vacinas</p> <img src={IconArrowRight} alt="seta direita" /></MenuItem>
      </Menu>
    </SideBar>
  );
}

export default SidebarPatientPage;