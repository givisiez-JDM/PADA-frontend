import React from "react";
import wave from "../../assets/wave.png";
import iconPerson from "../../assets/icon-person.svg";
import iconEmail from "../../assets/email.svg";
import iconKey from "../../assets/key.svg";
import { useSignup } from "../../hooks/useForm";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { BottomWave,Box,Checkbox,ErrorMessage,FooterDescription,Main,Title,TopWave,} from "./CadastroPage.styles";
import { useData } from "../../global/UserContext";

const Signup = () => {
  const { onSubmit, errors, register, getValues } = useSignup();
  const [saveUser, setSaveUser] = React.useState(false);

  const navigate = useNavigate();
  const { error } = useData();
  const values = getValues("password");

  const savePasswordLocally = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true) {
      setSaveUser(true);
    } else {
      setSaveUser(false);
    }
  };

  const sendReq = () => {
    onSubmit();
    saveUser && window.localStorage.setItem("password", values);
  };

  return (
    <Main>
      <TopWave style={{ backgroundImage: `url(${wave})` }} />
      <Title>Crie sua conta</Title>
      <Box onSubmit={sendReq}>
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

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Checkbox>
          <input type="checkbox" checked={saveUser} onChange={savePasswordLocally} />
          Lembre da senha
        </Checkbox>

        <Button type="submit" onClick={onSubmit}>
          Entrar
        </Button>
      </Box>

      <FooterDescription>
        Já tem conta? <span onClick={() => navigate("/login")}>Entrar</span>
      </FooterDescription>

      <BottomWave style={{ backgroundImage: `url(${wave})` }} />
    </Main>
  );
};

export default Signup;
