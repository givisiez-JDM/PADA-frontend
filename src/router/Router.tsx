import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/index";
import Cadastro from "../pages/Cadastro/index";
import Login from "../pages/Login/index";
import GlobalStorage from "../Global/UserContext";
import MenuMedico from "../pages/MenuMedico/index";
import PerfilPaciente from "../pages/PerfilPacient";
import FaseDeTratamento from "../pages/FaseDeTratamento";


const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStorage>
      <Routes>
        <Route path="perfil/paciente/:id" element={<PerfilPaciente/>}/>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="menu-medico" element={<MenuMedico />} />
        <Route path="fase-tratamento" element={<FaseDeTratamento />} /> 
      </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default Router;
