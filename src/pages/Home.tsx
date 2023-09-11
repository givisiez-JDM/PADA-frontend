import Button from "../components/Button/Button";
import { NavLink } from "react-router-dom";


function Home() {
  return (
    <div className="blue-container">
      <NavLink to="/login">
        <Button title="Login" color="primary">
          Login
        </Button>
      </NavLink>
      <NavLink to="/cadastro">
        <Button title="Cadastre-se" color="secondary">
          Cadastre-se
        </Button>
      </NavLink>
    </div>
  );
}

export default Home;
