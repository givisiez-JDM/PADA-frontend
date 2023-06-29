import { StyledMenu, StyledList, StyledListItem } from "./SidebarMenu.styles";

interface MenuItems {
  name: string;
}

interface SidebarMenuProps {
  items: MenuItems[];
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ items }) => {
  return (
    <StyledMenu>
      <h2>Pacientes</h2>
      <StyledList>
        {items.map((item) => (
          <StyledListItem>{item.name}</StyledListItem>
        ))}
      </StyledList>
    </StyledMenu>
  );
};
