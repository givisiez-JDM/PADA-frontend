import { FC, HTMLProps } from "react";
import { Card, ProgressContent, Title } from "./PhaseProgress.styles";

interface Props {
  value: number;
}

const PhaseProgress: FC<Props & HTMLProps<HTMLDivElement>> = ({ value, children }) => {
  return (
    <Card>
      <Title>Progresso da fase</Title>
      <ProgressContent>
        {value * 100}%
        <progress value={value} />
      </ProgressContent>
      {children}
    </Card>
  );
};

export default PhaseProgress;