import { Link } from 'react-router-dom';
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
  BackButton,
} from './Phase.styles';

interface Props {
  phase: PhaseType
  progress: number
  editPhase: () => void
  disablePhase: () => void
}

const AUXILIARY_PERCENT_CALC_VALUE = 100;

/**
 * Statically shows the data of a phase
 * @param { PhaseType } phase A data values to show
 * @param { number } progress The pregress value of treatment [0.0-1.0]
 * @param  editPhase function to set data for edition
 * @param  editPhase function to disable phase
 * @example
 * <Phase phase={{id:"",...}} progress={0.6} setPhase={setPhaseEdit} />
 */
const Phase = ({ phase, progress, editPhase, disablePhase }: Props) => {
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
        <BackButton>
          <Link to="/menu-medico">Voltar</Link>
        </BackButton>
        <Button onClick={editPhase}> Alterar </Button>
        <Button onClick={disablePhase}> Finalizar </Button>
      </ButtonGroup>
    </PhaseContainer>
  );
};

export default Phase;
