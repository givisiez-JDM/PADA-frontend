import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import { ContentContainer, DivRowFive, DivRowFour, DivRowOne, DivRowThree, DivRowTwo, GridTitle } from "./styles";
import CadastroPacienteHeader from "../../components/MenuMedicoHeader/MenuMedicoHeader";


const CadastroPaciente = () => {
    return (
      <>
      <CadastroPacienteHeader/>
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
          <Button title="cadastrar-paciente" color="primary">
            Avançar
          </Button>
        </DivRowFive>
      </ContentContainer>
    </form>
      </>
    );
  };
  
  export default CadastroPaciente;