import React from "react";
import Wave from "../../Assets/Frame.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import iconPerson from "../../Assets/icon-person.svg";
import key from "../../Assets/key.svg";
import { useLogin } from "../../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import { BottomWave,Box,Checkbox,ForgotPassword,Main,TopWave,} from "./styles";

const Login = () => {
  const { onSubmit, errors, register } = useLogin();
  const navigate = useNavigate();

  return (
    <Main>
      <TopWave style={{ backgroundImage: `url(${Wave})` }} />
      <Box onSubmit={onSubmit}>
        <Input
          style={{ backgroundImage: `url(${iconPerson})` }}
          type="email"
          placeholder="Usuário"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          style={{ backgroundImage: `url(${key})` }}
          type="password"
          placeholder="Senha"
          {...register("password")}
          error={errors.password?.message}
        />

        <Checkbox>
          <input type="checkbox" />
          Lembre da senha
        </Checkbox>

        <Button type="submit">Entrar</Button>
      </Box>

      <ForgotPassword>
        Ainda não tem conta?{" "}
        <span onClick={() => navigate("/cadastro")}>Entrar</span>
      </ForgotPassword>

      <BottomWave style={{ backgroundImage: `url(${Wave})` }} />
    </Main>
  );
};

export default Login;
