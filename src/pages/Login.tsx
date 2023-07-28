import React, { useState } from "react";
import TextInput from "../components/TextInput/TextInput";
import { PasswordInput } from "../components/PasswordInput/PasswordInput.styles";
import Button from "../components/Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
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

      const pacientes = await axios.get(
        "https://app-vacina-backend-production.up.railway.app/login/doctor"
      );
      console.log(response.data);
      console.log(response.data.user.id);
      setSuccessMessage("Login realizado com sucesso!");
      setTimeout(() => {
        console.log("redirecionamento");
        redirect("/menu-medico");
      }, 1000);
    } catch (error) {
      console.log(error);
      setErrorMessage("O Login não pode ser realizado!");
    }
  };

  return (
    <>
      <div className="centerContent">
        {successMessage && (
          <h4 className="success-message">{successMessage}</h4>
        )}
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

            <Button title="Entrar" color="primary" type="submit">
              Entrar
            </Button>
          </form>
        </div>
        <p>Esqueceu a senha?</p>
      </div>
    </>
  );
}

export default Login;
