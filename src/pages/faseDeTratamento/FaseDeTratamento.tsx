import { useState } from "react";
import ModalTreatmentPhase from "../../components/modalTreatmentPhase/ModalTreatmentPhase";
import DefaultPatientPage from "../../components/defaultPatientPage/DefaultPatientPage";
import { PatientType } from "../../types/PatientTypes";
import { AddButton, BoxButton, ChangeButtom, Dosage, FaseProgress, FinalButton, Frequency, Main, Middle, Section, SubTitle, Title, TreatmentDuration} from "./FaseDeTratamento.styles";

const patient:PatientType = { name: 'Ana', photo: '', id: '62d08a04-5eb6-41b1-92fc-52f6c705dc1c', birthDate:'', email: '',telephone:''}

const FaseDeTratamento = () => {
  const [modal, setModal] = useState(false);

  return (
    <Main>
      <DefaultPatientPage patient={patient} >
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
            <AddButton onClick={() => setModal(!modal)}>Adicionar Fase</AddButton>
          </BoxButton>
        </Section>

      {modal && <ModalTreatmentPhase setModal={setModal}/>}
      </DefaultPatientPage>
    </Main>
  );
};

export default FaseDeTratamento;
