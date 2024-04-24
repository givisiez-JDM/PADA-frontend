import styled from 'styled-components';
import Button from '../../components/button/Button';

export const Main = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  font-size: 1.125rem;
`;

export const Logo = styled.img`
  display: flex;
  margin-left: 6rem;
  height: 6rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  padding: 3.15rem 4.1rem;
  flex-direction: column;
  gap: 1.3rem;
`;

export const SectionDoctor = styled.div`
  display: flex;
  margin-right: 6rem;
  color: white;
  font-size: larger;

  img {
    margin-left: 1rem;
    height: 1.3rem;
    width: 0.6rem;
    cursor: pointer;
  }
`;

export const ArticleName = styled.div`
  h1 {
    height: 1.25rem;
    margin-bottom: 0.65rem;
    font-weight: 600;
  }
`;

export const ArticleEmail = styled.div`
  h1 {
    height: 1.25rem;
    margin-bottom: 0.65rem;
    font-weight: 600;
  }
`;

export const ArticleCRM = styled.div`
  h1 {
    height: 1.25rem;
    margin-bottom: 0.65rem;
    font-weight: 600;
  }
`;

export const ArticleEspecialidade = styled.div`
  h1 {
    height: 1.25rem;
    margin-bottom: 0.65rem;
    font-weight: 600;
  }
`;

export const ArticleSobre = styled.div`
  h1 {
    height: 1.25rem;
    margin-bottom: 0.65rem;
    font-weight: 600;
  }
`;

export const ArticlePassword = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: center;
  p {
    margin-top: 0.23rem;
  }
`;

export const BoxEditProfile = styled.section`
  place-self: flex-end;
`;

export const AlterarSenha = styled(Button)`
  width: 6.5rem;
  height: 2.5rem;
`;

export const EditarPerfil = styled(Button)`
  width: 11.875rem;
  height: 3.125rem;
`;
