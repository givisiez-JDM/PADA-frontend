import React, { InputHTMLAttributes, forwardRef } from "react";
import { InputError, InputLogin } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  style?: React.CSSProperties;
  name: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, style, error = "", ...props }, ref) => {
    return (
      <div>
        <InputLogin 
          type="text" 
          style={style} 
          ref={ref} 
          name={name} 
          {...props} 
        />

        {error && <InputError>{error}</InputError>}
      </div>
    );
  }
);

export default Input;
