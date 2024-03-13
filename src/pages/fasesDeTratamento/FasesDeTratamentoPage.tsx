import { useState } from "react";
import { useForm } from "react-hook-form";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/button/Button";
import DefaultPatientPage from "../../components/defaultPatientPage/DefaultPatientPage";
import { PatientType } from "../../types/PatientTypes";
import Switch from "../../components/switch/Switch";
import {
  ButtonLocal,
  ContainerCheckbox,
  ConteinerCheckBox,
  ConteinerTreatment,
  DateInput,
  PhaseField,
  PhaseForm,
  PhaseStatus,
  PhaseTitle,
  Title
} from "./FasesDeTratamentoPage.styles";

const faseOne = zod.object({
  id: zod.string(),
  phaseNumber: zod.number(),
  active: zod.boolean(),
  startTreatment: zod.string().min(10, 'Data inválida'),
  endTreatment: zod.string().min(10, 'Data inválida'),
  frequency: zod.array(zod.object({ frequency: zod.string() })),
  dosage: zod.array(zod.object(
    { dosage: zod.string() })),

})
type RegisterFaseOne = zod.infer<typeof faseOne>


const frequency: Array<string> = ['cada 7 dias', 'cada 3 semanas', 'cada 2 semanas', 'cada 4 semanas']
const dosage: Array<string> = ['1:10.000', '1:100', ' 1:1.000', '1:10']

const patient: PatientType = { birthDate: '', email: '', id: '', name: 'Teste', photo: '', telephone: '' }

export default function FasesDeTratamento() {
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFaseOne>({
    resolver: zodResolver(faseOne),
    defaultValues: {
      frequency: [{ frequency: ' cada 7 dias' },
      { frequency: 'cada 3 semanas' },
      { frequency: 'cada 2 semanas' },
      { frequency: 'A cada 4 semanas' },
      ],
      dosage: [{ dosage: '1:10.000' },
      { dosage: '1:100' },
      { dosage: '1:1.000' },
      { dosage: '1:10' },
      ]
    }
  })


  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <DefaultPatientPage patient={patient}>
      <PhaseForm onSubmit={event => handleFormSubmit(event)}>
        <PhaseTitle>Fase {2}</PhaseTitle>
        <ConteinerTreatment>
          <Title>
            Duração do Tratamento
          </Title>
          <p>Início</p>
          <DateInput type="date" style={{ width: "12em" }}
            {...register('startTreatment')} />
          {errors.startTreatment && <span>{errors.startTreatment.message}</span>}
          <p>Fim</p>
          <DateInput type="date" style={{ width: "12em" }}
            {...register('endTreatment')} />
          {errors.endTreatment && <span>{errors.endTreatment.message}</span>}
        </ConteinerTreatment>
        <PhaseField>
          <Title>
            Periodicidade do Tratamento
          </Title>

          <ConteinerCheckBox>
            {frequency.map(frequency => (
              <ContainerCheckbox key={frequency}>
                <div className="custom-checkbox" >
                  <input id={frequency} className="checkbox"
                    type="radio"
                    value={frequency}
                    {...register('frequency')}
                  />
                  <label htmlFor={frequency}>{frequency}</label>
                </div>
              </ ContainerCheckbox>

            ))}
          </ConteinerCheckBox>

        </PhaseField>
        <PhaseField>

          <Title>
            Dosagem do Medicamento
          </Title>
          <ConteinerCheckBox>
            {dosage.map(dosage => (
              <ContainerCheckbox key={dosage}>
                <div className="custom-checkbox" >
                  <input id={dosage} className="checkbox"
                    type="radio"
                    value={dosage}
                    {...register('dosage')}
                  />
                  <label htmlFor={dosage}>{dosage}</label>
                </div>
              </ ContainerCheckbox>

            ))}
          </ConteinerCheckBox>
        </PhaseField>
        <PhaseField>

          <PhaseStatus>
            <Switch
              activeLabel="Ativo"
              inactiveLabel="Inativo"
              status={checked}
              setStatus={setChecked}
            />
          </PhaseStatus>
        </PhaseField>
        <ButtonLocal>
          <Button type="submit">
            Enviar
          </Button>
        </ButtonLocal>
      </PhaseForm>
    </DefaultPatientPage>
  );
}

