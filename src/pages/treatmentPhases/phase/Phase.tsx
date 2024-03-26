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

/**
 * Statically shows the data of a phase
 * @param { PhaseType } phase A data values to show
 * @param { number } progress The pregress value of treatment [0.0-1.0] 
 * @param { React.Dispatch<React.SetStateAction<PhaseType | null>> } setPhase function to set data for edition
 * @example
 * <Phase phase={{id:"",...}} progress={0.6} setPhase={setPhaseEdit} />
 */
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