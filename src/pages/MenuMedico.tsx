import MenuMedicoHeader from "../components/MenuMedicoHeader/MenuMedicoHeader";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";
import MenuContainer from "../components/MenuContainer/MenuContainer";
import { SearchbarDiv } from "../components/MenuContainer/MenuContainer.styles";
import TextInput from "../components/TextInput/TextInput";
import Button from "../components/Button/Button";
import { NavLink } from "react-router-dom";

const items = [
  { name: "Amanda C." },
  { name: "Emanuel M." },
  { name: "João R. P." },
  { name: "Mariana D." },
  { name: "Juliano G." },
];

function MenuMedico() {
  return (
    <>
      <MenuMedicoHeader />
      <SidebarMenu items={items} />
      <MenuContainer>
        <SearchbarDiv>
          <TextInput
            type="text"
            name="buscar-paciente"
            style={{ width: "30vw" }}
          />
          <NavLink to="/cadastro-paciente">
            <Button
              color="primary"
              title="cadastrar-paciente"
              style={{ width: "9vw" }}
            >
              Cadastrar Paciente
            </Button>
          </NavLink>
        </SearchbarDiv>
      </MenuContainer>
    </>
  );
}

export default MenuMedico;
