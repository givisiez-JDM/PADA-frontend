import Button from "../../../components/button/Button";
import PhaseProgress from "../../../components/phaseProgress/PhaseProgress";
import { PhaseType } from "../../../types/TreatmentTypes";
import { formatDate } from "../../../utils/DateFns";
import { PhaseContent, PhaseField, PhaseSubtitle } from "./Phase.styles";

interface Props {
  phase: PhaseType;
  progress: number;
  setPhase: React.Dispatch<React.SetStateAction<PhaseType | null>>;
}

const Phase = ({ phase, progress, setPhase }: Props) => {

  return (
    <>
      <PhaseField>
        <PhaseSubtitle>Duração da fase</PhaseSubtitle>
        <PhaseContent>Início: {formatDate(phase.startTreatment)}</PhaseContent>
        <PhaseContent>Fim: {formatDate(phase.endTreatment)}</PhaseContent>
      </PhaseField>
      <PhaseField>
        <PhaseSubtitle>Periodicidade</PhaseSubtitle>
        <PhaseContent>A cada {phase.frequency}</PhaseContent>
      </PhaseField>
      <PhaseField>
        <PhaseSubtitle>Dosagem do medicamento</PhaseSubtitle>
        <PhaseContent>{phase.dosage}</PhaseContent>
      </PhaseField>
      <PhaseContent>
        <PhaseProgress value={progress}>
          <Button
            onClick={() => setPhase(phase)}
            size="small"
          >
            Alterar
          </Button>
        </PhaseProgress>
      </PhaseContent>
    </>
  );
};

export default Phase;