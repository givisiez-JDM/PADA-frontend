import React, { InputHTMLAttributes, forwardRef } from "react";
import { BoxInput, InputError, InputLogin} from "./Input.styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  style?: React.CSSProperties;
  name: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, style, error = "", ...props }, ref) => {
    return (
      <BoxInput>
        <InputLogin 
          type="text" 
          style={style} 
          ref={ref} 
          name={name} 
          {...props} 
        />

        {error && <InputError>{error}</InputError>}
      </BoxInput>
    );
  }
);

export default Input;
