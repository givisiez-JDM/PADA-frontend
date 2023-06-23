import useForm from "../Hooks/useForm";
import TextInput from "../components/TextInput/TextInput";
import { PasswordInput } from "../components/PasswordInput/PasswordInput.styles";
import Button from "../components/Button/Button";
import { NavLink, useLocation } from "react-router-dom";

function Login() {
  const name = useForm("nome");

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = params.get("userType");

  return (
    <>
      <div className="white-container">
        <form>
          <TextInput
            type="text"
            name="usuario"
            placeholder="Usuário"
            {...name}
          />
          <PasswordInput type="password" placeholder="Senha" />
          <p>
            <input type="checkbox" /> Lembre da senha
          </p>

          {userType === "medico" && (
            <NavLink to="/menu-medico">
              <Button title="Entrar" color="primary">
                Entrar
              </Button>
            </NavLink>
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
