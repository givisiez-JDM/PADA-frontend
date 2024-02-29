import { useState } from "react";
import DefaultPatientPage from "../../components/defaultPatientPage/DefaultPatientPage";
import ModalTreatmentPhase from "../../components/modalTreatmentPhase/ModalTreatmentPhase";
import Phase from "./phase/Phase";
import Button from "../../components/button/Button";
import { PatientType } from "../../types/PatientTypes";
import { PhaseType, TreatmentType } from "../../types/TreatmentTypes";
import { BoxButton, Main, PhaseBlock, PhaseTitle, Section, Title } from "./TreatmentPhases.styles";

const patient: PatientType = { name: 'Ana', photo: '', id: '62d08a04-5eb6-41b1-92fc-52f6c705dc1c', birthDate: '', email: '', telephone: '' }
const traetment: TreatmentType = {
  id: "5b184e74-8284-487c-a48b-3c00ca3146e6",
  allergies: [
    "comida",
    "ácaro"
  ],
  method: "vacina",
  active: true
}
const phases: PhaseType[] = [
  {
    id: "d8ed2f0e-18ef-408f-aaa4-78b91f975902",
    phaseNumber: 1,
    dosage: "1:10",
    frequency: "2 semanas",
    startTreatment: "2024-02-06",
    endTreatment: "2024-03-15",
    active: false
  },
  {
    id: "673abed4-ee3a-4566-84e6-18bb8d67199d",
    phaseNumber: 2,
    dosage: "1:100",
    frequency: "7 dias",
    startTreatment: "2024-05-01",
    endTreatment: "2024-06-15",
    active: true
  }
]

const TreatmentPhases = () => {
  const [modal, setModal] = useState(false);
  const [phaseSelected, setPhaseSelected] = useState<PhaseType | null>(null);

  return (
    <Main>
      <DefaultPatientPage patient={patient} >
        <Section>
          <Title>Fase</Title>
          {phases.map((phase: PhaseType) =>
            <PhaseBlock key={phase.phaseNumber}>
              <PhaseTitle onClick={() => setPhaseSelected(phase)}>
                Fase {phase.phaseNumber}
              </PhaseTitle>
              {phaseSelected?.phaseNumber === phase.phaseNumber && <Phase phase={phase} />}
            </PhaseBlock>
          )}
          <BoxButton>
            <Button disabled={!phaseSelected?.active}>Finalizar Fase</Button>
            <Button onClick={() => setModal(!modal)}>Adicionar Fase</Button>
          </BoxButton>
        </Section>
        {modal && <ModalTreatmentPhase setModal={setModal} />}
      </DefaultPatientPage>
    </Main>
  );
};

export default TreatmentPhases;
