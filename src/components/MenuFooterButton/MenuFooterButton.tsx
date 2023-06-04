import React from "react";
import { ButtonContainer, ButtonImg, ButtonText } from "./MenuFooterButton.styles"

export type FooterButtonType = {
    src?: string;
    value?: string;
    color?: 'blue' | 'grey';
}


export const MenuFooterButton = ({src, value, color}: FooterButtonType) => {
  return (
    <ButtonContainer color={color}>
        <ButtonImg src={src}/>
        <ButtonText>{value}</ButtonText>
    </ButtonContainer>
  )
}
