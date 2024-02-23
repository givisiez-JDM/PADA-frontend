import useAxios from "../hooks/useAxios";
import { BASE_URL } from "./UserRequest";
import { PhaseType, TreatmentType, VaccineType } from "../types/TreatmentTypes";

export class TreatmentRequest {

    GET_TREATMENTS_BY_PATIENT_ID = (id: string | undefined) => {
        const treatment = useAxios<TreatmentType>();
        const token = window.localStorage.getItem("token");
        const url = `${BASE_URL}/treatments/patients/${id}`;
        const headers = { Authorization: token };
        treatment.get(url, { headers })
        return treatment
    }

    GET_PHASES_BY_TREATMENTS_ID = (id: string | undefined) => {
        const phases = useAxios<PhaseType[]>();
        const token = window.localStorage.getItem("token");
        const url = `${BASE_URL}/phases/treatments/${id}`;
        const headers = { Authorization: token };
        phases.get(url, { headers })
        return phases
    }

    GET_PHASES_BY_ID = (id: string | undefined) => {
        const phase = useAxios<PhaseType>();
        const token = window.localStorage.getItem("token");
        const url = `${BASE_URL}/phases/${id}`;
        const headers = { Authorization: token };
        phase.get(url, { headers })
        return phase
    }

    GET_VACCINES_BY_PHASES_ID = (id: string | undefined) => {
        const vaccines = useAxios<VaccineType[]>();
        const token = window.localStorage.getItem("token");
        const url = `${BASE_URL}/vaccines/phases/${id}`;
        const headers = { Authorization: token };
        vaccines.get(url, { headers })
        return vaccines
    }

}
