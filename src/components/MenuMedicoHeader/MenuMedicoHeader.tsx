import {
  HeaderContainer,
  InfoMedicoContainer,
  HeaderImage,
  HeaderGreeting,
} from "./MenuMedicoHeader.styles";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const MenuMedicoHeader = () => {
  const menuItems = ["Meu perfil", "Sair"];

  return (
    <HeaderContainer>
      <HeaderImage>LOGO</HeaderImage>
      <InfoMedicoContainer>
        <HeaderImage>FOTO</HeaderImage>
        <HeaderGreeting>Olá, Dr. Antônio</HeaderGreeting>
      </InfoMedicoContainer>
    </HeaderContainer>
  );
};

export default MenuMedicoHeader;
