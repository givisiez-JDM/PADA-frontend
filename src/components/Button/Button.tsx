import React from "react";
import { Container } from "./Button.styles";

export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  color?: "primary" | "secondary";
  title: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler;
};

export const Button = ({
  children,
  disabled,
  color,
  title,
  style,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <Container
      title={title}
      color={color}
      disabled={disabled}
      style={style}
      type={type}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Button;
