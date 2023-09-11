import {
  HeaderContainer,
  InfoMedicoContainer,
  HeaderImage,
  HeaderGreeting,
} from "./MenuMedicoHeader.styles";


const MenuMedicoHeader = () => {


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
