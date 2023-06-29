import React from "react";
import { Container } from "./Button.styles";

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

export default Button;
