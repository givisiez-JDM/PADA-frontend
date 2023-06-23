import TextInput from "../components/TextInput/TextInput";
import PasswordInput from "../components/PasswordInput/PasswordInput";
import Button from "../components/Button/Button";
import useForm from "../Hooks/useForm";
import { NavLink, useLocation } from "react-router-dom";

function Cadastro() {
  const email = useForm("email");
  const name = useForm("");
  const password = useForm("password");
  const confirmPassword = useForm("");

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = params.get("userType");

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

          {userType === "medico" && (
            <NavLink to="/menu-medico">
              <Button title="Cadastre-se" color="primary">
                Cadastre-se
              </Button>
            </NavLink>
          )}

          {userType === "paciente" && (
            <NavLink to="/menu-paciente">
              <Button title="Cadastre-se" color="primary">
                Cadastre-se
              </Button>
            </NavLink>
          )}

          <p>
            <input type="checkbox" /> Lembre da senha
          </p>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
