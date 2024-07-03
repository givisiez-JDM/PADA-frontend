import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonBase } from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'normal' | 'large'
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}

/**
 * Stylized Button
 * @param {string} color primary | secondary | tertiary | 'quaternary' (default: primary)
 * @param {string} size small | normal | large (default: normal)
 * @example
 * <Button color="secondary">Label</Button>
 * <Button size="large">Label</Button>
 * <Button size="large" color="secondary">Label</Button>
 */
const Button: FC<ButtonProps> = ({
  color = 'primary',
  size = 'normal',
  ...props
}) => {
  // Usando propriedades color e size diretamente no styled-component
  return <ButtonBase color={color} size={size} {...props} />;
};

export default Button;
