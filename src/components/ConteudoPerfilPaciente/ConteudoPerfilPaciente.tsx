import { ProfileContentContainer } from "./ConteudoPerfilPaciente.styles";
import { Modal } from "../Modal/Modal";
import Button from "../Button/Button";
import { useState } from "react";

export const ConteudoPerfilPaciente = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ProfileContentContainer>
      <Button
        color="primary"
        title="adicionar-fase"
        onClick={() => setIsOpen(true)}
      >
        Adicionar Fase
      </Button>
      {isOpen && <Modal />}
    </ProfileContentContainer>
  );
};

export default ConteudoPerfilPaciente;
