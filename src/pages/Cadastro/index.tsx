import React from "react";
import wave from "../../Assets/wave.png";
import iconPerson from "../../Assets/icon-person.svg";
import iconEmail from "../../Assets/email.svg";
import iconKey from "../../Assets/key.svg";
import useForm from "../../Hooks/useForm";
import useAxios from "../../Hooks/useAxios";
import { useData } from "../../Global/GlobalContext";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { UserRequest } from "../../Requests/UserRequest";
import useValidatePassword from "../../Hooks/useValidatePassword";
import { BottomWave, Box, Checkbox, ErrorMessage, FooterDescription, Main, Title, TopWave } from "./styles";

const userRequest = new UserRequest();

const Signup = () => {
  const name = useForm("name");
  const email = useForm("email");
  const password = useForm("password");
  const confirmPassword = useForm('password')

  const { post } = useAxios();
  const { userLogin } = useData();
  const {validatePassword, errorMessage} = useValidatePassword()

 const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const body = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    
    validatePassword(password.value, confirmPassword.value)
    
    const { url } = userRequest.USER_SIGNUP(body);
    
    await post(url, body);
    
    userLogin(email.value, password.value);
  };

  return (
    <Main>
      <TopWave style={{ backgroundImage: `url(${wave})` }}/>
      <Title>Crie sua conta</Title>
      <Box onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome do usuário"
          style={{ backgroundImage: `url(${iconPerson})` }}
          {...name}
         
        />

        <Input
          type="email"
          placeholder="Email"
          style={{ backgroundImage: `url(${iconEmail})` }}
          {...email}
        />

        <Input
          type="text"
          placeholder="Senha"
          style={{ backgroundImage: `url(${iconKey})` }}
          {...password}
        />

        <Input
          type="text"
          placeholder="confirmar senha"
          style={{ backgroundImage: `url(${iconKey})` }}
          {...confirmPassword}
        />

        {
          errorMessage && 
        <ErrorMessage>{errorMessage}</ErrorMessage>

        }

        <Checkbox>
          <input type="checkbox" />
          Lembre da senha
        </Checkbox>

        <Button type="submit">
          Entrar
        </Button>
      </Box>

      <FooterDescription>
        Já tem conta?{" "}
            <span onClick={() => navigate('/login')}>Entrar</span>
      </FooterDescription>
      
      <BottomWave style={{ backgroundImage: `url(${wave})` }}/>
    </Main>
  );
};

export default Signup;
