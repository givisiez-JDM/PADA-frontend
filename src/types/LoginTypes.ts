import {z} from 'zod'
import { formLogiValidate } from '../Hooks/useForm'

 export type FormPropsLogin = z.infer<typeof formLogiValidate>

 export type loginType = {
    email: string,
    password: string
 }

