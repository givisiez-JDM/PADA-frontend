import { useNavigate } from "react-router-dom";

import iconClose from "../../assets/close.svg";
import iconArrowRight from "../../assets/arrow-right.svg";
import iconPatient from '../../assets/user.svg'

import MenuHeader from '../menuHeader/MenuHeader';

import { PatientType } from "../../types/PatientTypes";

import { Close, Content, Main, Menu, MenuItem, PatientData, Picture, SideBar } from './DefaultPatientPage.styles';
import PatientHeader from "../patientHeader/PatientHeader";
import SidebarPatientPage from "../sidebarPatientPage/SidebarPatientPage";

interface Props
    extends React.ComponentProps<"main"> {
    patient: PatientType | null
}

const DefaultPatientPage = ({ patient, ...props }: Props) => {

  return (
    <Main>
      <PatientHeader patient={patient}/>
      <Content>
        <SidebarPatientPage patient={patient}/>
        {props.children}
      </Content>
    </Main>
  );
}

export default DefaultPatientPage;