<<<<<<< HEAD
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { UserRequest } from "../../Requests/UserRequest";
import { BoxAddPacient, Button, Header, Logo, Main, Middle, PacientList, SectionDoctor, TitlePacient} from "./MenuMedico.styles";
import { NavLink, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useData } from "../../Global/UserContext";
import ModalDoctor from "../../components/ModalDoctor/ModalDoctor";
import whiteArrow from "../../assets/white-arrow.svg";
=======
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { UserRequest } from "../../requests/UserRequest";
import { useData } from "../../global/UserContext";
import ImageLogo from "../../assets/logo.png";
import IconArrow from "../../assets/white-arrow.svg";
import ModalDoctor from "../../components/modalDoctor/ModalDoctor";
import MenuHeader from "../../components/menuHeader/MenuHeader";
import { BoxAddPacient, Button, Logo, Main, Middle, PacientList, SectionDoctor, TitlePacient } from "./MenuMedico.styles";
>>>>>>> eed81b08c5cd90fb795bd2759bf7ef8c30460528

const MenuMedico = () => {
  const userRequest = new UserRequest();
  const patients = useAxios();
  const { userId, getProfile, data } = useData();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    getProfile(userId);
  }, []);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const { url, headers } = userRequest.GET_PATIENTS(token);

    patients.get(url, { headers });
  }, []);

  const getAllPatients = patients.data?.map((patient: any) => {
    return (
      <Link to={`/paciente/perfil/${patient.id}`} key={patient.id}>
        <li>{patient.name}</li>
      </Link>
    );
  });

  return (
    <>
      <Main>
        <MenuHeader>
          <Logo src={ImageLogo} />
          <SectionDoctor onClick={() => setModal(!modal)}>
            {data?.name}
            <img src={IconArrow} alt="" />
          </SectionDoctor>
        </MenuHeader>
        {/* <img src={doctor?.data?.photo?.data} alt="" /> */}
        <Middle>
          <BoxAddPacient>
<<<<<<< HEAD
          <NavLink to="/cadastro-paciente">
            <Button>Cadastrar Paciente</Button>
          </NavLink>
=======
            <Link to="/cadastro-paciente">
              <Button>Cadastrar Paciente</Button>
            </Link>
>>>>>>> eed81b08c5cd90fb795bd2759bf7ef8c30460528
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
