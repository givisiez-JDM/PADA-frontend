import styled from 'styled-components';
import Button from '../../../components/button/Button';

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
  gap: 1rem;
`;

export const SectionDoctor = styled.div`
  display: flex;
  margin-right: 6rem;
  color: ${props => props.theme.colors.white};
  font-size: larger;

  img {
    margin-left: 1rem;
    height: 1.3rem;
    width: 0.6rem;
    cursor: pointer;
  }
`;

export const BoxUpdateProfile = styled.section`
  place-self: flex-end;
`;

export const UpdateProfile = styled(Button)`
  width: 11.875rem;
  height: 3.125rem;
`;

export const Container = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h3`
  height: 1.25rem;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${props => props.theme.colors.keyboard};
`;

export const InputField = styled.input`
  margin-top: 0.65rem;
  margin-bottom: 0.35rem;
  width: 10.55rem;
  height: 1.9rem;
  border-radius: 1rem;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.colors.variant3};
  color: ${props => props.theme.colors.variant3};
  font-size: 1rem;
`;

export const InputArea = styled.textarea`
  margin-top: 0.65rem;
  margin-bottom: 0.18rem;
  border-radius: 1rem;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.colors.variant3};
  color: ${props => props.theme.colors.variant3};
  width: 46.25rem;
  resize: none;
  overflow: hidden;
  font-size: 1rem;

  &.specialty {
    height: 2.8rem;
  }

  &.about {
    height: 7.5rem;
  }
`;
