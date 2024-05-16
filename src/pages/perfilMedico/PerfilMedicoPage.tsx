import { useState } from 'react';
import { useData } from '../../global/UserContext';
import { useNavigate } from 'react-router-dom';
import ImageLogo from '../../assets/logo.png';
import IconArrow from '../../assets/white-arrow.svg';
import ModalDoctor from '../../components/modalDoctor/ModalDoctor';
import MenuHeader from '../../components/menuHeader/MenuHeader';
import { ArticleAbout, ArticleCRM,
  ArticlePassword, ArticleSpecialty, ArticleText, BoxEditProfile, ChangePassword,
  EditProfile, Logo, Main, Section,
  SectionDoctor } from './PerfilMedicoPage.styles';

const PerfilMedico = () => {
  const { data } = useData();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

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
        <Section>
          <ArticleText>
            <h1>Nome</h1>
            <p>{data?.name}</p>
          </ArticleText>
          <ArticleText>
            <h1>Email</h1>
            <p>{data?.email}</p>
          </ArticleText>
          <ArticleCRM>
            <h1>CRM</h1>
            <p>{data?.CRM}</p>
          </ArticleCRM>
          <ArticleSpecialty>
            <h1>Especialidade</h1>
            <p>{data?.specialty}</p>
          </ArticleSpecialty>
          <ArticleAbout>
            <h1>Sobre</h1>
            <p>
              {data?.about}
            </p>
          </ArticleAbout>
          <ArticlePassword>
            <h1>Senha:</h1>
            <p>********</p>
            <ChangePassword disabled={true}>Alterar</ChangePassword>
          </ArticlePassword>
          <BoxEditProfile>
            <EditProfile onClick={() => navigate('/menu-medico/perfil/edit')}>Editar perfil</EditProfile>
          </BoxEditProfile>
        </Section>
      </Main>

      {modal && <ModalDoctor />}
    </>
  );
};

export default PerfilMedico;
