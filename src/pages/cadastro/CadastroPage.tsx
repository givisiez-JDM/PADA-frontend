import React from "react";
import wave from "../../assets/wave.png";
import iconPerson from "../../assets/icon-person.svg";
import iconEmail from "../../assets/email.svg";
import iconKey from "../../assets/key.svg";
import { useSignup } from "../../hooks/useForm";
import Input from "../../components/input/Input";
import check from "../../assets/check.svg";
import eyesOpen from "../../assets/eyes-open.svg";
import eyesClosed from "../../assets/eyes-closed.svg";
import { useNavigate } from "react-router-dom";
import { BottomWave, Box, ButtonSignup, Checkbox, ErrorMessage, FooterDescription, I, Eyes, InputBox, Main, Sucess, Title, TopWave} from "./CadastroPage.styles";
import { useData } from "../../global/UserContext";

const Signup = () => {
  const {onSubmit, errors, data, register, getValues} = useSignup();
  const [saveUser, setSaveUser] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [visiblePassword, setVisiblePassword] = React.useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = React.useState(false);

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
  
  const sendReq = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();

    saveUser && window.localStorage.setItem("password", values);
  };

  React.useEffect(() => {
    if (data === 201) setModal(true);
  }, [modal, data]);

  return (
    <Main>
      <TopWave style={{ backgroundImage: `url(${wave})` }} />
      {modal ? (
        <>
          <Box>
            <Sucess>
              <img src={check} alt="check" />

              <h1>Cadastro realizado</h1>
              <h1>com sucesso!</h1>

              <button onClick={() => navigate("/login")}>Entrar</button>
            </Sucess>
          </Box>
        </>
      ) : (
        <>
          <Title>Crie sua conta</Title>
          <Box onSubmit={(event) => sendReq(event)}>
            <InputBox>
              <I src={iconPerson} alt="key" />
              <Input
                type="text"
                placeholder="Nome do usuário"
                {...register("name")}
                error={errors.name?.message}
              />
            </InputBox>

            <InputBox>
              <I src={iconEmail} alt="key" />
              <Input
                type="email"
                placeholder="Email"
                {...register("email")}
                error={errors.email?.message}
              />
            </InputBox>

            <InputBox>
              <I src={iconKey} alt="key" />
              <Input
                type={visiblePassword ? "text" : "password"}
                placeholder="Senha"
                {...register("password")}
                error={errors.password?.message}
              />
              <Eyes src={visiblePassword ? eyesOpen : eyesClosed} alt="icon person" onClick={() => setVisiblePassword(!visiblePassword)} />
            </InputBox>

            <InputBox>
              <I src={iconKey} alt="key" />
              <Input
                type={visibleConfirmPassword ? "text" : "password"}
                placeholder="confirmar senha"
                {...register("confirmPassword")}
                error={errors.confirmPassword?.message}
              />
              <Eyes src={visibleConfirmPassword ? eyesOpen : eyesClosed} alt="icon person" onClick={() => setVisibleConfirmPassword(!visibleConfirmPassword)} />
            </InputBox>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Checkbox>
              <input type="checkbox" checked={saveUser} onChange={savePasswordLocally} />
              Lembre da senha
            </Checkbox>

            <ButtonSignup type="submit" onClick={onSubmit}>
              Cadastrar
            </ButtonSignup>
          </Box>

          <FooterDescription>
            Já tem conta? <span onClick={() => navigate("/login")}>Entrar</span>
          </FooterDescription>
        </>
      )}

      <BottomWave style={{ backgroundImage: `url(${wave})` }} />
    </Main>
  );
};

export default Signup;

