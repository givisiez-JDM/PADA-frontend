import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import Background from "../components/Background/Background";

function TipoCadastro() {
  return (
    <>
    <div className="blue-container">
      <form>
        <NavLink to="/cadastro?userType=medico">
          <Button title="Médico" color="secondary">
            Médico
          </Button>
        </NavLink>
      </form>
    </div>
    <Background/>
    </>
  );
}

export default TipoCadastro;
