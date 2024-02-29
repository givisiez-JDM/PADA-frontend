import { ButtonHTMLAttributes, FC } from 'react'
import { ButtonBase } from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'normal' | 'large'
}

const Button: FC<ButtonProps> = ({ size, ...props }) => {
  const className = size ?? 'normal'
  return (
    <ButtonBase className={className} {...props} />
  )
}

export default Button
