import Button from '../../../components/button/Button';
import { PhaseType } from '../../../types/TreatmentTypes';
import { formatDate } from '../../../utils/DateFns';
import {
  Card,
  PhaseContainer,
  CardItem,
  CardContent,
  CardTitle,
  ContentGroup,
  ButtonGroup,
  ItemTitle,
} from './Phase.styles';

interface Props {
  phase: PhaseType
  progress: number
  setPhase: () => void
}

const AUXILIARY_PERCENT_CALC_VALUE = 100;

/**
 * Statically shows the data of a phase
 * @param { PhaseType } phase A data values to show
 * @param { number } progress The pregress value of treatment [0.0-1.0]
 * @param  setPhase function to set data for edition
 * @example
 * <Phase phase={{id:"",...}} progress={0.6} setPhase={setPhaseEdit} />
 */
const Phase = ({ phase, progress, setPhase }: Props) => {
  return (
    <PhaseContainer>
      <ContentGroup>
        <Card>
          <CardTitle>Duração</CardTitle>
          <CardContent>
            <CardItem>
              <ItemTitle>Início</ItemTitle>
              {formatDate(phase.startTreatment)}
            </CardItem>
            <CardItem>
              <ItemTitle>Fim</ItemTitle>
              {formatDate(phase.endTreatment)}
            </CardItem>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Detalhes da Administração do Medicamento</CardTitle>
          <CardContent>
            <CardItem>
              <ItemTitle>Periodicidade</ItemTitle>
              {`A cada ${phase.frequency}`}
            </CardItem>
            <CardItem>
              <ItemTitle>Dosagem do Medicamento</ItemTitle>
              {`${phase.dosage}`}
            </CardItem>
          </CardContent>
        </Card>
      </ContentGroup>
      <ContentGroup>
        <Card>
          <CardTitle>Progresso</CardTitle>
          <CardItem>
            {progress * AUXILIARY_PERCENT_CALC_VALUE}
            %
          </CardItem>
          <progress value={progress} />
        </Card>
      </ContentGroup>
      <ButtonGroup>
        <Button onClick={setPhase}> Alterar </Button>
      </ButtonGroup>
    </PhaseContainer>
  );
};

export default Phase;
