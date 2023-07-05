import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";

function TipoLogin() {
  return (
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
  );
}

export default TipoLogin;
