import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import { useData } from "../../global/UserContext";
import { UserRequest } from "../../requests/UserRequest";
import { PhaseType, VaccineType } from "../../types/TreatmentTypes";
import IconArrowUp from '../../assets/arrow-up.svg';
import IconArrowDown from '../../assets/arrow-down.svg';
import DefaultPatientPage from "../../components/defaultPatientPage/DefaultPatientPage";
import Button from "../../components/button/Button";
import ModalTreatmentPhase from "../../components/modalTreatmentPhase/ModalTreatmentPhase";
import Phase from "./phase/Phase";
import { BoxButton, Main, PhaseBlock, PhaseTitle, Section, Title } from "./TreatmentPhases.styles";

const TreatmentPhases = () => {
  const { id: idPatient } = useParams();
  const {
    getToken,
    patient,
    patientId,
    setPatientId,
    getPatient,
    getTreatment,
    treatmentId,
    phaseList,
    getPhaseList,
    setPhaseId,
    phaseId,
    getVaccineList,
    vaccineList,
  } = useData();

  const userRequest = new UserRequest();
  const phaseReq = useAxios<PhaseType>();

  const [modal, setModal] = useState(false);
  const [phaseSelected, setPhaseSelected] = useState<PhaseType | null>(null);
  const [phaseProgress, setPhaseProgress] = useState<number>(0);

  const selectPhase = (phase: PhaseType) => {
    const newPhase = phase === phaseSelected ? null : phase;
    setPhaseSelected(newPhase);
    setPhaseId(newPhase ? newPhase.id : '');
  };

  const hasPhases = () => phaseList.length > 0;

  const finishPhase = () => {
    if (!phaseSelected) return;

    const token = getToken();
    if (confirm('Tem certeza que deseja finalizar essa fase?')) {
      const { url, headers } = userRequest.PUT_PHASE_STATUS_BY_ID(phaseSelected.id, token);

      const body = {
        phaseNumber: phaseSelected,
        active: false,
      };

      phaseReq.put(url, body, { headers });
    }
  };

  useEffect(() => {
    if (idPatient && idPatient !== patientId)
      setPatientId(idPatient);
  }, [idPatient]);

  useEffect(() => {
    if (patientId) {
      getPatient();
      getTreatment();
    }
  }, [patientId]);

  useEffect(() => {
    getPhaseList();
  }, [treatmentId, phaseReq.data]);

  useEffect(() => {
    getVaccineList();
  }, [phaseId]);

  useEffect(() => {
    const total = vaccineList.length;
    const applied = vaccineList.reduce((total: number, vaccine: VaccineType) => {
      if (vaccine.status !== 'agendado') {
        return total + 1;
      }
      return total;
    }, 0);
    setPhaseProgress(applied / total);
  }, [vaccineList]);

  const getArrow = (phaseNumber: number) => {
    if (phaseSelected?.phaseNumber === phaseNumber) {
      return IconArrowUp;
    }
    return IconArrowDown;
  };

  const showPhase = (phase: PhaseType) => {
    if (phaseSelected?.phaseNumber === phase.phaseNumber) {
      return (
        <Phase phase={phase} progress={phaseProgress} />
      );
    }
  };

  const getPhases = () => {
    return phaseList
      .sort(((a, b) => a.phaseNumber - b.phaseNumber))
      .map((phase: PhaseType) =>
        <PhaseBlock key={phase.phaseNumber}>
          <PhaseTitle onClick={() => selectPhase(phase)}>
            Fase {phase.phaseNumber}
            <img src={getArrow(phase.phaseNumber)} alt="Mostrar conteúdo" />
          </PhaseTitle>
          {showPhase(phase)}
        </PhaseBlock>
      );
  };

  return (
    <Main>
      <DefaultPatientPage patient={patient} >
        <Section>
          <Title>Fases</Title>
          {getPhases()}
          <BoxButton className={hasPhases() ? '' : 'centered'}>
            {hasPhases() &&
              <Button
                disabled={!phaseSelected?.active}
                onClick={finishPhase}
              >
                Finalizar Fase
              </Button>}
            <Button onClick={() => setModal(!modal)}>Adicionar Fase</Button>
          </BoxButton>
        </Section>
        {modal && <ModalTreatmentPhase setModal={setModal} />}
      </DefaultPatientPage>
    </Main>
  );
};

export default TreatmentPhases;
