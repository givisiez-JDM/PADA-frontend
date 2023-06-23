import {
  HeaderContainer,
  HeaderLogo,
  HeaderTitle,
  HeaderGreeting,
} from "./CadastroPacienteHeader.styles";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const CadastroPacienteHeader = () => {
  const menuItems = ["Meu perfil", "Sair"];

  return (
    <HeaderContainer>
      <HeaderLogo>LOGO</HeaderLogo>
      <div>
        <HeaderTitle>Bem-Vindo!</HeaderTitle>
        <HeaderGreeting>Olá, Dr. ????</HeaderGreeting>
      </div>
      <DropdownMenu items={menuItems} />
    </HeaderContainer>
  );
};

export default CadastroPacienteHeader;
