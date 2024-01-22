import {
  AddButton,
  BoxButton,
  ChangeButtom,
  Dosage,
  FaseProgress,
  FinalButton,
  Frequency,
  Header,
  IconX,
  Logo,
  Main,
  Middle,
  Nav,
  Section,
  SubTitle,
  Title,
  TreatmentDuration,
} from "./styles";
import iconPatient from "../../assets/iconPatient.svg";
import X from "../../assets/X.svg";
import greyArrow from "../../assets/greyArrow.svg";
import ModalTreatmentPhase from "../../components/ModalTreatmentPhase";
import React from "react";
import { useNavigate } from "react-router-dom";

const FaseDeTratamento = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <Main>
      <Header>
        <Logo src={iconPatient} />
        <p>Maria</p>
        <IconX src={X} alt="" />
      </Header>
      <Middle>
        <Nav>
          <p>
            Perfil
            <img src={greyArrow} alt="" />
          </p>
          <p>
            Fases
            <img src={greyArrow} alt="" />
          </p>
          <p>
            Vacinas
            <img src={greyArrow} alt="" />
          </p>
        </Nav>
        <Section>
          <Title>Fase</Title>
          <SubTitle>Fase 1</SubTitle>
          <TreatmentDuration>
            <h1>Duração da fase</h1>
            <p>Início: 27/03/2023</p>
            <p>Fim: 27/09/2023</p>
          </TreatmentDuration>
          <Frequency>
            <h1>Periodicidade</h1>
            <p>A cada 7 dias</p>
          </Frequency>
          <Dosage>
            <h1>Dosagem do medicamento</h1>
            <p>1:10</p>
          </Dosage>

          <FaseProgress>
            <h1>Progresso da fase</h1>
            <p>60%</p>
            <input type="range" min="0" max="100" step="1" />
            <ChangeButtom>Alterar</ChangeButtom>
          </FaseProgress>

          <BoxButton>
            <FinalButton>Finalizar Fase</FinalButton>
            <AddButton onClick={() => setModal(!modal)}>Adcionar fase</AddButton>
          </BoxButton>
        </Section>
      </Middle>

      {modal && <ModalTreatmentPhase />}
    </Main>
  );
};

export default FaseDeTratamento;
