import { FooterContainer } from "./MenuFooter.styles";
import { MenuFooterButton } from "../MenuFooterButton/MenuFooterButton.tsx";

const MenuFooter = () => {
  return (
    <FooterContainer>
      <MenuFooterButton
        src="./src/assets/HomeIcone.png"
        value="Inicio"
        color="blue"
        route="/"
      />

      <MenuFooterButton
        src="./src/assets/SairIcone.png"
        value="Sair"
        color="grey"
        route="/tipo-login"
      />
    </FooterContainer>
  );
};

export default MenuFooter;
