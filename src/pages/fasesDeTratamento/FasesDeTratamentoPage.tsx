import { ButtonLocal, ContainerCheckbox, ConteinerCheckBox, ConteinerTreatment, FaseContentContainer,  HeaderContainer,  SectionDoctor,  SwitchContainer,  TextInputTime,  Title } from "./styles";
import Button from "../../components/Button/Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import whiteArrow from "../../assets/white-arrow.svg";
import { UserRequest } from "../../Requests/UserRequest";
import { useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useData } from "../../Global/UserContext";
import React from "react";
import ModalDoctor from "../../components/ModalDoctor/ModalDoctor";

const faseOne = z.object({
start:z.string().nonempty('Data inválida'),
end:z.string().nonempty('Data inválida'),
times:z.array(z.object({time: z.string()})),
dosagens:z.array(z.object(
  {dosagem: z.string()})),

})
type RegisterFaseOne = z.infer<typeof faseOne>


export default function FasesDeTratamento() {

  const userRequest = new UserRequest();
  const navigate = useNavigate();
  const patients = useAxios();
  const { userId, getProfile, data } = useData();

  const [modal, setModal] = useState(false);

  React.useEffect(() => {
    getProfile(userId);
  }, []);

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    const { url, headers } = userRequest.GET_PATIENTS(token);

    patients.get(url, { headers });
  }, []);

  const getAllPatients = patients.data?.map((patient: any) => {
    return (
      <li onClick={() => navigate(`/perfil/paciente/${patient.id}`)} key={patient.id}>
        {patient.name}
      </li>
    );
  });




  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFaseOne>({
    resolver: zodResolver(faseOne),
    defaultValues: {
       times:[{time:' cada 7 dias'},
              {time:'cada 3 semanas'},
              {time:'cada 2 semanas'},
            {time:'A cada 4 semanas'},
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


const times: Array<string> = ['cada 7 dias','cada 3 semanas','cada 2 semanas','cada 4 semanas']

const dosagens: Array<string> = ['1:10.000','1:100',' 1:1.000','1:10']




const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));


const [value, setValue] = useState(false)

const handleChange = (event:any) => {
  setValue(event.target.checked)
  console.log(value)
}

  return (
    <>
    <HeaderContainer>
         <h1>Fase de Tratamento</h1>
          <SectionDoctor onClick={() => setModal(!modal)}>
            {data?.name}
            <img src={whiteArrow} alt="" />
          </SectionDoctor>
    </HeaderContainer>
        {/* <img src={doctor?.data?.photo?.data} alt="" /> */}

      
      <form onSubmit={onSubmit}>
      <FaseContentContainer>
        <h2 className="faseOne">Fase 1</h2>
        <ConteinerTreatment>
          <Title>
            Duração do Tratamento
          </Title>
           <p>Início</p>
           <TextInputTime  type="date" style={{ width: "12em" }} 
           {...register('start')}/>
           {errors.start &&  <span>{errors.start.message}</span>}
           <p>Fim</p>
          <TextInputTime  type="date" style={{ width: "12em" }}
          {...register('end')} />
          {errors.end && <span>{errors.end.message}</span>}
        </ConteinerTreatment>

        <div>
          <Title>
            Periodicidade do Tratamento
          </Title>
         
          <ConteinerCheckBox>
          {times.map(time => (
            <ContainerCheckbox key={time}>
            <div className="custom-checkbox" >
              <input id={time} className="checkbox"
                type="checkbox"
                value={time}
                {...register('times')}
              />
              <label htmlFor={time}>{time}</label>
            </div>
          </ ContainerCheckbox>
            
          ))}
          </ConteinerCheckBox>

        </div>
        <div>
          
          <Title>
            Dosagem do Medicamento
          </Title>
          <ConteinerCheckBox>
          {dosagens.map(dosagem => (
            <ContainerCheckbox key={dosagem}>
            <div className="custom-checkbox" >
              <input id={dosagem} className="checkbox"
                type="checkbox"
                value={dosagem}
                {...register('dosagens')}
              />
              <label htmlFor={dosagem}>{dosagem}</label>
            </div>
          </ ContainerCheckbox>
            
          ))}
          </ConteinerCheckBox>
        </div>
        
        <SwitchContainer>
        <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Inativa</Typography>
        <AntSwitch 
        onChange={handleChange}
        inputProps={{ 'aria-label': 'ant design' }} />
        </Stack>
       
        </SwitchContainer>
        
       <ButtonLocal>
          <Button color="primary" title="enviar conviter" 
          type="submit"
          style={{ width: "10rem", 
           fontSize:'1.125rem',
           fontFamily:'sans-serif' }}>
           Enviar
           </Button>
       </ButtonLocal>
       

      </FaseContentContainer>
    
    </form>
    {modal && <ModalDoctor />}
    </>
  );
}

