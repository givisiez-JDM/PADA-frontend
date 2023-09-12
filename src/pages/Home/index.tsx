import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import { ContainerHome } from "./styles";




function Home() {
    return (
      <ContainerHome>
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
      </ContainerHome>
    );
  }
  
  export default Home;