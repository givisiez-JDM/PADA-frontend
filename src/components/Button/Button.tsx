import React from 'react'
import { ButtonLogin } from './Button.styles';

type ButtonProps = React.ComponentProps<'button'> & {
    children?: React.ReactNode,
    style?: React.CSSProperties;
}
 
const Button = ({ children }: ButtonProps) => {
  return (
    <ButtonLogin 
    >
        {children}
        
    </ButtonLogin>
  )
}

export default Button