import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/HomePage";
import Cadastro from "../pages/cadastro/CadastroPage";
import Login from "../pages/login/LoginPage";
import GlobalStorage from "../global/UserContext";
import MenuMedico from "../pages/menuMedico/MenuMedicoPage";
import PerfilPaciente from "../pages/perfilPaciente/PerfilPacientePage";
import VacinasPaciente from "../pages/VacinasPaciente";
// import CadastroPaciente from "../pages/CadastroPaciente/CadastroPacientePage";
// import FasesDeTratamento from "../pages/FasesDeTratamento/FasesDeTratamentoPage";

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
        <Route path="vacinas/paciente/:id" element={<VacinasPaciente />} />
        {/* <Route path="cadastro-paciente" element={<CadastroPaciente />} />
        <Route path="fase-tratamento" element={<FasesDeTratamento />} />  */}
      </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default Router;
