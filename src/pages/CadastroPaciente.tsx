import CadastroPacienteHeader from "../components/CadastroPacienteHeader/CadastroPacienteHeader";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";
import ConteudoCadastroPaciente from "../components/ConteudoCadastroPaciente/ConteudoCadastroPaciente";

const CadastroPaciente = () => {
  return (
    <>
      <CadastroPacienteHeader />
      <SidebarMenu />
      <ConteudoCadastroPaciente />
    </>
  );
};

export default CadastroPaciente;
