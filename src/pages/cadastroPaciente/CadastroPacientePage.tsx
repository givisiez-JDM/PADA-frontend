
import Input from "../../components/input/Input"
import MenuHeader from "../../components/menuHeader/MenuHeader"
import { Allergies, BoxButton, BoxInput, Container, InputContent, Main, Medication, SecondBox, ThirdBox, TreatmentDuration, TreatmentMethod } from "./CadastroPacientePage.styles"


const CadastroPacientePage = () => {
  return (
    <Main>
        <MenuHeader/>
        <Container>  
            <InputContent>
                <BoxInput>
                    <label htmlFor="">Nome</label>
                    <Input 
                        type="text"
                        name="name"
                    />
                </BoxInput>
                <BoxInput>
                    <label htmlFor="">Telefone</label>
                    <Input 
                        type="text" 
                        name="phone"
                    />
                </BoxInput>
                <BoxInput>
                    <label htmlFor="">E-mail</label>
                    <Input 
                        type="text" 
                        name="email"
                    />
                </BoxInput>
                <BoxInput>
                    <label htmlFor="">Data de nascimento</label>
                    <Input 
                        type="text" 
                        name="born"
                    />
                </BoxInput>
            </InputContent>

            <SecondBox>
                <h1>Duração do Tratamento</h1>
                <TreatmentDuration>
                    <label htmlFor="">Inicío</label>
                    <Input 
                        type="text" 
                        name="start"
                    />

                    <label htmlFor="">Fim</label>
                    <Input 
                        type="text" 
                        name="end"
                    />
                </TreatmentDuration>

                <Medication>
                    <h1>Medicação</h1>
                    <Input
                        type="text"
                        name="medication"
                    />
                </Medication>

                <TreatmentMethod>
                    <h1>Método de Tratamento</h1>

                    <label htmlFor="">Sublingual</label>
                    <input type="checkbox" name="" id="" />

                    <label htmlFor="">Vacinas</label>
                    <input type="checkbox" name="" id="" />
                </TreatmentMethod>

            </SecondBox>

            <ThirdBox>
                <h1>Alergias</h1>
                <Allergies>
                    <div>
                        <label htmlFor="">Alimentar</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Vespa</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Ácaro</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Gato</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Inseto</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Outros:</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Abelha</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Formiga</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Cachorro</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Barata</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Fungo</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    
                </Allergies>
                <Input 
                    type="text" 
                    name="others"
                />
            </ThirdBox>

            <BoxButton>
                <button>Salvar</button>
            </BoxButton>


        </Container>
    </Main>
  )
}

export default CadastroPacientePage