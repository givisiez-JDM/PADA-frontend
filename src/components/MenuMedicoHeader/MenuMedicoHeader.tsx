<<<<<<< HEAD
// import {
//   HeaderContainer,
//   InfoMedicoContainer,
//   HeaderImage,
//   HeaderGreeting,
// } from "./MenuMedicoHeader.styles";


// const MenuMedicoHeader = () => {


//   return (
//     <HeaderContainer>
//       <HeaderImage>LOGO</HeaderImage>
//       <InfoMedicoContainer>
//         <HeaderImage>FOTO</HeaderImage>
//         <HeaderGreeting>Olá, Dr. Antônio</HeaderGreeting>
//       </InfoMedicoContainer>
//     </HeaderContainer>
//   );
// };

// export default MenuMedicoHeader;
=======
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
>>>>>>> 5bfbb64a563db6b85e53492513b41285ca609d53
