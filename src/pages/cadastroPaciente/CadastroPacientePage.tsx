
// import { AvatarConatiner, ContainerCheckbox, ConteinerButton, ContentContainer, ContentRegister, ContentTreatment, HeaderContainer, HeaderImage, InputDate, Plusbutton, RegisterAlergis, RegisterButton, SectionDoctor, TextInputTreatment } from "./styles";
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { useState } from "react";
// import { UserRequest } from "../../Requests/UserRequest";
// import { useNavigate } from "react-router-dom";
// import useAxios from "../../Hooks/useAxios";
// import { useData } from "../../Global/UserContext";
// import ModalDoctor from "../../components/ModalDoctor/ModalDoctor";
// import whiteArrow from "../../assets/white-arrow.svg";
// import React from "react";
// import image from '../../assets/profileUser.png'
// import Avatar from "@mui/material/Avatar";
// import { Plus } from "phosphor-react";
// import axios from "axios";


// const newpatient = z.object({
//   name: z.string().nonempty('Nome inválido'),
//   telephone: z.string().nonempty('Número inválido'),
//   email: z.string().email('Email inválido').nonempty('Email inválido'),
//   birthDate: z.string().nonempty('Data inválida'),
//   alergias: z.array(z.string()),
//   alergia: z.string(),
//   method: z.array(z.string()),
// })

// type RegisterPatient = z.infer<typeof newpatient>

// const CadastroPaciente = () => {

//     const userRequest = new UserRequest();
//     const navigate = useNavigate();
//     const patients = useAxios();
//     const { userId, getProfile, data } = useData();
  
//     const [modal, setModal] = useState(false);
  
//     React.useEffect(() => {
//       getProfile(userId);
//     }, []);
  
//     React.useEffect(() => {
//       const token = window.localStorage.getItem("token");
//       const { url, headers } = userRequest.GET_PATIENTS(token);
  
//       patients.get(url, { headers });
//     }, []);
  


//   const {
//     register,
//     handleSubmit,
//     getValues,
//     formState: { errors },
//   } = useForm<RegisterPatient>({
//     resolver: zodResolver(newpatient),

//   })

//   const [usingOtros, setUsingOtros] = useState(false)
//  // const url = 'https://app-vacina-production.up.railway.app/doctors/patient-register'



//   const onSubmit = async (data:any) => {
//    // const values = {...getValues()}
//   //  const newData = {...values, allergies: [...values.alergias], method: values.method[0], active: true}
//   //  console.log("DATA SENT", newData)

//    //  try{
//      //   const token = window.localStorage.getItem("token");
//       //const res = await axios.post(url,newData, {
//      //   headers: {
//      //       Authorization: `${token}`
//      //   }
//     //  })
//     //   console.log(res.data)
//    //  }catch (error){
//       //   console.log('response')
//  // }
//   }



//   const Alergias: Array<string> = ['alimentar', 'vespa', 'Ácaro', 'Gato', 'Inseto', 'Abelha', 'Formiga', 'Cachorro', 'Barata', 'Fungo']

//   const Metodos: Array<string> = ['sublingual', 'vacina']


//  // console.log("VALUES",getValues())



//   return (
//     <>
//       <HeaderContainer>
//       <HeaderImage>
       
//        <AvatarConatiner>
      
//         <Avatar
//         alt="Remy Sharp"
//         src={image}
//         sx={{ width: 56, height: 56 }}
//       />
//        <Plusbutton><Plus size={24} color="#D1D1D1" weight="bold" /></Plusbutton>
       
//        </AvatarConatiner>
       
//        <h1>Novo Paciente</h1>
      
//         </HeaderImage>

//           <SectionDoctor onClick={() => setModal(!modal)}>
//             {data?.name}
//             <img src={whiteArrow} alt="" />
//           </SectionDoctor>
//         </HeaderContainer>

//         <ContentContainer onSubmit={handleSubmit(onSubmit)}>

// <ContentRegister>
//   <div className="ContentInput">
//     <label>Nome</label>
//     <TextInputTreatment type="text" style={{ width: ' 19.75rem' }}
//       {...register("name")} />
//     {errors.name && <span>{errors.name.message}</span>}
//   </div>

//   <div className="ContentInput">
//     <label>Telefone</label>
//     <TextInputTreatment type="number" style={{ width: ' 19.75rem' }}
//       {...register("telephone")} />
//     {errors.telephone && <span>{errors.telephone.message}</span>}
//   </div>

//   <div className="ContentInput">
//     <label>E-mail</label>
//     <TextInputTreatment type="email" style={{ width: ' 19.75rem' }}
//       {...register("email")} />
//     {errors.email && <span>{errors.email.message}</span>}
//   </div>

//   <div className="ContentInput date">
//     <label>Data de Nascimento</label>
//     <TextInputTreatment
//       type="date"
//       style={{ width: ' 19.75rem' }}
//       {...register('birthDate')}
//     />
//     {errors.birthDate && <span>{errors.birthDate.message}</span>}
//   </div>

//   <RegisterAlergis>
//     <div>
//       <h2>Alergias</h2>
//     </div>


//     <div className="inputCheckbox">

//       {Alergias.map((field) => (
//         <ContainerCheckbox key={field}>
//           <div className="custom-checkbox" >
//             <input id={field} className="checkbox"
//               type="checkbox"
//               value={field}
//               {...register('alergias')}
//             />
//             <label htmlFor={field}>{field}</label>
//           </div>
//         </ ContainerCheckbox>

//       ))}
//       <ContainerCheckbox >
//           <div className="custom-checkbox" >
//             <input 
//             id="outros"
//             className="checkbox"
//             type="checkbox"
//             value='outros'
//             onChange={() => setUsingOtros(!usingOtros)}
//             />
//             <label htmlFor='outros' >Outros:</label>
//           </div>
//         </ ContainerCheckbox>
//     </div>
     
//          {!usingOtros ?
//            <TextInputTreatment type="text" disabled={true} style={{ width: ' 19.75rem' }} /> :
//            <TextInputTreatment type="text"  style={{ width: ' 19.75rem' }} 
//           {...register('alergia')} /> 
//          }
      
   

//   </RegisterAlergis>

// </ContentRegister>

// <ContentTreatment>

//   <label className="labelTreatment">Método de Tratamento</label>

//   <ContainerCheckbox>
//   { Metodos.map((field) => (
//         <ContainerCheckbox key={field}>
//           <div className="custom-checkbox" >
//             <input id={field} className="checkbox"
//               type="checkbox"
//               value={field}
//               {...register('method')}
//             />
//             <label htmlFor={field}>{field}</label>
//           </div>
//         </ ContainerCheckbox>

//       ))}

//   </ContainerCheckbox>

// </ContentTreatment>



// </ContentContainer>

// <ConteinerButton>
// <RegisterButton type="submit" onClick={onSubmit}>
//   Avançar
// </RegisterButton>
// </ConteinerButton>
//     </>
//   );

// };

// export default CadastroPaciente;
