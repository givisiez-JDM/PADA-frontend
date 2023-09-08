import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import MenuMedico from "../pages/MenuMedico";
import CadastroPaciente from "../pages/CadastroPaciente";
import FasesDeTratamento from "../pages/FasesDeTratamento";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="menu-medico" element={<MenuMedico />} />
        <Route path="cadastro-paciente" element={<CadastroPaciente />} />
        <Route path="fase-tratamento" element={<FasesDeTratamento />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
