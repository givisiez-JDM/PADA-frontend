import Button from "../../../components/button/Button";
import PhaseProgress from "../../../components/phaseProgress/PhaseProgress";
import { PhaseType } from "../../../types/TreatmentTypes";
import { formatDate } from "../../../utils/DateFns";
import { PhaseContent, PhaseField, PhaseSubtitle } from "./Phase.styles";

interface Props {
  phase: PhaseType
}


const Phase = ({ phase }: Props) => {
  const getProgress = () => {
    const start = new Date(phase.startTreatment)
    const end = new Date(phase.endTreatment)
    const today = new Date()
    if (today < start) return 0
    if (today > end) return 1
    const total = end.getTime() - start.getTime()
    const progress = today.getTime() - start.getTime()
    return parseFloat((progress / total).toFixed(2));
  }
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
        <PhaseProgress value={getProgress()} />
        <Button size="small">Alterar</Button>
      </PhaseContent>

    </>
  );
}

export default Phase;