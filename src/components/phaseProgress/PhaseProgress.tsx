import { FC, HTMLProps } from 'react';
import { Card, ProgressContent, Title } from './PhaseProgress.styles';

interface Props {
  value: number
}

const AUXILIARY_PERCENT_CALC_VALUE = 100;

const PhaseProgress: FC<Props & HTMLProps<HTMLDivElement>> = ({ value, children }) => {
  return (
    <Card>
      <Title>Progresso da fase</Title>
      <ProgressContent>
        {value * AUXILIARY_PERCENT_CALC_VALUE}
        %
        <progress value={value} />
      </ProgressContent>
      {children}
    </Card>
  );
};

export default PhaseProgress;
