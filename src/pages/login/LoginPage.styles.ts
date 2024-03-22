import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  font-family: "Poppins", sans-serif;
`;

export const TopWave = styled.div`
  height: 33vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transform: rotate(180deg);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BottomWave = styled.div`
  height: 33vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Box = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem 0;
  min-height: 14rem;
  width: 25rem;
  border: 3px solid #4c7abb;
  border-radius: 6px;
`;

export const InputBox = styled.div`
  display: flex;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  height: 1.2rem;
  top: 0.5rem;
  left: 0.6rem;
  box-sizing: border-box;
`;

export const Eyes = styled.img`
  position: absolute;
  height: 1.2rem;
  top: 0.5rem;
  right: 0.6rem;
  box-sizing: border-box;
`;

export const Checkbox = styled.p`
  display: flex;
  align-items: center;
  width: 13rem;
  font-size: 0.8rem;
`;

export const ButtonLogin = styled.button`
  background-color: ${(props) => props.theme.colors.variant2};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 15px;
  width: 13rem;
  height: 2rem;
  font-weight: 500;
`;

export const ForgotPassword = styled.p`
  position: relative;
  top: 1rem;
  font-size: small;
  font-weight: 500;

  span {
    color: ${(props) => props.theme.colors.variant2};
    cursor: pointer;
  }
`;

export const IncorrectUser = styled.p`
  text-indent: -3.3rem;
  color: red;
  font-size: x-small;
  font-weight: 500;
  word-wrap: break-word;
  max-width: 12rem;
`;
