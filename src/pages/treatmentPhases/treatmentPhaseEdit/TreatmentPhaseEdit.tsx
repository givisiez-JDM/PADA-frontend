import { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import Switch from "../../../components/switch/Switch";
import { DosageType, FrequencyType, PhaseType } from "../../../types/TreatmentTypes";
import {
  CheckboxField,
  CheckBoxContainer,
  DateContainer,
  DateInput,
  PhaseField,
  PhaseForm,
  PhaseStatus,
  PhaseTitle,
  Title,
} from "./TreatmentPhaseEdit.styles";

const frequencies: Array<FrequencyType> = ['7 dias', '3 semanas', '2 semanas', '4 semanas'];
const dosages: Array<DosageType> = ['1:10.000', '1:100', '1:1.000', '1:10'];

interface Props {
  phase: PhaseType;
  setPhase: React.Dispatch<React.SetStateAction<PhaseType | null>>;
}

const TreatmentPhaseEdit = ({ phase, setPhase }: Props) => {
  const [phaseActive, setPhaseActive] = useState(phase.active);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(phase);
    setPhase(null);
  };

  const handleChange = (name: string, value: string | number) => {
    setPhase({
      ...phase,
      [name]: value,
    })
  }

  // TODO remover console e incluir servico
  useEffect(() => {
    console.log(phase);
  }, [phase]);

  useEffect(() => {
    setPhase({
      ...phase,
      active: phaseActive,
    })
  }, [phaseActive]);

  return (
    <PhaseForm onSubmit={event => handleFormSubmit(event)}>
      <PhaseTitle>Fase {phase.phaseNumber}</PhaseTitle>
      <PhaseField>
        <Title>Duração do Tratamento</Title>
        <DateContainer>
          <p>Início</p>
          <DateInput
            type="date"
            value={phase.startTreatment}
            onChange={event => handleChange('startTreatment', event.target.value)}
          />
        </DateContainer>
        <DateContainer>
          <p>Fim</p>
          <DateInput
            type="date"
            value={phase.endTreatment}
            onChange={event => handleChange('endTreatment', event.target.value)}
          />
        </DateContainer>
      </PhaseField>
      <PhaseField>
        <Title>
          Periodicidade do Tratamento
        </Title>
        <CheckBoxContainer>
          {frequencies.map(frequency => (
            <CheckboxField key={frequency}>
              <input
                type="radio"
                id={frequency}
                name="frequency"
                className="checkbox"
                value={frequency}
                checked={frequency === phase.frequency}
                onChange={event => handleChange('frequency', event.target.value)}
              />
              <label htmlFor={frequency}>{"A cada " + frequency}</label>
            </ CheckboxField>
          ))}
        </CheckBoxContainer>
      </PhaseField>
      <PhaseField>
        <Title>
          Dosagem do Medicamento
        </Title>
        <CheckBoxContainer>
          {dosages.map(dosage => (
            <CheckboxField key={dosage}>
              <input
                type="radio"
                id={dosage}
                name="dosage"
                className="checkbox"
                value={dosage}
                checked={dosage === phase.dosage}
                onChange={event => handleChange('dosage', event.target.value)}
              />
              <label htmlFor={dosage}>{dosage}</label>
            </ CheckboxField>
          ))}
        </CheckBoxContainer>
      </PhaseField>
      <PhaseField>
        <PhaseStatus>
          <Switch
            activeLabel="Ativo"
            inactiveLabel="Inativo"
            status={phaseActive}
            setStatus={setPhaseActive}
          />
        </PhaseStatus>
      </PhaseField>
      {/*
         TODO colocar erros do backend
         {errors.endTreatment && <span>{errors.endTreatment.message}</span>} 
         */}
      <Button type="submit">
        Salvar
      </Button>
    </PhaseForm>
  );
};

export default TreatmentPhaseEdit;