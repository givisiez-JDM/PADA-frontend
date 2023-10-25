import { ConteinerCheckBox, ContentContainer, ContentRegister, ContentTreatment, InputDate, RegisterAlergis, RegisterButton, TextInputTreatment } from "./styles";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { CheckBox } from "../../components/CheckBox";
import { useState } from "react";
import MenuCadastro from "../../components/MenuCadastro";





const newpatient = z.object({
  name: z.string().nonempty('Nome inválido'),
  telephone:z.string().nonempty('Número inválido'),
  email:z.string().email('Email inválido').nonempty('Email inválido'),
  birth:z.string().nonempty('Data inválida'),
  alergias:z.array(z.boolean()),
  start:z.string().nonempty('Data inválida'),
  end:z.string().nonempty('Data inválida'),
  medication:z.string().nonempty('Medicamaneto inválido'),
  treatment:z.array(z.string()),
})

type RegisterPatient = z.infer<typeof newpatient>

const CadastroPaciente = () => {

  const {
    register,
    handleSubmit,
    // control,
       formState: { errors },
  } = useForm<RegisterPatient>({
    resolver: zodResolver(newpatient),
    // defaultValues:{
    //   alergias: [
    //     {alergia:'Alimentar',checked:false},
    //     {alergia:'Vespa',checked:false},
    //     {alergia:'Ácaro',checked:false},
    //     {alergia:'Gato',checked:false},
    //     {alergia:'Inseto',checked:false},
    //     {alergia:'Abelha',checked:false},
    //     {alergia:'Formiga',checked:false},
    //     {alergia:'Cachorro',checked:false},
    //     {alergia:'Barata',checked:false},
    //     {alergia:'Fungo',checked:false}, 
    //   ]
    // }

  })
 
  // console.log("All values", getValues());
  // const navigate = useNavigate()
  // //const nextPage = navigate('/fase-tratamento')

  const onSubmit = handleSubmit((data) => {
    console.log("DATA SENT",data)
   // nextPage
  })
  
 

//provisório //
 const Alergias : Array<string> = ['Alimentar','Vespa','Ácaro','Gato','Inseto','Abelha','Formiga','Cachorro','Barata','Fungo']
//provisório //
// const Metodos: Array<string> = ['Sublingual','Vacinas']

const handleChange =  (index:  number) => {
   
  const novoArray = [...checked]; 
    novoArray[index] = !novoArray[index]; 
    setChecked(novoArray); 
      console.log(checked, index)
  }


 const [checked, setChecked] = useState([false,false,false,false,false,false,false,false,false,false])
// const [checked, setChecked] = useState(false)

// const { fields } = useFieldArray({
//   control,
//   name: 'alergias',
// })


    return (
      <>
      <MenuCadastro/>
       
       <ContentContainer onSubmit={onSubmit}>
        
        <ContentRegister>
          <div className="ContentInput">
            <label>Nome</label>
            <TextInputTreatment type="text"  style={{width:' 19.75rem'}}
             {...register("name")} />
             {errors.name && <span>{errors.name.message}</span>}
          </div>
      
          <div className="ContentInput">
            <label>Telefone</label>
            <TextInputTreatment type="number" style={{width:' 19.75rem'}}
            {...register("telephone")} />
            {errors.telephone && <span>{errors.telephone.message}</span>}
          </div>

          <div className="ContentInput">
            <label>E-mail</label>
            <TextInputTreatment type="email"  style={{width:' 19.75rem'}}
              {...register("email")} />
              {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="ContentInput date">
            <label>Data de Nascimento</label>
            <TextInputTreatment
              type="date"
              style={{width:' 19.75rem'}}
              {...register('birth')}
            />
            {errors.birth && <span>{errors.birth.message}</span>}
          </div>
          
        <RegisterAlergis>
          <div>
            <h2>Alergias</h2>
          </div>
          


          <div className="inputCheckbox">
          
          {Alergias.map( (field, index) => (
            <CheckBox 
            // checkedinput={checked.indexOf}
              label={field} 
              handleChange={ () => {
                handleChange(index)
                console.log(index);
              }}
              key={field}
              checkedinput= {checked[index]}
               />
           ))} 
      
           {/* <CheckBox label='Outros'/> */}

          </div>  
          
          <TextInputTreatment type="text" disabled style={{width:' 19.75rem'}}/>

        </RegisterAlergis>

        </ContentRegister>

       <ContentTreatment>
       
      <p>Duração do Tratamento</p>
        <div className="duration">
        <label>início</label>
        <InputDate
              type="date"
              style={{width:'9.125'}}
              {...register('start')}
            />
            {errors.start && <span>{errors.start.message}</span>}
      </div>
      <div className="duration">
         <label>Fim</label>
           <InputDate
              type="date"
              style={{width:'9.125'}}
              {...register('end')}
            />
            {errors.end && <span>{errors.end.message}</span>}
      </div>
      
       <div className="duration">
           <label className="labelTreatment">Medicação</label>
           <TextInputTreatment type="text" className='medication' 
           {...register('medication')}/>
           {errors.medication && <span>{errors.medication.message}</span>}
       </div>
    
        <label className="labelTreatment">Método de Tratamento</label>
      
      <ConteinerCheckBox>
         {/* {Metodos.map(metodo => (
          <CheckBox key={metodo} label={metodo}
          {...register('treatment')}/>
         ))} */}
      </ConteinerCheckBox> 
      
       </ContentTreatment>

          <RegisterButton type="submit">
           Avançar
          </RegisterButton>

       </ContentContainer>
     
      </>
    );
   
  };
  
  export default CadastroPaciente;