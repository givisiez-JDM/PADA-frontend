import { FC } from "react";
import { Card, ProgressContent, Title } from "./PhaseProgress.styles";

interface Props {
  value: number
}

const PhaseProgress: FC<Props> = ({ value }) => {
  return (
    <Card>
      <Title>Progresso da fase</Title>
      <ProgressContent>
        {value * 100}%
      </ProgressContent>
      <progress value={value} />
    </Card>
  );
}

export default PhaseProgress;