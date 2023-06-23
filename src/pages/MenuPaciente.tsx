import MenuCard from "../components/MenuCard/MenuCard";
import MenuContainer from "../components/MenuContainer/MenuContainer";
import MenuHeader from "../components/MenuHeader/MenuHeader";
import MenuFooter from "../components/MenuFooter/MenuFooter";

function MenuPaciente() {
  return (
    <div className="MenuPageContainer">
      <MenuHeader children="Olá!" />
      <MenuContainer>
        <MenuCard
          imgSrc="./src/assets/IconeMinhaSaude.png"
          text="Seu histórico de saúde"
          title="Minha saúde"
        />
        <MenuCard
          imgSrc="./src/assets/IconeMinhasVacinas.png"
          text="Seu histórico medicamentoso"
          title="Minhas vacinas"
        />
        <MenuCard
          imgSrc="./src/assets/IconeMinhaSaude.png"
          text="Seu histórico de saúde"
          title="Minha saúde"
        />
        <MenuCard
          imgSrc="./src/assets/IconeMinhasVacinas.png"
          text="Seu histórico medicamentoso"
          title="Minhas vacinas"
        />
        <MenuCard
          imgSrc="./src/assets/IconeMinhaSaude.png"
          text="Seu histórico de saúde"
          title="Minha saúde"
        />
        <MenuCard
          imgSrc="./src/assets/IconeMinhasVacinas.png"
          text="Seu histórico medicamentoso"
          title="Minhas vacinas"
        />
      </MenuContainer>
      <MenuFooter />
    </div>
  );
}

export default MenuPaciente;
