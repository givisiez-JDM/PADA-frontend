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
import { NavLink } from "react-router-dom";

const ConteudoCadastroPaciente = () => {
  const handleCheckboxChange = (checked: boolean) => {
    console.log("Checkbox checked: ", checked);
  };
  return (
    <form action="">
      <ContentContainer>
        <DivRowOne>
          <p>Nome</p>
          <TextInput type="text" name="nome" style={{ width: "35em" }} />
          <div>
            <p>Telefone</p>
            <TextInput type="text" name="telefone" style={{ width: "35em" }} />
          </div>
          <div>
            <p>E-mail</p>
            <TextInput type="email" name="email" style={{ width: "35em" }} />
          </div>
          <div>
            <p>Data de Nascimento</p>
            <TextInput
              type="date"
              name="nascimento"
              style={{ width: "35em" }}
            />
          </div>
        </DivRowOne>
        <DivRowTwo>
          <GridTitle>
            <h2>Método de Tratamento</h2>
          </GridTitle>
          <p>
            <label>
              <input type="checkbox" name="sublingual" className="checkbox" />
              Sublingual
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="vacinas" className="checkbox" />
              Vacinas
            </label>
          </p>
        </DivRowTwo>
        <DivRowThree>
          <GridTitle>
            <h2>Alergias</h2>
          </GridTitle>
          <p>
            <label>
              <input type="checkbox" name="alimentar" className="checkbox" />
              Alimentar
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="abelha" className="checkbox" />
              Abelha
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="vespa" className="checkbox" />
              Vespa
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="formiga" className="checkbox" />
              Formiga
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="" className="checkbox" />
              Ácaro
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="" className="checkbox" />
              Cachorro
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="" className="checkbox" />
              Gato
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="" className="checkbox" />
              Barata
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="" className="checkbox" />
              Bola?
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="" className="checkbox" />
              Fungo
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="" className="checkbox" />
              Inseto
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" name="" className="checkbox" />
              Candidíase
            </label>
          </p>
        </DivRowThree>
        <DivRowFour></DivRowFour>
        <DivRowFive>
          <NavLink to="/fase-tratamento">
            <Button title="cadastrar-paciente" color="primary">
              Avançar
            </Button>
          </NavLink>
        </DivRowFive>
      </ContentContainer>
    </form>
  );
};

export default ConteudoCadastroPaciente;
