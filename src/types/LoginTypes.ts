import { z } from "zod";
import { formLoginValidate } from "../hooks/useForm";

export type FormPropsLogin = z.infer<typeof formLoginValidate>;

export type loginType = {
  email: string;
  password: string;
};
