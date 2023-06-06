import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import { UserDoctor } from "@styled-icons/fa-solid/UserDoctor";
import { UserHeart } from "@styled-icons/remix-fill/UserHeart";

function TipoCadastro() {
  return (
    <div className="blue-container">
      <form>
        <NavLink to="/cadastro">
          <Button title="Médico" color="secondary">
            <UserDoctor className="icon" />
            Médico
          </Button>
        </NavLink>
        <NavLink to="/cadastro">
          <Button title="Paciente" color="secondary">
            <UserHeart className="icon" />
            Paciente
          </Button>
        </NavLink>
      </form>
    </div>
  );
}

export default TipoCadastro;
