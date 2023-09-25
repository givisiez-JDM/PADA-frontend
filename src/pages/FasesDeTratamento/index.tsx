// import MenuMedicoHeader from "../../components/MenuMedicoHeader/MenuMedicoHeader";
// import { ButtonLocal, ConteinerCheckBox, ConteinerTreatment, FaseContentContainer,  Title } from "./styles";
// import TextInput from "../../components/TextInput/TextInput";

// import Button from "../../components/Button/Button";
// import { CheckBox } from "../../components/CheckBox";



// export default function FasesDeTratamento() {

// //porvisório
// const times: Array<string> = [' cada 7 dias','cada 3 semanas','cada 2 semanas','A cada 4 semanas']
// //provisório
// const dosagens: Array<string> = ['1:10.000','1:100',' 1:1.000','1:10']


//   return (
//     <>
//       <MenuMedicoHeader />
//       <form>
//       <FaseContentContainer>
//         <h2 className="faseOne">Fase 1</h2>
//         <ConteinerTreatment>
//           <Title>
//             Duração do Tratamento
//           </Title>
//            <p>Início</p>
//            <TextInput name="inicio" type="date" style={{ width: "12em" }} />
//            <p>Fim</p>
//           <TextInput name="fim" type="date" style={{ width: "12em" }} />
//         </ConteinerTreatment>

//         <div>
         
//           <Title>
//             Periodicidade do Tratamento
//           </Title>
         
//           <ConteinerCheckBox>
//           {times.map(time => (
//             <CheckBox key={time} label={time}/>
//           ))}
//           </ConteinerCheckBox>

      

//         </div>
//         <div>
          
//           <Title>
//             Dosagem do Medicamento
//           </Title>
      
//         <ConteinerCheckBox>
//         {dosagens.map(dosagem => (
//             <CheckBox key={dosagem} label={dosagem}/>
//           ))}
//         </ConteinerCheckBox>
        
//         </div>
        
//        <ButtonLocal>
//           <Button color="primary" title="enviar conviter" 
//           style={{ width: "20rem", 
//            fontSize:'1.125rem',
//            fontFamily:'sans-serif' }}>
//            Enviar convite
//            </Button>
//        </ButtonLocal>
       

//       </FaseContentContainer>
    
//     </form>
//     </>
//   );
// }
