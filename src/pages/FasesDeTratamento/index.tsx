
import { ButtonLocal, ConteinerCheckBox, ConteinerTreatment, FaseContentContainer,  Title } from "./styles";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import { CheckBox } from "../../components/CheckBox";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MenuCadastro from "../../components/MenuRegister";


const faseOne = z.object({
start:z.string().nonempty('Data inválida'),
end:z.string().nonempty('Data inválida'),
times:z.array(z.object(
  {time: z.string(),
   checked:z.boolean() })),
dosagens:z.array(z.object(
  {dosagem: z.string(),
   checked:z.boolean() })),

})
type RegisterFaseOne = z.infer<typeof faseOne>



export default function FasesDeTratamento() {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFaseOne>({
    resolver: zodResolver(faseOne),
    defaultValues: {
      times:[{time:' cada 7 dias',checked:false},
             {time:'cada 3 semanas',checked:false},
             {time:'cada 2 semanas',checked:false},
             {time:'A cada 4 semanas',checked:false},
            ],
    dosagens:[{dosagem:'1:10.000'},
              {dosagem:'1:100'},
              {dosagem:'1:1.000'},
              {dosagem:'1:10'}, 
            ] 
  }
  })

  const onSubmit = handleSubmit((data) => {
    console.log("DATA SENT",data)
   
  })


//porvisório
const times: Array<string> = [' cada 7 dias','cada 3 semanas','cada 2 semanas','A cada 4 semanas']
//provisório
const dosagens: Array<string> = ['1:10.000','1:100',' 1:1.000','1:10']


  return (
    <>
      <MenuCadastro />
      <form onSubmit={onSubmit}>
      <FaseContentContainer>
        <h2 className="faseOne">Fase 1</h2>
        <ConteinerTreatment>
          <Title>
            Duração do Tratamento
          </Title>
           <p>Início</p>
           <TextInput  type="date" style={{ width: "12em" }} 
           {...register('start')}/>
           {errors.start &&  <span>{errors.start.message}</span>}
           <p>Fim</p>
          <TextInput  type="date" style={{ width: "12em" }}
          {...register('end')} />
          {errors.end && <span>{errors.end.message}</span>}
        </ConteinerTreatment>

        <div>
          <Title>
            Periodicidade do Tratamento
          </Title>
         
          <ConteinerCheckBox>
          {times.map(time => (
            <CheckBox key={time} label={time}/>
          ))}
          </ConteinerCheckBox>

        </div>
        <div>
          
          <Title>
            Dosagem do Medicamento
          </Title>
      
        <ConteinerCheckBox>
        {dosagens.map(dosagem => (
            <CheckBox key={dosagem} label={dosagem}/>
          ))}
        </ConteinerCheckBox>
        
        </div>
        
       <ButtonLocal>
          <Button color="primary" title="enviar conviter" 
          type="submit"
          style={{ width: "20rem", 
           fontSize:'1.125rem',
           fontFamily:'sans-serif' }}>
           Enviar convite
           </Button>
       </ButtonLocal>
       

      </FaseContentContainer>
    
    </form>
    </>
  );
}
