import { useEffect, useState } from 'react';
import IconClose from '../../../assets/X.svg';
import Button from '../../../components/button/Button';
import Checkbox from '../../../components/checkbox/Checkbox';
import { DosageType, FrequencyType, PhaseNewType } from '../../../types/TreatmentTypes';
import {
  BoxButton,
  Close,
  ContainerCheckBox,
  DateInput,
  Error,
  Modal,
  ModalForm,
  PhaseField,
  Title,
} from './AddPhase.styles';

const frequencies: Array<FrequencyType> = ['7 dias', '3 semanas', '2 semanas', '4 semanas'];
const dosages: Array<DosageType> = ['1:10', '1:100', '1:1.000', '1:10.000'];

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  treatmentId: string
  phaseNumber: number
}

const ModalTreatmentPhase = ({ phaseNumber, setModal }: Props) => {
  const SUBSTRING_MAX_VALUE = 10;
  const today = new Date().toISOString().substring(0, SUBSTRING_MAX_VALUE);
  const phaseDefault: PhaseNewType = {
    phaseNumber: phaseNumber,
    active: true,
    dosage: '1:10',
    frequency: '7 dias',
    endTreatment: today,
    startTreatment: today,
  };

  const [newPhase, setNewPhase] = useState<PhaseNewType>(phaseDefault);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (name: string, value: string) => {
    setNewPhase({
      ...newPhase,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO implement add phase service
  };

  useEffect(() => {
    if (newPhase.startTreatment < today) {
      setErrorMessage('A data inicial não pode ser inferior à data presente.');
    }
    else if (newPhase.startTreatment >= newPhase.endTreatment) {
      setErrorMessage('A data de final deve ser maior que a data inicial.');
    }
    else {
      setErrorMessage('');
    }
  }, [newPhase]);

  return (
    <Modal>
      <ModalForm onSubmit={event => handleSubmit(event)}>
        <PhaseField>
          <Close src={IconClose} alt="Fechar" onClick={() => setModal(false)} />
          <Title>Duração da fase</Title>
          <p>Inicio</p>
          <DateInput
            type="date"
            value={newPhase.startTreatment}
            onChange={event => handleChange('startTreatment', event.target.value)}
          />
          <p>Fim</p>
          <DateInput
            type="date"
            value={newPhase.endTreatment}
            onChange={event => handleChange('endTreatment', event.target.value)}
          />
        </PhaseField>
        <PhaseField>
          <Title>Periodicidade</Title>
          <ContainerCheckBox
            onChange={
              (event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('frequency', event.target.value)
            }
          >
            {frequencies.map(frequency => (
              <Checkbox
                key={frequency}
                type="radio"
                name="frequency"
                value={frequency}
                checked={frequency === newPhase.frequency}
                label={`A cada ${frequency}`}
              />
            ))}
          </ContainerCheckBox>
        </PhaseField>
        <PhaseField>
          <Title>Dosagem do medicamento</Title>
          <ContainerCheckBox
            onChange={
              (event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('dosage', event.target.value)
            }
          >
            {dosages.map(dosage => (
              <Checkbox
                key={dosage}
                type="radio"
                name="dosage"
                value={dosage}
                checked={dosage === newPhase.dosage}
                label={`${dosage}g`}
              />
            ))}
          </ContainerCheckBox>
        </PhaseField>
        <Error>{errorMessage}</Error>
        <BoxButton>
          <Button
            type="submit"
            className="large"
            disabled={errorMessage.length > 0}
          >
            Adicionar
          </Button>
        </BoxButton>
      </ModalForm>
    </Modal>
  );
};

export default ModalTreatmentPhase;
