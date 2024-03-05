import React, { InputHTMLAttributes, forwardRef } from "react";
import { InputError, InputLogin, Teste } from "./Input.styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  style?: React.CSSProperties;
  name: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, style, error = "", ...props }, ref) => {
    return (
      <Teste>
        <InputLogin 
          type="text" 
          style={style} 
          ref={ref} 
          name={name} 
          {...props} 
        />

        {error && <InputError>{error}</InputError>}
      </Teste>
    );
  }
);

export default Input;
