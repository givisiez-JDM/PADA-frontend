import styled, { css } from 'styled-components';

interface ButtonBaseProps {
  size: 'small' | 'normal' | 'large'
  color: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}

const sizeStyles = {
  small: css`
    padding: 0.12rem 1.12rem;
    font-size: 0.8rem;
  `,
  normal: css`
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 0.8rem 3rem;
    font-size: 1.5rem;
  `,
};

const colorStyles = {
  primary: css`
    background-color: ${props => props.theme.colors.variant2};
    color: ${props => props.theme.colors.white};
  `,
  secondary: css`
    background-color: ${props => props.theme.colors.buttonOff};
    color: ${props => props.theme.colors.white};
  `,
  tertiary: css`
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.variant2};
  `,

  quaternary: css`
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.darkGray};
    border: 1px solid ${props => props.theme.colors.darkGray};
  `,
};

// Definindo os estilos dinâmicos baseados nas propriedades size e color
export const ButtonBase = styled.button<ButtonBaseProps>`
  border: none;
  border-radius: 6.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  ${props => sizeStyles[props.size]}
  ${props => colorStyles[props.color]}

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: ${props => props.theme.colors.buttonOff};
    cursor: not-allowed;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;
