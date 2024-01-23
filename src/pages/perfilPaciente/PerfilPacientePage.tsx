import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { UserRequest } from "../../requests/UserRequest";
import { Alergis, ArticleContact, ArticleEmail, ArticleName, Born, Button, Header, Main, Medication, MethodTreatment, Middle, Nav, Section, Tel, Title, TitleTreatment, Treatment, TreatmentContainer, TreatmentDuration } from './PerfilPacientePage.styles'
import useAxios from '../../hooks/useAxios';
import arrow from '../../assets/arrow.png'

const PerfilPaciente = () => {
  const userRequest = new UserRequest();
  const useReq = useAxios()
  const treatmentReq = useAxios()
  const navigate = useNavigate();

  const { id } = useParams()

  React.useEffect(() => {

    const token = window.localStorage.getItem("token");
    const { url, headers } = userRequest.GET_PATIENTS_BY_ID(id, token);

    useReq.get(url, { headers })

  }, []);


  React.useEffect(() => {
    const token = window.localStorage.getItem("token")
    const { url, headers } = userRequest.GET_TREATMENTS_BY_ID(id, token)

    treatmentReq.get(url, { headers })
  }, [])

  const allergiesMap = treatmentReq?.data?.allergies.map((allergie: any) => (
    <p>{allergie}</p>
  ))


  return (
    <Main>
      <Header>
        {/* <h1>{useReq?.data?.photo}</h1> */}
        <p>{useReq?.data?.name}</p>
      </Header>
      <Middle>
        <Nav>
          <p>Perfil</p>
          <p>Fases</p>
          <p onClick={() => navigate(`/vacinas/paciente/${id}`)}>Vacinas</p>
        </Nav>
        <Section>
          <Title>Perfil</Title>

          <ArticleName>
            <h1>Nome</h1>
            <p>{useReq?.data?.name}</p>
          </ArticleName>

          <ArticleContact>
            <h1>contato</h1>
            <div>
              <Tel>

                <h1>telefone</h1>
                <p>{useReq?.data?.telephone}</p>

              </Tel>

              <ArticleEmail>
                <h1>Email</h1>
                <p>{useReq?.data?.email}</p>
              </ArticleEmail>
            </div>

          </ArticleContact>


          <Born>
            <h1>Data de nascimento</h1>
            <p>{useReq?.data?.birthDate}</p>
          </Born>

          <Alergis>
            <h1>Alergias
              <img src={arrow} />
            </h1>
            {allergiesMap}

          </Alergis>

          <Treatment>
            <TitleTreatment>
              Tratamento
              <img src={arrow} />
            </TitleTreatment>
            <TreatmentContainer>
              <TreatmentDuration>
                <h1>Duração do tratamento</h1>
                <p>Início:27/03/2023</p>
                <p>Fim:27/09/2023</p>
              </TreatmentDuration>

              <Medication>
                <h1>Medicação</h1>
                <p>Corticoide</p>
              </Medication>

              <MethodTreatment>
                <h1>Método do tratamento</h1>
                <p>{treatmentReq?.data?.method}</p>
              </MethodTreatment>
            </TreatmentContainer>
          </Treatment>
          <Button>Editar Perfil</Button>
        </Section>
      </Middle>
    </Main>
  );
};

export default PerfilPaciente;
