import PatientHeader from "../patientHeader/PatientHeader";
import SidebarPatientPage from "../sidebarPatientPage/SidebarPatientPage";
import { PatientType } from "../../types/PatientTypes";
import { Content, Main } from './DefaultPatientPage.styles';

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