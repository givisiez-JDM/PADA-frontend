import { ButtonContainer, ButtonImg, ButtonText } from "./MenuFooterButton.styles"

export type FooterButtonType = {
    src: string;
    value: string;
}


export const MenuFooterButton = ({src, value}: FooterButtonType) => {
  return (
    <ButtonContainer>
        <ButtonImg src={src}/>
        <ButtonText>{value}</ButtonText>
    </ButtonContainer>
  )
}
