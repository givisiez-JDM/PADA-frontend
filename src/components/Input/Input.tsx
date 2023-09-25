import React from "react";
import { InputError, InputLogin } from '../Input/styles'

type InputProps = React.ComponentProps<'input'> & {
  error?: string;
  style?: React.CSSProperties;
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}

const Input = ({ error, style, onBlur, ...props}: InputProps) => {
  return (
    <div>
        <InputLogin
            type='text'
            onBlur={onBlur}
            style={style}
            {...props}
        />

        {error && <InputError>{error}</InputError>}
    </div>

  );
};

export default Input;
