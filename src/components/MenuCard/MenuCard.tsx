import {
  MenuItemContainer,
  MenuItemImg,
  MenuItemTitle,
  MenuItemText,
} from "./MenuCard.styles";

interface MenuCardProps {
  title: string;
  text: string;
  imgSrc: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ imgSrc, title, text }) => {
  return (
    <MenuItemContainer>
      <MenuItemImg src={imgSrc} />
      <MenuItemTitle>{title}</MenuItemTitle>
      <MenuItemText>{text}</MenuItemText>
    </MenuItemContainer>
  );
};

export default MenuCard;
