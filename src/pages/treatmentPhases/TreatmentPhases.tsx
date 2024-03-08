import { useEffect, useState } from "react";
import { useData } from "../../global/UserContext";
import { UserRequest } from "../../requests/UserRequest";
import { PhaseType } from "../../types/TreatmentTypes";
import useAxios from "../../hooks/useAxios";
import IconArrowUp from '../../assets/arrow-up.svg';
import IconArrowDown from '../../assets/arrow-down.svg';
import DefaultPatientPage from "../../components/defaultPatientPage/DefaultPatientPage";
import Button from "../../components/button/Button";
import ModalTreatmentPhase from "../../components/modalTreatmentPhase/ModalTreatmentPhase";
import Phase from "./phase/Phase";
import { BoxButton, Main, PhaseBlock, PhaseTitle, Section, Title } from "./TreatmentPhases.styles";


const TreatmentPhases = () => {
  // const { id: patientId } = useParams();
  const {
    getToken,
    patient,
    getPatient,
    patientId,
    getTreatment,
    treatmentId,
    phaseList,
    getPhaseList
  } = useData();

  const userRequest = new UserRequest();
  const phaseReq = useAxios<PhaseType>();

  const [modal, setModal] = useState(false);
  const [phaseSelected, setPhaseSelected] = useState<PhaseType | null>(null);

  const selectPhase = (phase: PhaseType) => {
    setPhaseSelected(
      phase === phaseSelected ? null : phase
    )
  }

  const hasPhases = () => phaseList.length > 0

  const finishPhase = () => {
    const token = getToken();
    if (confirm('Tem certeza que deseja finalizar essa fase?')) {
      const { url, headers } = userRequest.GET_PHASES_BY_ID(phaseSelected?.id, token);

      console.log(phaseSelected)
      // const body = phaseSelected;

      // phaseReq.put(url, body, headers)
      // .then(()=>{
      // getPhaseList();
      // });
    }
  }

  useEffect(() => {
    getPatient();
    getTreatment();
  }, [patientId]);

  useEffect(() => {
    getPhaseList();
  }, [treatmentId]);

  return (
    <Main>
      <DefaultPatientPage patient={patient} >
        <Section>
          <Title>Fases</Title>
          {phaseList.map((phase: PhaseType) =>
            <PhaseBlock key={phase.phaseNumber}>
              <PhaseTitle onClick={() => selectPhase(phase)}>
                Fase {phase.phaseNumber}
                <img src={phaseSelected?.phaseNumber === phase.phaseNumber ? IconArrowUp : IconArrowDown} alt="Mostrar conteúdo" />
              </PhaseTitle>
              {phaseSelected?.phaseNumber === phase.phaseNumber && <Phase phase={phase} />}
            </PhaseBlock>
          )}
          <BoxButton className={hasPhases() ? '' : 'centered'}>
            {hasPhases() &&
              <Button
                disabled={!phaseSelected?.active}
                onClick={finishPhase}
              >Finalizar Fase</Button>}
            <Button onClick={() => setModal(!modal)}>Adicionar Fase</Button>
          </BoxButton>
        </Section>
        {modal && <ModalTreatmentPhase setModal={setModal} />}
      </DefaultPatientPage>
    </Main>
  );
};

export default TreatmentPhases;
