import { useNavigate } from "react-router-dom";

import CloseIco from "../../assets/close.svg";
import ArrowRightIco from "../../assets/arrow-right.svg";

import MenuHeader from '../menuHeader/MenuHeader';

import { PatientType } from "../../types/PatientTypes";

import { Close, Content, Main, Menu, MenuItem, PatientData, Picture, SideBar } from './DefaultPatientPage.styles';

interface Props
    extends React.ComponentProps<"main"> {
    patient: PatientType
}

const DefaultPatientPage = ({ patient, ...props }: Props) => {

    const navigate = useNavigate();

    return (
        <Main>
            <MenuHeader>
                <PatientData>
                    <Picture src={patient.photo} alt='foto do paciente' />
                    <p>{patient.name}</p>
                </PatientData>
                <Close onClick={() => navigate('/menu-medico')}> <img src={CloseIco} alt="voltar para Home" /></Close>
            </MenuHeader>
            <Content>
                <SideBar>
                    <Menu>
                        <MenuItem onClick={() => navigate(`/perfil/paciente/${patient.id}`)}><p>Perfil</p> <img src={ArrowRightIco} alt="seta direita" /></MenuItem>
                        <MenuItem onClick={() => navigate('#')}><p>Fases</p> <img src={ArrowRightIco} alt="seta direita" /></MenuItem>
                        <MenuItem onClick={() => navigate(`/vacinas/paciente/${patient.id}`)}><p>Vacinas</p> <img src={ArrowRightIco} alt="seta direita" /></MenuItem>
                    </Menu>
                </SideBar>
                {props.children}
            </Content>
        </Main>
    );
}

export default DefaultPatientPage;