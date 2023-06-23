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
          <h1>Cadastrar Paciente</h1>
          <p>Nome</p>
          <TextInput type="text" name="nome" style={{ width: "52em" }} />
        </DivRowOne>
        <DivRowTwo>
          <div>
            <p>Telefone</p>
            <TextInput type="text" name="telefone" style={{ width: "16em" }} />
          </div>
          <div>
            <p>E-mail</p>
            <TextInput type="email" name="email" style={{ width: "16em" }} />
          </div>
          <div>
            <p>Data de Nascimento</p>
            <TextInput
              type="date"
              name="nascimento"
              style={{ width: "16em" }}
            />
          </div>
        </DivRowTwo>
        <DivRowThree>
          <GridTitle>
            <h2>Dosagem do Medicamento</h2>
          </GridTitle>
          <p>
            <Checkbox checked={false} onChange={handleCheckboxChange} />
            1:10.000
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            1:10.000
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            1:10.000
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />
            1:10.000
          </p>
        </DivRowThree>
        <DivRowFour>
          <GridTitle>
            <h2>Periodicidade do Tratamento</h2>
          </GridTitle>
          <p>
            <input type="checkbox" name="" className="checkbox" />A cada 7 dias
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />A cada 2
            semanas
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />A cada 3
            semanas
          </p>
          <p>
            <input type="checkbox" name="" className="checkbox" />A cada 4
            semanas
          </p>
        </DivRowFour>
        <DivRowFive>
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
        </DivRowFive>
        <DivRowSix>
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
          <GridSecondTitle>
            <h2>Duração do Tratamento</h2>
          </GridSecondTitle>
          <div>
            <p>Inicio</p>
            <TextInput type="date" name="nascimento" />
          </div>
          <div>
            <p>Fim</p>
            <TextInput type="date" name="nascimento" />
          </div>
        </DivRowSix>
        <DivRowSeven>
          <Button title="cadastrar-paciente" color="primary">
            Cadastrar Paciente
          </Button>
        </DivRowSeven>
      </ContentContainer>
    </form>
  );
};

export default ConteudoCadastroPaciente;
