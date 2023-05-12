import React from 'react'
import { StyledButton } from './Button.styles'

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title}) => {
  return (
    <StyledButton>{title}</StyledButton>
  )
}

export default Button