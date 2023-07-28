import { ModalContainer, ModalContent } from "./Modal.styles";
import {
  FaseContentContainer,
  DuracaoTratamento,
  PeriodicidadeTratamento,
  DivTitle,
  DosagemMedicamento,
} from "../ConteudoFaseTratamento/ConteudoFaseTratamento.styles";

import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

interface ModalProps {
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <form action="">
          <FaseContentContainer>
            <h4
              onClick={onClose}
              style={{
                border: "solid 1px white",
                padding: "0.5rem",
                borderRadius: "0.3rem",
                width: "28px",
                height: "30px",
                cursor: "pointer",
                alignSelf: "end",
                marginRight: "1rem",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFF",
              }}
            >
              X
            </h4>
            <DuracaoTratamento>
              <h3>Duração do Tratamento</h3>
              <p>Início</p>
              <TextInput name="inicio" type="date" style={{ width: "12em" }} />
              <p>Fim</p>
              <TextInput name="fim" type="date" style={{ width: "12em" }} />
            </DuracaoTratamento>
            <PeriodicidadeTratamento>
              <DivTitle>
                <h3>Periodicidade do Tratamento</h3>
              </DivTitle>
              <label>
                <input type="checkbox" name="sete-dias" className="checkbox" />A
                cada 7 dias
              </label>
              <label>
                <input
                  type="checkbox"
                  name="tres-semanas"
                  className="checkbox"
                />
                A cada 3 semanas
              </label>
              <label>
                <input
                  type="checkbox"
                  name="duas-semanas"
                  className="checkbox"
                />
                A cada 2 semanas
              </label>
              <label>
                <input
                  type="checkbox"
                  name="quatro-semanas"
                  className="checkbox"
                />
                A cada 4 semanas
              </label>
            </PeriodicidadeTratamento>
            <DosagemMedicamento>
              <DivTitle>
                <h3>Dosagem do Medicamento</h3>
              </DivTitle>
              <label>
                <input
                  type="checkbox"
                  name="quatro-semanas"
                  className="checkbox"
                />
                1:10.000
              </label>
              <label>
                <input
                  type="checkbox"
                  name="quatro-semanas"
                  className="checkbox"
                />
                1:100
              </label>
              <label>
                <input
                  type="checkbox"
                  name="quatro-semanas"
                  className="checkbox"
                />
                1:1.000
              </label>
              <label>
                <input
                  type="checkbox"
                  name="quatro-semanas"
                  className="checkbox"
                />
                1:10
              </label>
            </DosagemMedicamento>
            <Button color="primary" title="salvar" style={{ width: "8em" }}>
              Adicionar
            </Button>
          </FaseContentContainer>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};
