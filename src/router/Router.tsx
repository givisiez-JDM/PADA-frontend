import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/HomePage";
import Cadastro from "../pages/cadastro/CadastroPage";
import Login from "../pages/login/LoginPage";
import GlobalStorage from "../global/UserContext";
import MenuMedico from "../pages/menuMedico/MenuMedicoPage";
import PerfilPaciente from "../pages/perfilPaciente/PerfilPacientePage";
import TreatmentPhases from "../pages/treatmentPhases/TreatmentPhases";
import VacinasPaciente from "../pages/vacinasPaciente/VacinasPaciente";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStorage>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="menu-medico" element={<MenuMedico />} />
        <Route path="/paciente/perfil/:id" element={<PerfilPaciente/>} />
        <Route path="/paciente/tratamento/:id" element={<TreatmentPhases />} />
        <Route path="/paciente/vacinas/:id" element={<VacinasPaciente />} />
      </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default Router;
