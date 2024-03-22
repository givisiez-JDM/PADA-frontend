import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import DefaultPatientPage from "../../components/defaultPatientPage/DefaultPatientPage";
import { PatientType } from "../../types/PatientTypes";
import Switch from "../../components/switch/Switch";
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
import { PhaseType } from "../../types/TreatmentTypes";

// TODO trocar para frequencyType e DosageType
const frequencies: Array<string> = ['cada 7 dias', 'cada 3 semanas', 'cada 2 semanas', 'cada 4 semanas'];
const dosages: Array<string> = ['1:10.000', '1:100', '1:1.000', '1:10'];

// TODO retirar mocks e coocar pagina como componente de treatmentPhase
const patient: PatientType = { birthDate: '', email: '', id: '', name: 'Teste', photo: '', telephone: '' };
const phase: PhaseType = { active: true, frequency: 'cada 7 dias', endTreatment: '2024-04-30', dosage: '1:10.000', id: 1, phaseNumber: 1, startTreatment: '2024-03-15' }

const TreatmentPhaseEdit = () => {
  const [phaseActive, setPhaseActive] = useState(phase.active);
  const [phaseEdit, setPhaseEdit] = useState<PhaseType>(phase);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(phaseEdit);
  };

  const handleChange = (name: string, value: string | number) => {
    setPhaseEdit({
      ...phaseEdit,
      [name]: value,
    })
  }

  // TODO remover console eincluir servico
  useEffect(() => {
    console.log(phaseEdit);
  }, [phaseEdit]);

  useEffect(() => {
    setPhaseEdit({
      ...phaseEdit,
      active: phaseActive,
    })
  }, [phaseActive]);

  return (
    <DefaultPatientPage patient={patient}>
      <PhaseForm onSubmit={event => handleFormSubmit(event)}>
        <PhaseTitle>Fase {2}</PhaseTitle>
        <PhaseField>
          <Title>Duração do Tratamento</Title>
          <DateContainer>
            <p>Início</p>
            <DateInput
              type="date"
              value={phaseEdit.startTreatment}
              onChange={event => handleChange('startTreatment', event.target.value)}
            />
          </DateContainer>
          <DateContainer>
            <p>Fim</p>
            <DateInput
              type="date"
              value={phaseEdit.endTreatment}
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
                  checked={frequency === phaseEdit.frequency}
                  onChange={event => handleChange('frequency', event.target.value)}
                />
                <label htmlFor={frequency}>{frequency}</label>
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
                  checked={dosage === phaseEdit.dosage}
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
    </DefaultPatientPage>
  );
};

export default TreatmentPhaseEdit;