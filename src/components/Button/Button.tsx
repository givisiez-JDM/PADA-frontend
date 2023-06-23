import React from "react";
import { Container } from "./Button.styles";

export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  color?: "primary" | "secondary";
  title: string;
};

export const Button = ({ children, disabled, color, title }: ButtonProps) => {
  return (
    <Container title={title} color={color} disabled={disabled}>
      {children}
    </Container>
  );
};

export default Button;
