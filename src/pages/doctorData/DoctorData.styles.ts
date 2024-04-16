import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Logo = styled.img`
  display: flex;
  margin-left: 6rem;
  height: 6rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
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

export const InputField = styled.input`
  margin-bottom: 1rem;
  width: 12rem;
  border-radius: 1rem;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.variant3};
  color: ${(props) => props.theme.colors.variant3};
`;

export const InputPass = styled.input`
  border: none;
  width: 12rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.variant3};
`;

export const InputArea = styled.textarea`
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.variant3};
  color: ${(props) => props.theme.colors.variant3};
  width: 50%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 6rem;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.keyboard};
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

export const PasswordBox = styled.div`
  display: flex;
  align-items: center;
`;
