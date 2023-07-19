import React from "react";
import Button from "../components/Button/Button";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="centerContent">
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
    </div>
  );
}

export default Home;
