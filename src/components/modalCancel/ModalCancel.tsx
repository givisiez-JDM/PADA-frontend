import { useNavigate } from 'react-router-dom';
import IconClose from '../../assets/X.svg';
import {
  Modal,
  ModalBox,
  Close,
  ContenBox,
  ButtonBox,
  StyledButton as Button,
} from './ModalCancel.styles';

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  vallue?: string
}

const ModalCancel = ({ setModal, vallue }: Props) => {
  const navigate = useNavigate();

  const handleCancel = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/menu-medico');
  };

  return (
    <Modal>
      <ModalBox>
        <Close src={IconClose} alt="Fechar" onClick={() => setModal(false)} />
        <ContenBox>
          <h2>{vallue}</h2>
          <ButtonBox>
            <Button type="button" size="small" onClick={e => handleCancel(e)}>
              Sim
            </Button>
            <Button
              type="button"
              size="small"
              className="WhiteButton"
              onClick={() => setModal(false)}
            >
              Não
            </Button>
          </ButtonBox>
        </ContenBox>
      </ModalBox>
    </Modal>
  );
};

export default ModalCancel;
