import React, { useState } from "react";
import axios from "axios";
import TextInput from "../components/TextInput/TextInput";
import PasswordInput from "../components/PasswordInput/PasswordInput";
import Button from "../components/Button/Button";
import useForm from "../Hooks/useForm";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const redirect = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://app-vacina-backend-production.up.railway.app/doctor",
        { name, email, password }
      );
      console.log(response.data);
      setSuccessMessage("Cadastro realizado com sucesso!");
      setTimeout(() => {
        redirect("/menu-medico");
      }, 2000);
    } catch (error) {
      console.log(error);
      setErrorMessage("O cadastro não pode ser realizado!");
    }
  };

  return (
    <>
      {successMessage && <h4 className="success-message">{successMessage}</h4>}
      {errorMessage && <h4 className="error-message">{errorMessage}</h4>}
      <h3>Crie sua conta</h3>
      <div className="white-container">
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            name="name"
            placeholder="Nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextInput
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <PasswordInput
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <PasswordInput
            type="password"
            name="confirmPassword"
            placeholder="Confirmar senha"
          />

          <Button title="Cadastre-se" color="primary" type="submit">
            Cadastre-se
          </Button>

          <p>
            <input type="checkbox" /> Lembre da senha
          </p>
        </form>
      </div>
    </>
  );
};

export default Cadastro;
