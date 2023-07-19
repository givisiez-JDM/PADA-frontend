import MenuMedicoHeader from "../components/MenuMedicoHeader/MenuMedicoHeader";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";
import ConteudoPerfilPaciente from "../components/ConteudoPerfilPaciente/ConteudoPerfilPaciente";

const perfilMenu = [{ name: "Perfil" }, { name: "Fases" }, { name: "Vacinas" }];

export default function PerfilPaciente() {
  return (
    <>
      <MenuMedicoHeader />
      <div style={{ display: "flex" }}>
        <SidebarMenu items={perfilMenu} />
        <ConteudoPerfilPaciente />
      </div>
    </>
  );
}
