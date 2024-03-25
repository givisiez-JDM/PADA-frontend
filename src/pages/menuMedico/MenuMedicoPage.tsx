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
            <Link to="/cadastro/paciente">
              <Button>Cadastrar Paciente</Button>
            </Link>
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
