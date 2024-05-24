import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../../global/UserContext';
import useAxios from '../../../hooks/useAxios';
import { UserRequest } from '../../../requests/UserRequest';
import { DoctorsType } from '../../../types/DoctorTypes';

import {
  ArticlePassword,
  BoxUpdateProfile,
  ChangePassword,
  Container,
  InputField,
  InputArea,
  Title,
  UpdateProfile,
  Logo,
  Main,
  Section,
  SectionDoctor,
} from './EditarPerfil.styles';
import ImageLogo from '../../../assets/logo.png';
import IconArrow from '../../../assets/white-arrow.svg';
import ModalDoctor from '../../../components/modalDoctor/ModalDoctor';
import MenuHeader from '../../../components/menuHeader/MenuHeader';

const PerfilMedico = () => {
  const { data, getToken, getProfile, userId } = useData();
  const navigate = useNavigate();
  const userRequest = new UserRequest();
  const doctorReq = useAxios<DoctorsType>();
  const [modal, setModal] = useState(false);

  const [name, setName] = useState(data?.name);
  const [email, setEmail] = useState(data?.email);
  const [crm, setCrm] = useState(data?.CRM);
  const [specialty, setSpecialty] = useState(data?.specialty);
  const [about, setAbout] = useState(data?.about);
  const [photo] = useState(data?.photo);
  const [password] = useState('Adicionar a senha para testar');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token = getToken();
    const { url, headers } = userRequest.PUT_DOCTORS_BY_ID(data.id, token);
    const body: Partial<DoctorsType> = {
      name,
      email,
      about,
      CRM: crm,
      specialty,
      photo,
    };

    if (password) {
      body.password = password;
    }

    try {
      await doctorReq.put(url, body, { headers });
      await getProfile(userId);
      navigate('/menu-medico/perfil');
    }
    catch (error) {
      console.error('Erro ao atualizar perfil:', error);
    }
  };

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

        <Section>
          <Container onSubmit={handleFormSubmit}>
            <div>
              <Title>Nome</Title>
              <InputField
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
              <Title>Email</Title>
              <InputField
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Title>CRM</Title>
              <InputField
                type="text"
                value={crm}
                onChange={e => setCrm(e.target.value)}
              />
            </div>
            <div>
              <Title>Especialidade</Title>
              <InputArea
                className="specialty"
                value={specialty}
                onChange={e => setSpecialty(e.target.value)}
              />
            </div>
            <div>
              <Title>Sobre</Title>
              <InputArea
                className="about"
                value={about}
                onChange={e => setAbout(e.target.value)}
              />
            </div>
            <ArticlePassword>
              <h1>Senha:</h1>
              <p>********</p>
              <ChangePassword disabled={true}>Alterar</ChangePassword>
            </ArticlePassword>
            <BoxUpdateProfile>
              <UpdateProfile type="submit">Atualizar perfil</UpdateProfile>
            </BoxUpdateProfile>
          </Container>
        </Section>
      </Main>

      {modal && <ModalDoctor />}
    </>
  );
};

export default PerfilMedico;
