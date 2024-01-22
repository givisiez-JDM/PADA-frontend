import React from 'react'
import { ButtonLogin } from './Button.styles';

<<<<<<< HEAD
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
=======
export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  color?: "primary" | "secondary";
  title: string;
  style?: React.CSSProperties;
};

export const Button = ({
  children,
  disabled,
  color,
  title,
  style,
}: ButtonProps) => {
  return (
    <Container title={title} color={color} disabled={disabled} style={style}>
      {children}
    </Container>
  );
};
>>>>>>> 5bfbb64a563db6b85e53492513b41285ca609d53

export default Button
