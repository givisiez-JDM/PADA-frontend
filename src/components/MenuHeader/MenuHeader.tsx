import { StyledHeadDiv, StyledHeaderTitle } from "./MenuHeader.styles";

export type MenuHeaderProps = {
  children?: React.ReactNode;
};

const MenuHeader = ({ children }: MenuHeaderProps) => {
  return (
    <StyledHeadDiv>
      <StyledHeaderTitle>{children}</StyledHeaderTitle>
    </StyledHeadDiv>
  );
};

export default MenuHeader;
