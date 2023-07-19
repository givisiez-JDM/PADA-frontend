import { StyledMenu, StyledList, StyledListItem } from "./SidebarMenu.styles";

interface MenuItems {
  name: string;
}

interface SidebarMenuProps {
  items: MenuItems[];
  menuTitle?: string;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  menuTitle,
}) => {
  return (
    <StyledMenu>
      <h2>{menuTitle}</h2>
      <StyledList>
        {items.map((item) => (
          <StyledListItem>{item.name}</StyledListItem>
        ))}
      </StyledList>
    </StyledMenu>
  );
};
