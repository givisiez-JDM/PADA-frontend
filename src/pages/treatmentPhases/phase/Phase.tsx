import Button from "../../../components/button/Button";
import { PhaseType } from "../../../types/TreatmentTypes";
import { formatDate } from "../../../utils/DateFns";
import { PhaseContent, PhaseField, PhaseSubtitle } from "./Phase.styles";

interface Props {
  phase: PhaseType
}

const Phase = ({ phase }: Props) => {
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

      <PhaseField>
        <PhaseSubtitle>Progresso da fase</PhaseSubtitle>
        <PhaseContent>60%</PhaseContent>
        <input type="range" min="0" max="100" step="1" />
        <Button size="small">Alterar</Button>
      </PhaseField>
    </>
  );
}

export default Phase;