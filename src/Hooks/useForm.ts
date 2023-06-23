import React from "react";

type Types = {
  regex: RegExp;
  message: string;
};

const types: Record<string, Types> = {
  email: {
    regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: "E-mail inválido",
  },

  name: {
    regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    message: "Nome inválido",
  },

  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    message:
      "Senha inválida. (Sua senha deve ter pelo menos 8 caracteres, deve conter no mínimo um número, uma letra maiúscula, e um caractere especial, ex: ! @ # $ % & *)",
  },

  confirmPassword: {
    regex: /^\s*$/,
    message: "Este campo deve ser preenchido",
  },
};

const useForm = (type: string) => {
  const [value, setValue] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const validate = (value: string) => {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (error) validate(event.currentTarget.value);
    setValue(event.currentTarget.value);
  };

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
  };
};

export default useForm;
