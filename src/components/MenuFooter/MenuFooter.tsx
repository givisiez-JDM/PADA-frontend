import { FooterContainer } from "./MenuFooter.styles";
import { MenuFooterButton } from "../MenuFooterButton/MenuFooterButton.tsx";

const MenuFooter = () => {
  return (
    <FooterContainer>
        <MenuFooterButton src="./src/assets/HomeIcone.png" value="Inicio"/>
        <MenuFooterButton src="./src/assets/SairIcone.png" value="Sair"/>
    </FooterContainer>
  )
}

export default MenuFooter;
