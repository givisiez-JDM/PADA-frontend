import React from "react";
import Wave from "../../assets/Frame.svg";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import iconPerson from "../../assets/icon-person.svg";
import key from "../../assets/key.svg";
import { useLogin } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { BottomWave,Box,Checkbox,ForgotPassword,IncorrectUser,Main,TopWave,} from "./LoginPage.styles";
import { useData } from "../../global/UserContext";

const Login = () => {
  const { onSubmit, errors, register, getValues } = useLogin();
  const [saveUser, setSaveUser] = React.useState(false)
  const navigate = useNavigate();
 
  const {error} = useData()
  const values = getValues('password')
  
  const savePasswordLocally = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked === true){
      setSaveUser(true)
      
    }else {
      setSaveUser(false)
      
    }
  }

  const sendreq = () => {
    onSubmit()
    saveUser && window.localStorage.setItem('password', values)
  }

   
  return (
    <Main>
      <TopWave style={{ backgroundImage: `url(${Wave})` }} />
      <Box onSubmit={sendreq}>
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
        <span onClick={() => navigate("/cadastro")}>Entrar</span>
      </ForgotPassword>

      <BottomWave style={{ backgroundImage: `url(${Wave})` }} />
    </Main>
  );
};

export default Login;
