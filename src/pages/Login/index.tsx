import React from "react";
import Wave from "../../Assets/Frame.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import useForm from "../../Hooks/useForm";
import {useData} from '../../Global/GlobalContext'
import iconPerson from "../../Assets/icon-person.svg";
import key from "../../Assets/key.svg";
import { BottomWave, Box, Checkbox, ForgotPassword, Main, TopWave } from "./styles";



const Login = () => {
  const email = useForm("email");
  const password = useForm("password");

  const { userLogin } = useData();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    userLogin(email.value, password.value);
  };

  return (
    <Main>
      <TopWave style={{ backgroundImage: `url(${Wave})` }}/>
      <Box onSubmit={handleSubmit} >
        <Input
          style={{ backgroundImage: `url(${iconPerson})` }}
          type="email"
          name="usuario"
          placeholder="Usuário"
          {...email}
        />

        <Input
          style={{ backgroundImage: `url(${key})` }}
          type="password"
          placeholder="Senha"
          name="senha"
          {...password}
        />

        <Checkbox>
          <input type="checkbox" />
          Lembre da senha
        </Checkbox>

        <Button type="submit" >
          Entrar
        </Button>
      </Box>

      <ForgotPassword>Esqueceu a senha?</ForgotPassword>

      <BottomWave style={{ backgroundImage: `url(${Wave})` }}/>
    </Main>
  );
};

export default Login;
