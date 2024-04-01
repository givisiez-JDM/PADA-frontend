import React from "react";
import { useParams } from "react-router-dom";
import { UserRequest } from "../../requests/UserRequest";
import { Alergis, ArticleContact, ArticleEmail, ArticleName, Born, Button, Main, MethodTreatment, Middle, Section, Tel, Title, TitleTreatment, Treatment, TreatmentContainer, TreatmentDuration } from "./PerfilPacientePage.styles";
import useAxios from "../../hooks/useAxios";
import arrow from "../../assets/arrow.png";
import Header from "../../components/patientHeader/PatientHeader";
import { formatDate } from "../../utils/DateFns";
import SidebarPatientPage from "../../components/sidebarPatientPage/SidebarPatientPage";

const PerfilPaciente = () => {
  const userRequest = new UserRequest();
  const useReq = useAxios();
  const treatmentReq = useAxios();
  const treatmentPhasesReq = useAxios();

  const { id } = useParams();

  const treatmentId = treatmentReq?.data && treatmentReq?.data?.id;

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    const { url, headers } = userRequest.GET_PATIENTS_BY_ID(id, token);

    useReq.get(url, { headers });
  }, []);

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    const { url, headers } = userRequest.GET_TREATMENTS_BY_ID(id, token);

    treatmentReq.get(url, { headers });
  }, []);

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    const { url, headers } = userRequest.GET_TREATMENTS_PHASES_BY_ID(treatmentId, token);

    treatmentPhasesReq.get(url, { headers });
  }, [treatmentId]);

  const allergiesMap = treatmentReq?.data?.allergies.map((allergie: any) => (
    <p key={allergie}>{allergie}</p>
  ));

  const treatmentPhaseMap = treatmentPhasesReq?.data && treatmentPhasesReq.data.map((treatment: any) => (
    <TreatmentDuration key={treatment.id}>
      <h1>Duração do tratamento</h1>
      <p>Início: {formatDate(treatment.startTreatment)}</p>
      <p>Fim: {formatDate(treatment.endTreatment)}</p>
    </TreatmentDuration>
  ));

  return (
    <Main>
      <Header patient={useReq?.data} />
      <Middle>
        {useReq?.data ? (
          <SidebarPatientPage patient={useReq.data} />
        ) : (
          <p>Carregando informações do paciente...</p>
        )}

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
            <h1>
              Alergias
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
              {treatmentPhaseMap}
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
