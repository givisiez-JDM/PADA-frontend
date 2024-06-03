import React, { InputHTMLAttributes, forwardRef } from 'react';
import {
  BoxInput,
  InputError,
  InputRegister,
} from './InputRegisterPatient.styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  style?: React.CSSProperties
  name: string
};

const InputRegisterPatient = forwardRef<HTMLInputElement, InputProps>(
  ({ name, style, error = '', ...props }, ref) => {
    return (
      <BoxInput>
        <InputRegister
          type="text"
          style={style}
          ref={ref}
          name={name}
          {...props}
        />

        {error && <InputError>{error}</InputError>}
      </BoxInput>
    );
  },
);

InputRegisterPatient.displayName = 'Input';

export default InputRegisterPatient;
