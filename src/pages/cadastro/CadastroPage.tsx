import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import wave from '../../assets/wave.png';
import iconPerson from '../../assets/icon-person.svg';
import iconEmail from '../../assets/email.svg';
import iconKey from '../../assets/key.svg';
import { useSignup } from '../../hooks/useForm';
import Input from '../../components/input/Input';
import check from '../../assets/check.svg';
import eyesOpen from '../../assets/eyes-open.svg';
import eyesClosed from '../../assets/eyes-closed.svg';
import { useNavigate } from 'react-router-dom';
import {
  BottomWave, Box, Checkbox, ErrorMessage, FooterDescription, Image, Eyes,
  InputBox, Main, Sucess, Title, TopWave,
} from './CadastroPage.styles';
import { useData } from '../../global/UserContext';
import Button from '../../components/button/Button';

const Signup = () => {
  const { onSubmit, errors, data, register, getValues } = useSignup();
  const [saveUser, setSaveUser] = useState(false);
  const [modal, setModal] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();
  const { error } = useData();
  const values = getValues('password');

  const DATA_VALUE = 201;

  const savePasswordLocally = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true) {
      setSaveUser(true);
    }
    else {
      setSaveUser(false);
    }
  };

  const sendReq = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();

    saveUser && window.localStorage.setItem('password', values);
  };

  useEffect(() => {
    if (data === DATA_VALUE) setModal(true);
  }, [modal, data]);

  useEffect(() => {
    const BadRequestCode = 400;
    const UnathorizedCode = 401;
    const NotFoundCode = 404;
    if (error) {
      if (data === BadRequestCode) {
        setErrorMsg('E-mail ou senha incorretos');
      }
      else if (data === UnathorizedCode) {
        setErrorMsg('Senha inválida');
      }
      else if (data === NotFoundCode) {
        setErrorMsg('Cadastro não encontrado');
      }
      else {
        setErrorMsg('Erro inesperado no servidor');
      }
    }
    else {
      setErrorMsg('');
    }
  }, [error]);

  const sucessBox = () => (
    <Box>
      <Sucess>
        <img src={check} alt="check" />

        <p>Cadastro realizado</p>
        <p>com sucesso!</p>

        <Button onClick={() => navigate('/login')}>Entrar</Button>
      </Sucess>
    </Box>
  );

  const formBox = () => (
    <>
      <Title>Crie sua conta</Title>
      <Box onSubmit={event => sendReq(event)}>
        <InputBox>
          <Image src={iconPerson} alt="key" />
          <Input
            type="text"
            placeholder="Nome do usuário"
            {...register('name')}
            error={errors.name?.message}
          />
        </InputBox>

        <InputBox>
          <Image src={iconEmail} alt="key" />
          <Input
            type="email"
            placeholder="Email"
            {...register('email')}
            error={errors.email?.message}
          />
        </InputBox>

        <InputBox>
          <Image src={iconKey} alt="key" />
          <Input
            type={visiblePassword ? 'text' : 'password'}
            placeholder="Senha"
            {...register('password')}
            error={errors.password?.message}
          />
          <Eyes
            src={visiblePassword ? eyesOpen : eyesClosed}
            alt={visiblePassword ? 'Ocultar senha' : 'Mostrar senha'}
            onClick={() => setVisiblePassword(!visiblePassword)}
          />
        </InputBox>

        <InputBox>
          <Image src={iconKey} alt="key" />
          <Input
            type={visibleConfirmPassword ? 'text' : 'password'}
            placeholder="Confirmar senha"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <Eyes
            src={visibleConfirmPassword ? eyesOpen : eyesClosed}
            alt={visibleConfirmPassword ? 'Ocultar senha' : 'Mostrar senha'}
            onClick={() => setVisibleConfirmPassword(!visibleConfirmPassword)}
          />
        </InputBox>

        <ErrorMessage>{errorMsg}</ErrorMessage>

        <Checkbox>
          <input type="checkbox" checked={saveUser} onChange={savePasswordLocally} />
          Lembre da senha
        </Checkbox>

        <Button type="submit" onClick={onSubmit}>
          Cadastrar
        </Button>
      </Box>

      <FooterDescription>
        Já tem conta?
        <span onClick={() => navigate('/login')}>Entrar</span>
      </FooterDescription>
    </>
  );
  return (
    <Main>
      <TopWave style={{ backgroundImage: `url(${wave})` }} />
      {modal ? sucessBox() : formBox()}
      <BottomWave style={{ backgroundImage: `url(${wave})` }} />
    </Main>
  );
};

export default Signup;
