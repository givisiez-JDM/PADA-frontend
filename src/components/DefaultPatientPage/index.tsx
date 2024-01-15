import { useNavigate } from "react-router-dom";

import patientIcone from "../../assets/user.svg";
import closeIcone from "../../assets/close.svg";
import arrowRight from "../../assets/arrow-right.svg";

import MenuHeader from '../MenuHeader/MenuHeader';

import { Close, Content, Main, Menu, MenuItem, PatientData, Picture, SideBar } from './DefaultPatientPage.styles';

interface IUser {
    name: string,
}

interface IPatient {
    id: string,
    name: string,
    photo: any
}

interface Props
    extends React.ComponentProps<"main"> {
    user?: IUser,
    patient: IPatient
}

const DefaultPatientPage = ({ user, patient, ...props }: Props) => {

    const navigate = useNavigate();

    return (
        <Main>
            <MenuHeader>
                <PatientData>
                    <Picture src={patient ? patient.photo : patientIcone} alt='foto do paciente' />
                    <p>{patient ? patient.name : 'Nome do paciente'}</p>
                </PatientData>
                <Close onClick={()=> navigate('/menu-medico')}> <img src={closeIcone}  /></Close>
            </MenuHeader>
            <Content>
            <SideBar>
                <Menu>
                    <MenuItem onClick={() => navigate(`/perfil/paciente/${patient.id}`)}><p>Perfil</p> <img src={arrowRight}/></MenuItem>
                    <MenuItem onClick={() => navigate('#')}><p>Fases</p> <img src={arrowRight}/></MenuItem>
                    <MenuItem onClick={() => navigate(`/vacinas/paciente/${patient.id}`)}><p>Vacinas</p> <img src={arrowRight}/></MenuItem>
                </Menu>
            </SideBar>
            {props.children}
            </Content>
        </Main>
    );
}

export default DefaultPatientPage;