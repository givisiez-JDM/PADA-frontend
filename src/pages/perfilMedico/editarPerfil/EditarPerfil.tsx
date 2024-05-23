import { useState } from 'react';
import { useData } from '../../../global/UserContext';
import { useNavigate } from 'react-router-dom';
import ImageLogo from '../../../assets/logo.png';
import IconArrow from '../../../assets/white-arrow.svg';
import ModalDoctor from '../../../components/modalDoctor/ModalDoctor';
import MenuHeader from '../../../components/menuHeader/MenuHeader';
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

const PerfilMedico = () => {
  const { data } = useData();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const [name, setName] = useState(data?.name);
  const [email, setEmail] = useState(data?.email);
  const [crm, setCrm] = useState(data?.CRM);
  const [specialty, setSpecialty] = useState(data?.specialty);
  const [about, setAbout] = useState(data?.about);
  // const [password, setPassword] = useState('');

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
          <Container>
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
          </Container>
          <BoxUpdateProfile>
            <UpdateProfile onClick={() => navigate('/menu-medico/perfil/edit')}>
              Atualizar perfil
            </UpdateProfile>
          </BoxUpdateProfile>
        </Section>
      </Main>

      {modal && <ModalDoctor />}
    </>
  );
};

export default PerfilMedico;
