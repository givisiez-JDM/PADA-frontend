import { useNavigate } from "react-router-dom";

import iconClose from "../../assets/close.svg";
import iconArrowRight from "../../assets/arrow-right.svg";
import iconPatient from '../../assets/user.svg'

import MenuHeader from '../menuHeader/MenuHeader';

import { PatientType } from "../../types/PatientTypes";

import { Close, Content, Main, Menu, MenuItem, PatientData, Picture, SideBar } from './DefaultPatientPage.styles';

interface Props
    extends React.ComponentProps<"main"> {
    patient: PatientType | null
}

const DefaultPatientPage = ({ patient, ...props }: Props) => {

    const navigate = useNavigate();

    return (
        <Main>
            <MenuHeader>
                <PatientData>
                    <Picture src={patient?.photo || iconPatient} alt='foto do paciente' />
                    <p>{patient?.name}</p>
                </PatientData>
                <Close to={'/menu-medico'}> <img src={iconClose} alt="voltar para Home" /></Close>
            </MenuHeader>
            <Content>
                <SideBar>
                    <Menu>
                        <MenuItem to={`/perfil/paciente/${patient?.id}`}><p>Perfil</p> <img src={iconArrowRight} alt="seta direita" /></MenuItem>
                        <MenuItem to={'#'}><p>Fases</p> <img src={iconArrowRight} alt="seta direita" /></MenuItem>
                        <MenuItem to={`/vacinas/paciente/${patient?.id}`}><p>Vacinas</p> <img src={iconArrowRight} alt="seta direita" /></MenuItem>
                    </Menu>
                </SideBar>
                {props.children}
            </Content>
        </Main>
    );
}

export default DefaultPatientPage;