import IconClose from '../../assets/X.svg';
import {
  Modal,
  ModalBox,
  Close,
  ContentBox,
  ButtonBox,
  StyledButton as Button,
} from './ModalCancel.styles';

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  vallue?: string
  onConfirm: () => void
  onDecline: () => void
  swapButtons?: boolean
}

const ModalCancel = ({
  setModal,
  vallue,
  onConfirm,
  onDecline,
  swapButtons = false,
}: Props) => {
  const handleConfirm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onConfirm();
  };

  const handleDecline = () => {
    if (onDecline) {
      onDecline();
    }
    else {
      setModal(false);
    }
  };

  return (
    <Modal>
      <ModalBox>
        <Close src={IconClose} alt="Fechar" onClick={handleDecline} />
        <ContentBox>
          <h2>{vallue}</h2>
          <ButtonBox>
            {swapButtons
              ? (
                <>
                  <Button
                    type="button"
                    size="small"
                    color="tertiary"
                    onClick={handleDecline}
                  >
                    Não
                  </Button>
                  <Button type="button" size="small" onClick={handleConfirm}>
                    Sim
                  </Button>
                </>
                )
              : (
                <>
                  <Button type="button" size="small" onClick={handleConfirm}>
                    Sim
                  </Button>
                  <Button
                    type="button"
                    size="small"
                    color="tertiary"
                    onClick={handleDecline}
                  >
                    Não
                  </Button>
                </>
                )}
          </ButtonBox>
        </ContentBox>
      </ModalBox>
    </Modal>
  );
};

export default ModalCancel;
