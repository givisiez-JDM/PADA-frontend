import {
  ButtonContainer,
  ButtonImg,
  ButtonText,
} from "./MenuFooterButton.styles";
import { Link } from "react-router-dom";

export type FooterButtonType = {
  src?: string;
  value?: string;
  color?: "blue" | "grey";
  route?: string;
};

export const MenuFooterButton = ({
  src,
  value,
  color,
  route,
}: FooterButtonType) => {
  return (
    <ButtonContainer color={color}>
      <Link to={`${route}`}>
        <ButtonImg src={src} />
      </Link>
      <ButtonText>{value}</ButtonText>
    </ButtonContainer>
  );
};
