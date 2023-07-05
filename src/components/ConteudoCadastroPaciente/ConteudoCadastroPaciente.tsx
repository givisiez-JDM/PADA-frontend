import {
  ContentContainer,
  DivRowOne,
  DivRowTwo,
  DivRowThree,
  DivRowFour,
  DivRowFive,
  DivRowSix,
  DivRowSeven,
  GridTitle,
  GridSecondTitle,
} from "./ConteudoCadastroPaciente.styles";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";

const ConteudoCadastroPaciente = () => {
  const handleCheckboxChange = (checked: boolean) => {
    console.log("Checkbox checked: ", checked);
  };
  return (
    <form action="">
      <ContentContainer>
        <DivRowOne>
          <p>Nome</p>
          <TextInput type="text" name="nome" style={{ width: "25em" }} />
          <div>
            <p>Telefone</p>
            <TextInput type="text" name="telefone" style={{ width: "25em" }} />
          </div>
          <div>
            <p>E-mail</p>
            <TextInput type="email" name="email" style={{ width: "25em" }} />
          </div>
          <div>
            <p>Data de Nascimento</p>
            <TextInput
              type="date"
              name="nascimento"
              style={{ width: "25em" }}
            />
          </div>
        </DivRowOne>
        <DivRowTwo>
          <GridTitle>
            <h2>Método de Tratamento</h2>
          </GridTitle>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            Sublingual
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            Vacinas
          </p>
        </DivRowTwo>
        <DivRowThree>
          <GridTitle>
            <h2>Alergias</h2>
          </GridTitle>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            Alimentar
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            Abelha
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            Vespa
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            Formiga
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            Ácaro
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            Cachorro
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            Gato
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            Barata
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            Bola?
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            Fungo
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            Inseto
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            Candidíase
          </p>
        </DivRowThree>
        <DivRowFour></DivRowFour>
        <DivRowFive>
          <Button title="cadastrar-paciente" color="primary">
            Avançar
          </Button>
        </DivRowFive>
      </ContentContainer>
    </form>
  );
};

export default ConteudoCadastroPaciente;
