import Input from "../../components/input/Input";
import MenuHeader from "../../components/menuHeader/MenuHeader";
import profileUser from "../../assets/profileUser.svg";
import doctorPhoto from "../../assets/doctorPhoto.svg";
import iconArrow from "../../assets/white-arrow.svg";
import {
  Allergies,
  BoxButton,
  BoxInput,
  Container,
  FirstBox,
  Main,
  MainContent,
  Medication,
  SecondBox,
  AllergiesContainer,
  TreatmentDuration,
  TreatmentMethod,
  AllergiesBox,
  LeftBox,
  RigthBox,
} from "./CadastroPacientePage.styles";
import ModalDoctor from "../../components/modalDoctor/ModalDoctor";
import { useState } from "react";

const CadastroPacientePage = () => {
  const [modal, setModal] = useState(false);
  return (
    <Main>
      <MenuHeader>
        <LeftBox>
          <img src={profileUser} alt="profile user" />
          <h1>Novo Paciente</h1>
        </LeftBox>
        <RigthBox onClick={() => setModal(!modal)}>
          <img src={doctorPhoto} alt="doctor photo" />
          <h1>Dr. Antonio</h1>
          <img src={iconArrow} alt="" />
        </RigthBox>
      </MenuHeader>
      <Container>
        <MainContent>
          <FirstBox>
            <BoxInput>
              <label htmlFor="">Nome</label>
              <Input type="text" name="name" />
            </BoxInput>
            <BoxInput>
              <label htmlFor="">Telefone</label>
              <Input type="text" name="phone" />
            </BoxInput>
            <BoxInput>
              <label htmlFor="">E-mail</label>
              <Input type="text" name="email" />
            </BoxInput>
            <BoxInput>
              <label htmlFor="">Data de nascimento</label>
              <Input type="text" name="born" />
            </BoxInput>
          </FirstBox>

          <SecondBox>
            <h1>Duração do Tratamento</h1>
            <TreatmentDuration>
              <label htmlFor="">Inicío</label>
              <Input type="text" name="start" />

              <label htmlFor="">Fim</label>
              <Input type="text" name="end" />
            </TreatmentDuration>

            <Medication>
              <label htmlFor="">Medicação</label>
              <Input type="text" name="medication" />
            </Medication>

            <TreatmentMethod>
              <h1>Método de Tratamento</h1>

              <div>
                <div>
                  <label htmlFor="">Sublingual</label>
                  <input type="checkbox" name="" id="" />
                </div>

                <div>
                  <label htmlFor="">Vacinas</label>
                  <input type="checkbox" name="" id="" />
                </div>
              </div>
            </TreatmentMethod>
          </SecondBox>
        </MainContent>

        <AllergiesContainer>
          <AllergiesBox>
            <h1>Alergias</h1>
            <Allergies>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Alimentar</label>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Vespa</label>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Ácaro</label>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Gato</label>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Inseto</label>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Abelha</label>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Formiga</label>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Cachorro</label>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Barata</label>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Fungo</label>
              </div>
            </Allergies>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Outros:</label>
            </div>

            <Input type="text" name="others" />
          </AllergiesBox>
          <BoxButton>
            <button>Salvar</button>
          </BoxButton>
        </AllergiesContainer>
      </Container>
      {modal && <ModalDoctor />}
    </Main>
  );
};

export default CadastroPacientePage;
