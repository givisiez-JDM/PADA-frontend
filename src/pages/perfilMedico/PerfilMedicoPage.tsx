import { useState } from 'react';
import { useData } from '../../global/UserContext';
import ImageLogo from '../../assets/logo.png';
import IconArrow from '../../assets/white-arrow.svg';
import ModalDoctor from '../../components/modalDoctor/ModalDoctor';
import MenuHeader from '../../components/menuHeader/MenuHeader';
import { AlterarSenha, ArticleCRM, ArticleEmail, ArticleEspecialidade,
  ArticleName, ArticlePassword, ArticleSobre, BoxEditProfile, EditarPerfil,
  Logo, Main, Section, SectionDoctor } from './PerfilMedicoPage.styles';

const PerfilMedico = () => {
  const { data } = useData();
  const [modal, setModal] = useState(false);

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
          <ArticleName>
            <h1>Nome</h1>
            <p>{data?.name}</p>
          </ArticleName>
          <ArticleEmail>
            <h1>Email</h1>
            <p>{data?.email}</p>
          </ArticleEmail>
          <ArticleCRM>
            <h1>CRM</h1>
            <p>{data?.CRM}</p>
          </ArticleCRM>
          <ArticleEspecialidade>
            <h1>Especialidade</h1>
            <p>{data?.specialty}</p>
          </ArticleEspecialidade>
          <ArticleSobre>
            <h1>Sobre</h1>
            <p>
              {data?.about}
            </p>
          </ArticleSobre>
          <ArticlePassword>
            <h1>Senha:</h1>
            <p>********</p>
            <AlterarSenha disabled={true}>Alterar</AlterarSenha>
          </ArticlePassword>
          <BoxEditProfile>
            <EditarPerfil>Editar perfil</EditarPerfil>
          </BoxEditProfile>
        </Section>
      </Main>

      {modal && <ModalDoctor />}
    </>
  );
};

export default PerfilMedico;
