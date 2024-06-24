import { ReactNode } from 'react';
import IconClose from '../../assets/X.svg';
import {
  Close,
  Modal,
  ModalBox,
} from './ModalTreatmentPhase.styles';

interface ModalProps {
  closeModal: () => void
  children: ReactNode
}

const ModalTreatmentPhase = ({ children, closeModal }: ModalProps) => {
  return (
    <Modal>
      <ModalBox>
        <Close src={IconClose} alt="Fechar" onClick={closeModal} />
        {children}
      </ModalBox>
    </Modal>
  );
};

export default ModalTreatmentPhase;
