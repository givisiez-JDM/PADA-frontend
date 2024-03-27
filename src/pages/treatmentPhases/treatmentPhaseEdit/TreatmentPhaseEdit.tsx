import { useEffect, useState } from "react";
import { UserRequest } from "../../../requests/UserRequest";
import { formatDate } from "../../../utils/DateFns";
import { useData } from "../../../global/UserContext";
import useAxios from "../../../hooks/useAxios";
import Button from "../../../components/button/Button";
import Switch from "../../../components/switch/Switch";
import Checkbox from "../../../components/checkbox/Checkbox";
import { DosageType, FrequencyType, PhaseType } from "../../../types/TreatmentTypes";
import {
  CheckBoxContainer,
  DateContainer,
  DateInput,
  Error,
  PhaseField,
  PhaseForm,
  PhaseStatus,
  PhaseTitle,
  Title,
} from "./TreatmentPhaseEdit.styles";

const frequencies: Array<FrequencyType> = ['7 dias', '2 semanas', '3 semanas', '4 semanas'];
const dosages: Array<DosageType> = ['1:10', '1:100', '1:1.000', '1:10.000'];

interface Props {
  phase: PhaseType;
  setPhase: React.Dispatch<React.SetStateAction<PhaseType | null>>;
}

const TreatmentPhaseEdit = ({ phase, setPhase }: Props) => {
  const userRequest = new UserRequest();
  const { getToken } = useData();
  const phaseReq = useAxios<PhaseType>();

  const [phaseActive, setPhaseActive] = useState(phase.active);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = getToken();
    const { url, headers } = userRequest.PUT_PHASES_BY_ID(phase.id, token);
    const body = {
      ...phase,
      startTreatment: formatDate(phase.startTreatment),
      endTreatment: formatDate(phase.endTreatment),
    };
    phaseReq.put(url, body, { headers });
  };

  const handleChange = (name: string, value: string | number) => {
    setPhase({
      ...phase,
      [name]: value,
    })
  }

  // TODO remover console e incluir servico
  useEffect(() => {
    if (phaseReq.data) {
      // TODO recarregar as fases com as alterações feitas
      setPhase(null);
    }
  }, [phaseReq.data]);

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
            <Checkbox
              key={frequency}
              type="radio"
              id={frequency}
              name="frequency"
              className="checkbox"
              value={frequency}
              label={"A cada " + frequency}
              checked={frequency === phase.frequency}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('frequency', event.target.value)
              }
            />
          ))}
        </CheckBoxContainer>
      </PhaseField>
      <PhaseField>
        <Title>
          Dosagem do Medicamento
        </Title>
        <CheckBoxContainer>
          {dosages.map(dosage => (
            <Checkbox
              key={dosage}
              type="radio"
              id={dosage}
              name="dosage"
              className="checkbox"
              value={dosage}
              label={dosage + " g"}
              checked={dosage === phase.dosage}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('dosage', event.target.value)
              }
            />
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
      {phaseReq.error && <Error>{phaseReq.error.error || phaseReq.error}</Error>}
      <Button type="submit">
        Salvar
      </Button>
    </PhaseForm>
  );
};

export default TreatmentPhaseEdit;