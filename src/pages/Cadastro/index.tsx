import React from "react";
import wave from "../../Assets/wave.png";
import iconPerson from "../../Assets/icon-person.svg";
import iconEmail from "../../Assets/email.svg";
import iconKey from "../../Assets/key.svg";
import { useSignup } from "../../Hooks/useForm";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { BottomWave,Box,Checkbox,FooterDescription,Main,Title,TopWave,} from "./styles";

const Signup = () => {
  const { onSubmite, errors, register } = useSignup();
  const navigate = useNavigate();

  return (
    <Main>
      <TopWave style={{ backgroundImage: `url(${wave})` }} />
      <Title>Crie sua conta</Title>
      <Box onSubmit={onSubmite}>
        <Input
          type="text"
          placeholder="Nome do usuário"
          style={{ backgroundImage: `url(${iconPerson})` }}
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          type="email"
          placeholder="Email"
          style={{ backgroundImage: `url(${iconEmail})` }}
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          type="password"
          placeholder="Senha"
          style={{ backgroundImage: `url(${iconKey})` }}
          {...register("password")}
          error={errors.password?.message}
        />

        <Input
          type="password"
          placeholder="confirmar senha"
          style={{ backgroundImage: `url(${iconKey})` }}
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <Checkbox>
          <input type="checkbox" />
          Lembre da senha
        </Checkbox>

        <Button type="submit">Entrar</Button>
      </Box>

      <FooterDescription>
        Já tem conta? <span onClick={() => navigate("/login")}>Entrar</span>
      </FooterDescription>

      <BottomWave style={{ backgroundImage: `url(${wave})` }} />
    </Main>
  );
};

export default Signup;
