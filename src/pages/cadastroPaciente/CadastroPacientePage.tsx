import InputRegisterPatient from '../../components/InputRegisterPacient/InputRegisterPatient';
import ModalDoctor from '../../components/modalDoctor/ModalDoctor';
import MenuHeader from '../../components/menuHeader/MenuHeader';
import { UserRequest } from '../../requests/UserRequest';
import profileUser from '../../assets/profileUser.svg';
import doctorPhoto from '../../assets/doctorPhoto.svg';
import iconArrow from '../../assets/white-arrow.svg';
import { formatDate } from '../../utils/DateFns';
import useAxios from '../../hooks/useAxios';
import React, { useState } from 'react';
import {
  Allergies, BoxButton, BoxInput, Container, FirstBox, Main, MainContent, SecondBox,
  AllergiesContainer, TreatmentDuration, TreatmentMethod, AllergiesBox,
  LeftBox, RigthBox, OthersAllergies, PatientError,
} from './CadastroPacientePage.styles';
import { useNavigate } from 'react-router-dom';

const CadastroPacientePage = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState<string | null>('');
  const [email, setEmail] = useState<string | null>('');
  const [others, setOthers] = useState<any>('');
  const [allergies, setAllergies] = useState<any | null>([]);
  const [method, setMethod] = useState<string | null>(null);
  const [birthDate, setBirthDate] = useState<string | null>('');
  const [finalDate, setFinalDate] = useState<string | null>('');
  const [initialDate, setInitialDate] = useState<string | null>('');

  const req = useAxios();
  const userRequest = new UserRequest();
  const navigate = useNavigate();

  const checkAllergic = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newArr = [...allergies, event.target.value];

      setAllergies(newArr);
    }
    else if (!event.target.checked) {
      const newArr = allergies.filter(
        (item: string) => item !== event.target.value,
      );
      setAllergies(newArr);
    }
  };

  const onChangeMethod = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (method === event.target.value) {
        event.target.checked = false;
        setMethod(null);
      }
      else {
        setMethod(event.target.value);
      }
    },
    [method],
  );

  const postPatient = async () => {
    try {
      const token = window.localStorage.getItem('token');
      const { url, headers } = userRequest.POST_PATIENT(token);

      const currentAllergies = others ? [...allergies, others] : allergies;

      const body = {
        name, email, birthDate: formatDate(birthDate as string),
        allergies: currentAllergies, method, active: true,
      };

      const res = await req.postWithRes(url, body, { headers });

      if (!res.data) throw new Error();

      return res;
    }
    catch (error) {
      setOthers('');
    }
  };

  const postInicialAndFinalDate = async (id: string) => {
    const token = window.localStorage.getItem('token');
    const { url, headers } = userRequest.POST_TREATMENTS_PHASES_BY_ID(
      token,
      id,
    );
    const body = {
      dosage: '1:10',
      phaseNumber: 1,
      frequency: '7 dias',
      startTreatment: formatDate(initialDate as string),
      endTreatment: formatDate(finalDate as string),
      active: true,
    };

    await req.post(url, body, { headers });
  };

  const onClickSend = async () => {
    try {
      const res = await postPatient();
      const responseCoolDown = 1500;

      await new Promise(resolve => setTimeout(resolve, responseCoolDown));

      if (
        res
        && res.data
        && res.data.treatment
        && res.data.treatment.treatmentId
      ) {
        await postInicialAndFinalDate(res.data.treatment.treatmentId);

        await new Promise(resolve => setTimeout(resolve, responseCoolDown));

        navigate('/menu-medico');
      }
    }
    catch (error) {
      console.error(error);
    }
  };

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
              <input onChange={e => setName(e.target.value)} />
            </BoxInput>
            <BoxInput>
              <label htmlFor="">E-mail</label>
              <input onChange={e => setEmail(e.target.value)} />
            </BoxInput>
            <BoxInput>
              <label htmlFor="">Data de nascimento</label>
              <input type="date" onChange={e => setBirthDate(e.target.value)} />
            </BoxInput>
          </FirstBox>

          <SecondBox>
            <h1>Duração do Tratamento</h1>
            <TreatmentDuration>
              <label htmlFor="">Inicío</label>
              <InputRegisterPatient
                type="date"
                name="start"
                onChange={e => setInitialDate(e.target.value)}
              />

              <label htmlFor="">Fim</label>
              <InputRegisterPatient
                type="date"
                name="end"
                onChange={e => setFinalDate(e.target.value)}
              />
            </TreatmentDuration>

            <TreatmentMethod>
              <h1>Método de Tratamento</h1>

              <div>
                <div>
                  <label htmlFor="">Sublingual</label>
                  <input
                    type="checkbox"
                    onChange={onChangeMethod}
                    value="sublingual"
                    checked={method === 'sublingual'}
                  />
                </div>

                <div>
                  <label htmlFor="">Vacinas</label>
                  <input
                    type="checkbox"
                    onChange={onChangeMethod}
                    value="vacina"
                    checked={method === 'vacina'}
                  />
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
                <input
                  type="checkbox"
                  onChange={checkAllergic}
                  value="comida"
                />
                <label htmlFor="">Comida</label>
              </div>
              <div>
                <input type="checkbox" onChange={checkAllergic} value="vespa" />
                <label htmlFor="">Vespa</label>
              </div>
              <div>
                <input type="checkbox" onChange={checkAllergic} value="ácaro" />
                <label htmlFor="">Ácaro</label>
              </div>
              <div>
                <input type="checkbox" onChange={checkAllergic} value="gato" />
                <label htmlFor="">Gato</label>
              </div>
              <div>
                <input type="checkbox" onChange={checkAllergic} value="bola" />
                <label htmlFor="">Bola</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={checkAllergic}
                  value="inseto"
                />
                <label htmlFor="">Inseto</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={checkAllergic}
                  value="abelha"
                />
                <label htmlFor="">Abelha</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={checkAllergic}
                  value="formiga"
                />
                <label htmlFor="">Formiga</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={checkAllergic}
                  value="cachorro"
                />
                <label htmlFor="">Cachorro</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={checkAllergic}
                  value="barata"
                />
                <label htmlFor="">Barata</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={checkAllergic}
                  value="fungos"
                />
                <label htmlFor="">Fungos</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={checkAllergic}
                  value="candidíase"
                />
                <label htmlFor="">Candidíase</label>
              </div>
            </Allergies>
            <OthersAllergies>
              <label htmlFor="">Outras:</label>
              <InputRegisterPatient
                type="text"
                name="others"
                onChange={e => setOthers(e.target.value)}
                value={others}
              />
            </OthersAllergies>
          </AllergiesBox>
          <BoxButton>
            <button type="submit" onClick={onClickSend}>
              Salvar
            </button>
          </BoxButton>
        </AllergiesContainer>
      </Container>
      {req.error && (
        <PatientError>
          <p>{req.error.error}</p>
        </PatientError>
      )}
      {modal && <ModalDoctor />}
    </Main>
  );
};

export default CadastroPacientePage;
