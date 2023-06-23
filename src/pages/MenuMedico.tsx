import MenuCard from "../components/MenuCard/MenuCard";
import MenuContainer from "../components/MenuContainer/MenuContainer";
import MenuHeader from "../components/MenuHeader/MenuHeader";
import MenuFooter from "../components/MenuFooter/MenuFooter";

function MenuMedico() {
  return (
    <div className="MenuPageContainer">
      <MenuHeader children="Olá!" />
      <MenuContainer>
        <MenuCard
          imgSrc="./src/assets/pacienteIcone.png"
          text="Conheça cada um dos seus pacientes"
          title="Pacientes"
        />
        <MenuCard
          imgSrc="./src/assets/pacienteIcone.png"
          text="Conheça cada um dos seus pacientes"
          title="Pacientes"
        />
        <MenuCard
          imgSrc="./src/assets/pacienteIcone.png"
          text="Conheça cada um dos seus pacientes"
          title="Pacientes"
        />
        <MenuCard
          imgSrc="./src/assets/pacienteIcone.png"
          text="Conheça cada um dos seus pacientes"
          title="Pacientes"
        />
        <MenuCard
          imgSrc="./src/assets/pacienteIcone.png"
          text="Conheça cada um dos seus pacientes"
          title="Pacientes"
        />
        <MenuCard
          imgSrc="./src/assets/pacienteIcone.png"
          text="Conheça cada um dos seus pacientes"
          title="Pacientes"
        />
      </MenuContainer>
      <MenuFooter />
    </div>
  );
}

export default MenuMedico;
