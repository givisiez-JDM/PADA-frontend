import { HeadDiv, HeaderContent } from "./MenuHeader.styles";

export type MenuHeaderProps = {
  children?: React.ReactNode;
};

const MenuHeader = ({ children }: MenuHeaderProps) => {
  return (
    <HeadDiv>
      <HeaderContent>{children}</HeaderContent>
    </HeadDiv>
  );
};

export default MenuHeader;
