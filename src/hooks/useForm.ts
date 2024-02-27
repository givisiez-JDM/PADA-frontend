
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useData } from "../global/UserContext";
import { FormPropsLogin, loginType } from "../types/LoginTypes";
import { FormPropsSignup, SignupType } from "../types/SignupTypes";


  export const formLogiValidate = z.object({
    email: z.string().nonempty("Preencha um valor").email("Email inválido"),

    password: z
      .string()
      .nonempty("Preencha um valor")
      .min(8, "Sua senha deve ter 8 caracteres")
      // eslint-disable-next-line no-useless-escape
      .regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/i, {
        message:
          "Deve conter um número, uma letra maiúscula, e um caractere especial, ex: ! @ # $ % & *)",
      }),
  });

  export const useLogin = () => {
    const {
      register,
      handleSubmit,
      getValues,
      getFieldState,
      formState: { errors },
    } = useForm<FormPropsLogin>({ mode: "onBlur", resolver: zodResolver(formLogiValidate) });

    const { userLogin } = useData();

    const onSubmit = handleSubmit(async (data: loginType) => {
      const { email, password } = data;
      userLogin(email, password);
    });

    return {
      handleSubmit,
      register,
      useData,
      errors,
      onSubmit,
      useLogin,
      getValues,
      getFieldState,
    };
  };

  export const formValidateSignup = z
    .object({
      name: z.string().nonempty("Preencha um valor").min(5, "Informe um nome válido"),

      email: z.string().nonempty("Preencha um valor").email("Email inválido"),

      password: z
        .string()
        .nonempty("Preencha um valor")
        .min(8, "Sua senha deve ter 8 caracteres")
        // eslint-disable-next-line no-useless-escape
        .regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/i, {
          message:
            "Deve conter um número, uma letra maiúscula, e um caractere especial, ex: ! @ # $ % & *)",
        }),

      confirmPassword: z.string(),
    })
    .refine((fields) => fields.password === fields.confirmPassword, {
      path: ["confirmPassword"],
      message: "As senha precisam ser iguais",
    });

  export const useSignup = () => {
    const {
      register,
      handleSubmit,
      getValues,
      formState: { errors },
    } = useForm<FormPropsSignup>({ mode: "onBlur", resolver: zodResolver(formValidateSignup) });

    const { userSignup } = useData();

    const onSubmit = handleSubmit(async (data: SignupType) => {
      const { name, email, password, confirmPassword } = data;
      userSignup(name, email, password, confirmPassword);
    });

    return {
      handleSubmit,
      register,
      useData,
      errors,
      onSubmit,
      useSignup,
      getValues,
    };
  };
