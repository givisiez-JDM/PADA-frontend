import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { UserRequest } from "../../requests/UserRequest";
import { BoxAddPacient, Button, Header, Logo, Main, Middle, PacientList, SectionDoctor, TitlePacient} from "./MenuMedico.styles";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useData } from "../../global/UserContext";
import ModalDoctor from "../../components/modalDoctor/ModalDoctor";
import whiteArrow from "../../assets/white-arrow.svg";

const MenuMedico = () => {
  const userRequest = new UserRequest();
  const navigate = useNavigate();
  const patients = useAxios();
  const { userId, getProfile, data } = useData();

  const [modal, setModal] = useState(false);

  React.useEffect(() => {
    getProfile(userId);
  }, []);

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    const { url, headers } = userRequest.GET_PATIENTS(token);

    patients.get(url, { headers });
  }, []);

  const getAllPatients = patients.data?.map((patient: any) => {
    return (
      <li onClick={() => navigate(`/perfil/paciente/${patient.id}`)} key={patient.id}>
        {patient.name}
      </li>
    );
  });

  return (
    <>
      <Main>
        <Header>
          <Logo src={logo} />
          <SectionDoctor onClick={() => setModal(!modal)}>
            {data?.name}
            <img src={whiteArrow} alt="" />
          </SectionDoctor>
        </Header>
        {/* <img src={doctor?.data?.photo?.data} alt="" /> */}

        <Middle>
          <BoxAddPacient>
          <NavLink to="/cadastro-paciente">
            <Button>Cadastrar Paciente</Button>
          </NavLink>
          </BoxAddPacient>

          <PacientList>
            <h1>Pacientes</h1>

            <TitlePacient>{getAllPatients}</TitlePacient>
          </PacientList>
        </Middle>
      </Main>

      {modal && <ModalDoctor />}
    </>
  );
};

export default MenuMedico;
