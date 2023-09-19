
import { CheckBox } from "../../components/CheckBox";
import CadastroPacienteHeader from "../../components/MenuMedicoHeader/MenuMedicoHeader";

import { ConteinerCheckBox, ContentContainer, ContentRegister, ContentTreatment, InputDate, RegisterAlergis, RegisterButton, TextInputTreatment } from "./styles";



const CadastroPaciente = () => {


//provisório //
const Alergias : Array<string> = ['Alimentar','Vespa','Ácaro','Gato','Inseto','Abelha','Formiga','Cachorro','Barata','Fungo']
//provisório //
const Metodos: Array<string> = ['Sublingual','Vacinas']



    return (
      <>
      <CadastroPacienteHeader/>
       
       <ContentContainer>
        
        <ContentRegister>
          <div className="ContentInput">
            <label>Nome</label>
            <TextInputTreatment type="text" name="nome"  style={{width:' 19.75rem'}}/>
          </div>
      
          <div className="ContentInput">
            <label>Telefone</label>
            <TextInputTreatment type="text" name="telefone" style={{width:' 19.75rem'}} />
          </div>

          <div className="ContentInput">
            <label>E-mail</label>
            <TextInputTreatment type="email" name="email" style={{width:' 19.75rem'}}  />
          </div>

          <div className="ContentInput date">
            <label>Data de Nascimento</label>
            <TextInputTreatment
              type="date"
              name="nascimento"
              style={{width:' 19.75rem'}}
            />
          </div>
          
        <RegisterAlergis>
          <div>
            <h2>Alergias</h2>
          </div>
          
          <div className="inputCheckbox">
           {Alergias.map(alergia => (
            <CheckBox key={alergia} label={alergia}/>
           ))}
           <CheckBox label='Outros'/>
           
          </div>  
          <TextInputTreatment type="text" name="outros"  style={{width:' 19.75rem'}}/>
        </RegisterAlergis>

        </ContentRegister>

       <ContentTreatment>
       
      <p>Duração do Tratamento</p>
        <div className="duration">
        <label>início</label>
        <InputDate
              type="date"
              name="inicio"
              style={{width:'9.125'}}
            />
      </div>
      <div className="duration">
         <label>Fim</label>
           <InputDate
              type="date"
              name="fim"
              style={{width:'9.125'}}
            />
      </div>
      
       <div className="duration">
           <label className="labelTreatment">Medicação</label>
           <TextInputTreatment type="text" name="nome" className='medication' />
       </div>
    
    
        <label className="labelTreatment">Método de Tratamento</label>
      
      <ConteinerCheckBox>
         {Metodos.map(metodo => (
          <CheckBox key={metodo} label={metodo}/>
         ))}
      </ConteinerCheckBox> 
      
       </ContentTreatment>

          <RegisterButton>
           Avançar
          </RegisterButton>

       </ContentContainer>
     
      </>
    );
  };
  
  export default CadastroPaciente;