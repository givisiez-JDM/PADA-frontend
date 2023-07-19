import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import { UserDoctor } from "@styled-icons/fa-solid/UserDoctor";
import { UserHeart } from "@styled-icons/remix-fill/UserHeart";
import Background from "../components/Background/Background";

function TipoLogin() {
  return (
    <>
    <div className="blue-container">
      <form>
        <NavLink to="/login?userType=medico">
          <Button title="Médico" color="secondary">
            Médico
          </Button>
        </NavLink>
        <NavLink to="/login?userType=paciente">
          <Button title="Paciente" color="secondary">
            Paciente
          </Button>
        </NavLink>
      </form>
    </div>
      <Background/>
    </>
  );
}

export default TipoLogin;
