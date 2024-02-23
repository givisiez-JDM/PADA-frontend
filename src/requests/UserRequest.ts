export const BASE_URL = 'https://app-vacina-production.up.railway.app'

type SignupRequestBody = {
    name: string,
    email: string,
    password: string
}


export class UserRequest {
    USER_LOGIN = () => {
        return {
            url: `${BASE_URL}/login/doctors`
        }
    }

    USER_SIGNUP = (body: SignupRequestBody) => {
        return {
            url: `${BASE_URL}/doctors`,
            options: {
                body,
            },
        };
    };

    GET_DOCTOR_BY_ID = (id: any, token: string | null) => {
        return {
            url: `${BASE_URL}/doctors/${id}`,
            headers: {
                Authorization: token
            }
        }
    }

    GET_PATIENTS = (token: string | null) => {
        return {
            url: `${BASE_URL}/doctors/patients`,
            headers: {
                Authorization: token
            }
        }
    }

    GET_PATIENTS_BY_ID = (id: string | undefined, token: string | null) => {
        return {
            url: `${BASE_URL}/patients/${id}`,
            headers: {
                Authorization: token,
            }
        }
    }


    GET_TREATMENTS_BY_ID = (id: string | undefined, token: string | null) => {
        return {
            url: `${BASE_URL}/treatments/patients/${id}`,
            headers: {
                Authorization: token
            }
        }
    }

    GET_PHASES_BY_TREATMENTS_ID = (id: string | undefined, token: string | null) => {
        return {
            url: `${BASE_URL}/phases/treatments/${id}`,
            headers: {
                Authorization: token
            }
        }
    }

    GET_VACCINES_BY_PHASES_ID = (id: string | undefined, token: string | null) => {
        return {
            url: `${BASE_URL}/vaccines/phases/${id}`,
            headers: {
                Authorization: token
            }
        }
    }

}
