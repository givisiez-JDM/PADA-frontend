import React, { useState } from "react";
import useForm from "../Hooks/useForm";
import TextInput from "../components/TextInput/TextInput";
import { PasswordInput } from "../components/PasswordInput/PasswordInput.styles";
import Button from "../components/Button/Button";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = params.get("userType");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const redirect = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://app-vacina-backend-production.up.railway.app/login/doctor",
        { email, password }
      );
      console.log(response.data);
      setSuccessMessage("Login realizado com sucesso!");
      setTimeout(() => {
        redirect("/menu-medico");
      }, 2000);
    } catch (error) {
      console.log(error);
      setErrorMessage("O Login não pode ser realizado!");
    }
  };

  return (
    <>
      {successMessage && <h4 className="success-message">{successMessage}</h4>}
      {errorMessage && <h4 className="error-message">{errorMessage}</h4>}
      <div className="white-container">
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            name="usuario"
            placeholder="Usuário"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <PasswordInput
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <p>
            <input type="checkbox" /> Lembre da senha
          </p>

          {userType === "medico" && (
            <Button title="Entrar" color="primary" type="submit">
              Entrar
            </Button>
          )}

          {userType === "paciente" && (
            <NavLink to="/menu-paciente">
              <Button title="Entrar" color="primary">
                Entrar
              </Button>
            </NavLink>
          )}
        </form>
      </div>
      <p>Esqueceu a senha?</p>
    </>
  );
}

export default Login;
