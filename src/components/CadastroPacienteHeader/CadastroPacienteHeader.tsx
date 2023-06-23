import {
  HeaderContainer,
  HeaderLogo,
  HeaderTitle,
  HeaderGreeting,
} from "./CadastroPacienteHeader.styles";

const CadastroPacienteHeader = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>LOGO</HeaderLogo>
      <div>
        <HeaderTitle>Bem-Vindo!</HeaderTitle>
        <HeaderGreeting>Olá, Dr. ????</HeaderGreeting>
      </div>
    </HeaderContainer>
  );
};

export default CadastroPacienteHeader;
