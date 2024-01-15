import { StyledHeadDiv, StyledHeaderContent } from "./MenuHeader.styles";

export type MenuHeaderProps = {
  children?: React.ReactNode;
};

const MenuHeader = ({ children }: MenuHeaderProps) => {
  return (
    <StyledHeadDiv>
      <StyledHeaderContent>{children}</StyledHeaderContent>
    </StyledHeadDiv>
  );
};

export default MenuHeader;
