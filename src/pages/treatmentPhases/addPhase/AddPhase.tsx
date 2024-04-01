import X from '../../../assets/X.svg'
import Button from '../../../components/button/Button';
import { DosageType, FrequencyType } from '../../../types/TreatmentTypes';
import {
  BoxButton,
  Close,
  ContainerCheckBox,
  DateInput,
  Modal,
  ModalBox,
  PhaseField,
  Title,
} from "./AddPhase.styles";

const frequencies: Array<FrequencyType> = ['7 dias', '3 semanas', '2 semanas', '4 semanas'];
const dosages: Array<DosageType> = ['1:10', '1:100', '1:1.000', '1:10.000'];

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalTreatmentPhase = ({ setModal }: Props) => {

  return (
    <Modal>
      <ModalBox>
        <PhaseField>
          <Close src={X} alt='Fechar' onClick={() => setModal(false)} />
          <Title>Duração da fase</Title>
          <p>Inicio</p>
          <DateInput type='date' />
          <p>Fim</p>
          <DateInput type='date' />
        </PhaseField>
        <PhaseField>
          <Title>Periodicidade</Title>
          <ContainerCheckBox>
            {frequencies.map(frequency => (
              <label key={frequency}>
                <input id={frequency} className="checkbox"
                  type="radio"
                  name='frequency'
                  value={frequency}
                />
                A cada {frequency}
              </ label>
            ))}
          </ContainerCheckBox>
        </PhaseField>
        <PhaseField>
          <Title>Dosagem do medicamento</Title>
          <ContainerCheckBox>
            {dosages.map(dosage => (
              <label key={dosage}>
                <input id={dosage} className="checkbox"
                  type="radio"
                  name='dosage'
                  value={dosage}
                />
                {dosage} g
              </ label>
            ))}
          </ContainerCheckBox>
        </PhaseField>
        <BoxButton>
          <Button>Adicionar</Button>
        </BoxButton>
      </ModalBox>
    </Modal>
  );
};

export default ModalTreatmentPhase;
