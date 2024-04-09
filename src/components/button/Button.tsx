import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonBase } from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'normal' | 'large';
  color?: 'primary' | 'secondary';
}

/**
 * Stylized Button 
 * @param {string} color primary | secondary (default: primary) 
 * @param {string} size small | normal | large (default: normal)
 * @example
 * <Button color="secondary">Label</Button>
 * <Button size="large">Label</Button>
 * <Button size="large" color="secondary">Label</Button>
 */
const Button: FC<ButtonProps> = ({ color, size, ...props }) => {
  const btnSize = size ?? 'normal';
  const btnColor = color ?? 'primary';
  const className = `${btnSize} ${btnColor}`;
  return (
    <ButtonBase className={className} {...props} />
  );
};

export default Button;

