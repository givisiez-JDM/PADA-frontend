import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAxios from '../../hooks/useAxios';
import { useData } from '../../global/UserContext';
import { UserRequest } from '../../requests/UserRequest';
import { PhaseType, VaccineType } from '../../types/TreatmentTypes';
import DefaultPatientPage from '../../components/defaultPatientPage/DefaultPatientPage';
import Button from '../../components/button/Button';
import AddPhase from './addPhase/AddPhase';
import Phase from './phase/Phase';
import TreatmentPhaseEdit from './treatmentPhaseEdit/TreatmentPhaseEdit';
import {
  ButtonBox, PhaseBlock, PhaseEmpty, PhaseHeader, PhaseText, PhaseTitle, Section, Title,
} from './TreatmentPhases.styles';

const TreatmentPhases = () => {
  const { id: idPatient } = useParams();
  const {
    getToken, patient, patientId, setPatientId, getPatient, getTreatment, treatmentId,
    phaseList, getPhaseList, setPhaseId, phaseId, getVaccineList, vaccineList,
  } = useData();

  const userRequest = new UserRequest();
  const phaseReq = useAxios<PhaseType>();

  const [modal, setModal] = useState(false);
  const [phaseSelected, setPhaseSelected] = useState<number>(0);
  const [phaseProgress, setPhaseProgress] = useState<number>(0);
  const [phaseEdit, setPhaseEdit] = useState<PhaseType | null>(null);
  const [maxPhaseNumber, setMaxPhaseNumber] = useState<number>(0);

  const selectPhase = (phase: PhaseType) => {
    setPhaseSelected(phase.phaseNumber);
    setPhaseId(phase.id);
  };

  const closeEditPhaseModal = () => {
    setPhaseEdit(null);
  };

  const hasPhases = () => phaseList.length > 0;

  const finishPhase = (phaseId: string) => {
    if (!phaseSelected) return;

    const token = getToken();
    if (confirm('Deseja finalizar essa fase?')) {
      const { url, headers } = userRequest.PUT_PHASE_STATUS_BY_ID(phaseId, token);

      const body = { phaseNumber: phaseSelected, active: false };

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
  }, [treatmentId, phaseReq.data, phaseEdit]);

  useEffect(() => {
    let maxNumber = 0;
    let maxPhase: PhaseType | null = null;
    phaseList.forEach((item) => {
      if (item.phaseNumber > maxNumber) {
        maxNumber = item.phaseNumber;
        maxPhase = item;
      }
    });
    setMaxPhaseNumber(maxNumber);
    if (phaseSelected === 0 && maxPhase !== null) selectPhase(maxPhase);
  }, [phaseList]);

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

  const showPhase = () => {
    const phase = phaseList.find(item => item.phaseNumber === phaseSelected);
    if (phase) {
      return (
        <Phase
          phase={phase}
          progress={phaseProgress}
          editPhase={() => setPhaseEdit(phase)}
          disablePhase={() => finishPhase(phase.id)}
        />
      );
    }
  };

  const getPhases = () => {
    return phaseList
      .sort(((a, b) => b.phaseNumber - a.phaseNumber)).map((phase: PhaseType) => (
        <PhaseTitle
          key={phase.phaseNumber}
          onClick={() => selectPhase(phase)}
          className={phase.phaseNumber === phaseSelected ? 'active' : ''}
        >
          {`Fase ${phase.phaseNumber}`}
        </PhaseTitle>
      ));
  };

  const phaseContent = () => {
    if (hasPhases()) {
      return (
        <>
          <PhaseBlock>{getPhases()}</PhaseBlock>
          {showPhase()}
        </>
      );
    }
    else {
      return (
        <PhaseEmpty>
          <PhaseText>Este paciente ainda não possui nenhum monitoramento ativo. </PhaseText>
          <PhaseText>
            Por favor,
            <span> adicione uma fase de monitoramento </span>
            para acompanhar o progresso do tratamento e garantir o melhor cuidado possível.
          </PhaseText>
          <ButtonBox>
            <Button onClick={() => setModal(true)}>Adicionar Fase</Button>
          </ButtonBox>
        </PhaseEmpty>
      );
    }
  };

  return (
    <DefaultPatientPage patient={patient}>
      <Section>
        <PhaseHeader>
          <Title>Fases</Title>
          {hasPhases() && <Button onClick={() => setModal(true)}>Adicionar</Button>}
        </PhaseHeader>
        {phaseContent()}
      </Section>
      {
        modal
        && (
          <AddPhase
            setModal={setModal}
            treatmentId={treatmentId}
            phaseNumber={maxPhaseNumber + 1}
          />
        )
      }
      {
        phaseEdit
        && <TreatmentPhaseEdit closeModal={closeEditPhaseModal} phaseEdit={phaseEdit} />
      }
    </DefaultPatientPage>
  );
};

export default TreatmentPhases;
