const BASE_URL = 'https://app-vacina-production.up.railway.app'

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

    USER_SIGNUP = (body:SignupRequestBody) => {
		return {
			url: `${BASE_URL}/doctors`,
			options: {
				body,
			},
		};
	};
}