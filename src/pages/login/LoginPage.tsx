import React from "react";
import Wave from "../../assets/Frame.svg";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import iconPerson from "../../assets/icon-person.svg";
import key from "../../assets/key.svg";
import eyesOpen from "../../assets/eyes-open.svg";
import eyesClosed from "../../assets/eyes-closed.svg";
import { useLogin } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { BottomWave, Box, Checkbox, ForgotPassword, Image, Eyes, IncorrectUser, InputBox, Main, TopWave, } from "./LoginPage.styles";
import { useData } from "../../global/UserContext";


const Login = () => {
  const { onSubmit, errors, register, getValues } = useLogin();
  const [saveUser, setSaveUser] = React.useState(false)
  const [visiblePassword, setVisiblePassword] = React.useState(false)
  const navigate = useNavigate();

  const { error } = useData()
  const values = getValues('password')

  const savePasswordLocally = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true) {
      setSaveUser(true)

    } else {
      setSaveUser(false)

    }
  }

  const sendreq = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit()
    saveUser && window.localStorage.setItem('password', values)
  }


  return (
    <Main>
      <TopWave style={{ backgroundImage: `url(${Wave})` }} />
      <Box onSubmit={event => sendreq(event)}>
        <InputBox>
          <Image src={iconPerson} alt="icon person" />
          <Input
            type="email"
            placeholder="Email"
            {...register("email")}
            error={errors.email?.message}
          />
        </InputBox>

        <InputBox>
          <Image src={key} alt="icon person" />
          <Input
            type={visiblePassword ? "text" : "password"}
            placeholder="Senha"
            {...register("password")}
            error={errors.password?.message}
          />
          <Eyes src={visiblePassword ? eyesOpen : eyesClosed} alt="icon person" onClick={() => setVisiblePassword(!visiblePassword)} />
        </InputBox>


        {error && <IncorrectUser>{error}</IncorrectUser>}

        <Checkbox>
          <input
            type="checkbox"
            checked={saveUser}
            onChange={savePasswordLocally}

          />
          Lembre da senha
        </Checkbox>

        <Button type="submit" onClick={onSubmit}>Entrar</Button>
      </Box>

      <ForgotPassword>
        Ainda não tem conta?{" "}
        <span onClick={() => navigate("/cadastro")}>Criar conta</span>
      </ForgotPassword>

      <BottomWave style={{ backgroundImage: `url(${Wave})` }} />
    </Main>
  );
};

export default Login;
