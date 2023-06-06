import { MenuDiv } from "./MenuContainer.styles";

export type containerProps = {
  children?: React.ReactNode;
};

const MenuContainer = ({ children }: containerProps) => {
  return <MenuDiv>{children}</MenuDiv>;
};

export default MenuContainer;
