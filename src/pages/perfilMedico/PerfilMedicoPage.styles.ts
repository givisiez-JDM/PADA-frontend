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
  gap: 0.625rem;
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

export const ArticleText = styled.div`
  h1 {
    height: 1.25rem;
    margin-bottom: 0.65rem;
    font-weight: bold;
    font-size: 1.125rem;
  }
  p {
    height: 1.875rem;
    padding: 0.5rem;
    margin-bottom: 0.35rem;
    color: ${props => props.theme.colors.variant3};
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export const ArticleCRM = styled.div`
  h1 {
    height: 1.25rem;
    margin-bottom: 0.65rem;
    font-weight: bold;
    font-size: 1.125rem;
  }
  p {
    height: 1.875rem;
    padding: 0.5rem;
    margin-bottom: 0.35rem;
    color: ${props => props.theme.colors.variant3};
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export const ArticleSpecialty = styled.div`
  width: 46.25rem;
  margin-bottom: 0.41rem;
  h1 {
    height: 1.25rem;
    margin-bottom: 0.65rem;
    font-weight: bold;
    font-size: 1.125rem;
  }
  p {
    height: 2.8rem;
    color: ${props => props.theme.colors.variant3};
    font-size: 1rem;
    padding: 0.5rem;
    line-height: normal;
  }
`;

export const ArticleAbout = styled.div`
  width: 46.25rem;
  h1 {
    height: 1.25rem;
    margin-bottom: 0.65rem;
    font-weight: bold;
    font-size: 1.125rem;
  }
  p {
    height: 7.5rem;
    color: ${props => props.theme.colors.variant3};
    font-size: 1rem;
    padding: 0.5rem;
    line-height: normal;
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
    color: ${props => props.theme.colors.variant3};
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export const BoxEditProfile = styled.section`
  margin-top: 0.375rem;
  place-self: flex-end;
`;

export const ChangePassword = styled(Button)`
  width: 6.5rem;
  height: 2.5rem;
`;

export const EditProfile = styled(Button)`
  width: 11.875rem;
  height: 3.125rem;
`;
