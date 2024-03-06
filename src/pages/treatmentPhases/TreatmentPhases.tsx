import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IconArrowUp from '../../assets/arrow-up.svg';
import IconArrowDown from '../../assets/arrow-down.svg';
import DefaultPatientPage from "../../components/defaultPatientPage/DefaultPatientPage";
import ModalTreatmentPhase from "../../components/modalTreatmentPhase/ModalTreatmentPhase";
import Phase from "./phase/Phase";
import Button from "../../components/button/Button";
import { PatientType } from "../../types/PatientTypes";
import { PhaseType, TreatmentType } from "../../types/TreatmentTypes";
import { BoxButton, Main, PhaseBlock, PhaseTitle, Section, Title } from "./TreatmentPhases.styles";
import useAxios from "../../hooks/useAxios";
import { UserRequest } from "../../requests/UserRequest";


const TreatmentPhases = () => {
  const { id: patientId } = useParams();
  const token = window.localStorage.getItem("token");

  const userRequest = new UserRequest();
  const patientReq = useAxios<PatientType>();
  const treatmantReq = useAxios<TreatmentType>();
  const phasesReq = useAxios<PhaseType[]>();

  const [modal, setModal] = useState(false);
  const [phaseSelected, setPhaseSelected] = useState<PhaseType | null>(null);
  const [phases, setPhases] = useState<PhaseType[]>([]);

  const selectPhase = (phase: PhaseType) => {
    setPhaseSelected(
      phase === phaseSelected ? null : phase
    )
  }

  const hasPhases = () => phases.length > 0

  useEffect(() => {
    const { url, headers } = userRequest.GET_PATIENTS_BY_ID(patientId, token);
    patientReq.get(url, { headers });
  }, [patientId, token]);

  useEffect(() => {
    const { url, headers } = userRequest.GET_TREATMENTS_BY_ID(patientId, token);
    treatmantReq.get(url, { headers });
  }, [patientId, token]);

  useEffect(() => {
    try {
      const { url, headers } = userRequest.GET_PHASES_BY_TREATMENTS_ID(String(treatmantReq.data?.id), token);
      phasesReq.get(url, { headers });
    }
    catch (error) {
      console.error(error);
    }
  }, [token, treatmantReq.data]);

  useEffect(() => {
    if (phasesReq.data) {
      setPhases(phasesReq.data)
    }
  }, [token, phasesReq.data]);


  return (
    <Main>
      <DefaultPatientPage patient={patientReq.data} >
        <Section>
          <Title>Fases</Title>
          {phases.map((phase: PhaseType) =>
            <PhaseBlock key={phase.phaseNumber}>
              <PhaseTitle onClick={() => selectPhase(phase)}>
                Fase {phase.phaseNumber}
                <img src={phaseSelected?.phaseNumber === phase.phaseNumber ? IconArrowUp : IconArrowDown} alt="Mostrar conteúdo" />
              </PhaseTitle>
              {phaseSelected?.phaseNumber === phase.phaseNumber && <Phase phase={phase} />}
            </PhaseBlock>
          )}
          <BoxButton className={hasPhases() ? '' : 'centered'}>
            {hasPhases() && <Button disabled={!phaseSelected?.active}>Finalizar Fase</Button>}
            <Button onClick={() => setModal(!modal)}>Adicionar Fase</Button>
          </BoxButton>
        </Section>
        {modal && <ModalTreatmentPhase setModal={setModal} />}
      </DefaultPatientPage>
    </Main>
  );
};

export default TreatmentPhases;
