import {z} from 'zod'

export const useCheckbox = z.object({
    checkBox: z.array(z.string()).nonempty('Campo obrigatório')
})

export type CheckboxProps = z.infer<typeof useCheckbox>
