import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAxios from "../../hooks/useAxios";
import { UserRequest } from "../../requests/UserRequest";
import { useData } from "../../global/UserContext";
import Button from "../../components/button/Button";
import ModalDoctor from "../../components/modalDoctor/ModalDoctor";
import DefaultPatientPage from "../../components/defaultPatientPage/DefaultPatientPage";
import { PatientType } from "../../types/PatientTypes";
import {
  ButtonLocal,
  ContainerCheckbox,
  ConteinerCheckBox,
  ConteinerTreatment,
  FaseContentContainer,
  SwitchContainer,
  TextInputTime,
  Title
} from "./FasesDeTratamentoPage.styles";

const faseOne = z.object({
  start: z.string().nonempty('Data inválida'),
  end: z.string().nonempty('Data inválida'),
  times: z.array(z.object({ time: z.string() })),
  dosagens: z.array(z.object(
    { dosagem: z.string() })),

})
type RegisterFaseOne = z.infer<typeof faseOne>


const times: Array<string> = ['cada 7 dias', 'cada 3 semanas', 'cada 2 semanas', 'cada 4 semanas']
const dosagens: Array<string> = ['1:10.000', '1:100', ' 1:1.000', '1:10']


const patient: PatientType = { birthDate: '', email: '', id: '', name: 'Teste', photo: '', telephone: '' }

export default function FasesDeTratamento() {

  const userRequest = new UserRequest();
  const patients = useAxios();
  const { userId, getProfile, data } = useData();

  const [value, setValue] = useState(false)
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getProfile(userId);
  }, []);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const { url, headers } = userRequest.GET_PATIENTS(token);

    patients.get(url, { headers });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFaseOne>({
    resolver: zodResolver(faseOne),
    defaultValues: {
      times: [{ time: ' cada 7 dias' },
      { time: 'cada 3 semanas' },
      { time: 'cada 2 semanas' },
      { time: 'A cada 4 semanas' },
      ],
      dosagens: [{ dosagem: '1:10.000' },
      { dosagem: '1:100' },
      { dosagem: '1:1.000' },
      { dosagem: '1:10' },
      ]
    }
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  }

  return (
    <DefaultPatientPage patient={patient}>
      <form onSubmit={event => handleSubmit(event)}>
        <FaseContentContainer>
          <h2 className="faseOne">Fase 1</h2>
          <ConteinerTreatment>
            <Title>
              Duração do Tratamento
            </Title>
            <p>Início</p>
            <TextInputTime type="date" style={{ width: "12em" }}
              {...register('start')} />
            {errors.start && <span>{errors.start.message}</span>}
            <p>Fim</p>
            <TextInputTime type="date" style={{ width: "12em" }}
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
            {/* <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Inativa</Typography>
              <AntSwitch
                onChange={handleChange}
                inputProps={{ 'aria-label': 'ant design' }} />
            </Stack> */}

          </SwitchContainer>

          <ButtonLocal>
            <Button color="primary" title="enviar conviter"
              type="submit"
              style={{
                width: "10rem",
                fontSize: '1.125rem',
                fontFamily: 'sans-serif'
              }}>
              Enviar
            </Button>
          </ButtonLocal>


        </FaseContentContainer>

      </form>
    </DefaultPatientPage>
  );
}

