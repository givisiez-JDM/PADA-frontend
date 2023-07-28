import { ProfileContentContainer } from "./ConteudoPerfilPaciente.styles";
import { Modal } from "../Modal/Modal";
import Button from "../Button/Button";
import { useState } from "react";

export const ConteudoPerfilPaciente = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <ProfileContentContainer>
      <Button
        color="primary"
        title="adicionar-fase"
        onClick={() => setIsOpen(true)}
      >
        Adicionar Fase
      </Button>
      {isOpen && <Modal onClose={handleClose} />}
    </ProfileContentContainer>
  );
};

export default ConteudoPerfilPaciente;
