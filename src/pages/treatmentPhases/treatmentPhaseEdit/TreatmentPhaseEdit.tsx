import { useEffect, useState } from 'react';
import { UserRequest } from '../../../requests/UserRequest';
import { formatDate } from '../../../utils/DateFns';
import { useData } from '../../../global/UserContext';
import useAxios from '../../../hooks/useAxios';
import Button from '../../../components/button/Button';
import Switch from '../../../components/switch/Switch';
import Checkbox from '../../../components/checkbox/Checkbox';
import { DosageType, FrequencyType, PhaseType } from '../../../types/TreatmentTypes';
import ModalTreatmentPhase from '../../../components/modalTreatmentPhase/ModalTreatmentPhase';
import { ModalForm, DateInput, PhaseStatus } from './TreatmentPhaseEdit.styles';
import {
  BoxButton, ContainerCheckBox, Error, PhaseField, Title,
} from '../addPhase/AddPhase.styles';

const frequencies: Array<FrequencyType> = ['7 dias', '3 semanas', '2 semanas', '4 semanas'];
const dosages: Array<DosageType> = ['1:10.000', '1:100', '1:1.000', '1:10'];

interface Props {
  closeModal: () => void
  phaseEdit: PhaseType
}

const TreatmentPhaseEdit = ({ closeModal, phaseEdit }: Props) => {
  const { getToken } = useData();
  const userRequest = new UserRequest();
  const phaseReq = useAxios<PhaseType>();

  const SUBSTRING_DATE_SIZE = 10;
  const today = new Date().toISOString().substring(0, SUBSTRING_DATE_SIZE);
  const [phase, setPhase] = useState<PhaseType>(phaseEdit);
  const [phaseActive, setPhaseActive] = useState(phase.active);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token = getToken();
    const dateStart = formatDate(phase.startTreatment);
    const dateEnd = formatDate(phase.endTreatment);

    const { url, headers } = userRequest.PUT_PHASES_BY_ID(phase.id, token);
    const body = { ...phase, startTreatment: dateStart, endTreatment: dateEnd };

    phaseReq.put(url, body, { headers });
  };

  const handleChange = (name: string, value: string | number) => {
    if (phase) setPhase({ ...phase, [name]: value });
  };

  const HTTPStatus: { [key: number]: () => void } = {
    0: () => setErrorMessage(''),
    200: () => closeModal(),
    400: () => setErrorMessage('Preenchimento de campos incorretos'),
    404: () => setErrorMessage('Fase não encontrada'),
  };

  useEffect(() => {
    if (phaseReq.status in HTTPStatus) {
      HTTPStatus[phaseReq.status]();
    }
    else {
      setErrorMessage('Erro interno do servidor.');
    }
  }, [phaseReq.status]);

  useEffect(() => {
    if (phase) setPhase({ ...phase, active: phaseActive });
  }, [phaseActive]);

  useEffect(() => {
    if (phase)
      if (phase.startTreatment < today) {
        setErrorMessage('A data inicial não pode ser inferior à data presente.');
      }
      else if (phase.startTreatment >= phase.endTreatment) {
        setErrorMessage('A data de final deve ser maior que a data inicial.');
      }
      else {
        setErrorMessage('');
      }
  }, [phase]);

  return (
    <ModalTreatmentPhase closeModal={closeModal}>
      <ModalForm onSubmit={event => handleFormSubmit(event)}>
        <PhaseField>
          <Title>Alteração da Fase</Title>
          <p>Início</p>
          <DateInput
            type="date"
            value={phase.startTreatment}
            onChange={event => handleChange('startTreatment', event.target.value)}
          />
          <p>Fim</p>
          <DateInput
            type="date"
            value={phase.endTreatment}
            onChange={event => handleChange('endTreatment', event.target.value)}
          />
        </PhaseField>
        <PhaseField>
          <Title>Periodicidade</Title>
          <ContainerCheckBox>
            {frequencies.map(frequency => (
              <Checkbox
                key={frequency}
                type="radio"
                name="frequency"
                value={frequency}
                label={`A cada ${frequency}`}
                checked={frequency === phase.frequency}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('frequency', event.target.value)}
              />
            ))}
          </ContainerCheckBox>
        </PhaseField>
        <PhaseField>
          <Title>Dosagem do Medicamento</Title>
          <ContainerCheckBox>
            {dosages.map(dosage => (
              <Checkbox
                key={dosage}
                type="radio"
                name="dosage"
                value={dosage}
                label={`${dosage}`}
                checked={dosage === phase.dosage}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('dosage', event.target.value)}
              />
            ))}
          </ContainerCheckBox>
        </PhaseField>
        <PhaseField>
          <PhaseStatus>
            <Switch
              activeLabel="Ativo"
              inactiveLabel="Inativo"
              status={phaseActive}
              setStatus={setPhaseActive}
              theme="dark"
            />
          </PhaseStatus>
        </PhaseField>
        {errorMessage && <Error>{errorMessage}</Error>}
        <BoxButton>
          <Button
            size="large"
            type="submit"
            disabled={errorMessage.length > 0}
          >
            Salvar
          </Button>
        </BoxButton>
      </ModalForm>
    </ModalTreatmentPhase>
  );
};

export default TreatmentPhaseEdit;
