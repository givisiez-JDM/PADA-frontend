import { ProfileContentContainer } from "./ConteudoPerfilPaciente.styles";
import Button from "../Button/Button";

export const ConteudoPerfilPaciente = () => {
  return (
    <ProfileContentContainer>
      <Button color="primary" title="adicionar-fase">
        Adicionar Fase
      </Button>
    </ProfileContentContainer>
  );
};

export default ConteudoPerfilPaciente;
