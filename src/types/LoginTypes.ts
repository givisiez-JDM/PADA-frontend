import {z} from 'zod'
import { formLogiValidate } from '../hooks/useForm'

 export type FormPropsLogin = z.infer<typeof formLogiValidate>

 export type loginType = {
    email: string,
    password: string
 }

