import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { UserRequest } from "../../requests/UserRequest";
import { useData } from "../../global/UserContext";
import ImageLogo from "../../assets/logo.png";
import IconArrow from "../../assets/white-arrow.svg";
import ModalDoctor from "../../components/modalDoctor/ModalDoctor";
import MenuHeader from "../../components/menuHeader/MenuHeader";
import {
  
  Button,
  Logo,
  Main,
 
  SectionDoctor,
 
  InputField, 
  Label,
} from "./DoctorData.styles";

const DoctorData = () => {
  const userRequest = new UserRequest();
  const patients = useAxios();
  const { userId, getProfile, data, setPatientId } = useData();

  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [about, setAbout] = useState("");
  const [password, setPassword] = useState("");
  const [editProfile, setEditProfile] = useState(false);

  useEffect(() => {
    getProfile(userId);
  }, []);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const { url, headers } = userRequest.GET_PATIENTS(token);

    patients.get(url, { headers });
  }, []);

  const handleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  const handleSaveProfile = () => {
    
    setEditProfile(false); 
  };

  const getAllPatients = patients.data?.map((patient: any) => {
    return (
      <Link
        key={patient.id}
        to={`/paciente/perfil/${patient.id}`}
        onClick={() => setPatientId(patient.id)}
      >
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
        
         <div>
              <Label>Nome:</Label>
              <InputField
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Label>E-mail:</Label>
              <InputField
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label>Especialidade:</Label>
              <InputField
                type="text"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              />
              <Label>Sobre:</Label>
              <InputField
                type="text"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
              <Label>Senha:</Label>
              <InputField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleSaveProfile}>Alterar Senha</Button>
            </div>
          : (
            <Button onClick={handleEditProfile}>Atualizar Perfil</Button>
          )
        
      </Main>
      {modal && <ModalDoctor />}
    </>
  );
};

export default DoctorData;
