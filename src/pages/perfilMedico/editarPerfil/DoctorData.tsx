import { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import { UserRequest } from '../../../requests/UserRequest';
import { useData } from '../../../global/UserContext';
import ImageLogo from '../../../assets/logo.png';
import IconArrow from '../../../assets/white-arrow.svg';
import ModalDoctor from '../../../components/modalDoctor/ModalDoctor';
import MenuHeader from '../../../components/menuHeader/MenuHeader';
import {
  Title,
  Container,
  Logo,
  Main,
  SectionDoctor,
  InputField,
  InputArea,
  PasswordBox,
  ButtonBox,
  InputPass,
} from './DoctorData.styles';
import Button from '../../../components/button/Button';

const DoctorData = () => {
  const userRequest = new UserRequest();
  const patients = useAxios();
  const { userId, getProfile, data } = useData();

  const [modal, setModal] = useState(false);
  const [name, setName] = useState(data?.name);
  const [email, setEmail] = useState(data?.email);
  const [crm, setCrm] = useState(data?.CRM);
  const [specialty, setSpecialty] = useState(data?.specialty);
  const [about, setAbout] = useState(data?.about);
  const [password, setPassword] = useState('');
  const [editProfile, setEditProfile] = useState(false);

  useEffect(() => {
    getProfile(userId);
  }, []);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const { url, headers } = userRequest.GET_PATIENTS(token);

    patients.get(url, { headers });
  }, []);

  const handleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  const handleSaveProfile = () => {
    setEditProfile(false);
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

        <Container>
          <Title>Nome:</Title>
          <InputField
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Title>E-mail:</Title>
          <InputField
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Title>CRM:</Title>
          <InputField
            type="text"
            value={crm}
            onChange={e => setCrm(e.target.value)}
          />
          <Title>Especialidade:</Title>
          <InputArea
            value={specialty}
            onChange={e => setSpecialty(e.target.value)}
          />
          <Title>Sobre:</Title>
          <InputArea
            rows={4}
            cols={50}
            value={about}
            onChange={e => setAbout(e.target.value)}
          />
          <PasswordBox>
            <Title>Senha:</Title>
            <InputPass
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button size="small" onClick={handleEditProfile}>
              Alterar
            </Button>
          </PasswordBox>
          <ButtonBox>
            <Button onClick={handleSaveProfile}>Atualizar Perfil</Button>
          </ButtonBox>
        </Container>
      </Main>

      {modal && <ModalDoctor />}
    </>
  );
};

export default DoctorData;
