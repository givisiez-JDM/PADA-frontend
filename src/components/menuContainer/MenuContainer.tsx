import { ContentDiv } from "./MenuContainer.styles";

export type containerProps = {
  children?: React.ReactNode;
};

const MenuContainer = ({ children }: containerProps) => {
  return <ContentDiv>{children}</ContentDiv>;
};

export default MenuContainer;
