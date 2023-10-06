import {z} from 'zod'
import { formValidateSignup } from "../Hooks/useForm"

export type FormPropsSignup = z.infer<typeof formValidateSignup>

export type SignupType = {
    name: string,
    email: string,
    password: string, 
    confirmPassword: string
 } 