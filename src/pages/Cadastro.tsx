import React from "react";
import TextInput from "../components/TextInput/TextInput";
import PasswordInput from "../components/PasswordInput/PasswordInput";
import Button from "../components/Button/Button";
import useForm from "../Hooks/useForm";

function Cadastro() {
  const email = useForm("email");
  const name = useForm("");
  const password = useForm("password");
  const confirmPassword = useForm("");

  return (
    <>
      <h3>Crie sua conta</h3>
      <div className="white-container">
        <form>
          <TextInput type="text" name="name" placeholder="Nome" {...name} />
          <TextInput
            type="email"
            name="email"
            placeholder="E-mail"
            {...email}
          />
          <PasswordInput
            type="password"
            name="password"
            placeholder="Senha"
            {...password}
          />
          <PasswordInput
            type="password"
            name="confirmPassword"
            placeholder="Confirmar senha"
            {...confirmPassword}
          />
          <Button title="Cadastre-se" color="primary">
            Cadastre-se
          </Button>
          <p>
            <input type="checkbox" /> Lembre da senha
          </p>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
