import { useState } from "react";
import {
  DropdownContainer,
  DropdownButton,
  DropdownMenuBody,
  DropdownMenuItem,
} from "./DropdownMenu.styles";

interface DropDownMenuProps {
  items: string[];
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ items }) => {
  const [isVisible, setVisible] = useState(false);
  const toggleMenu = (): void => {
    setVisible(!isVisible);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleMenu}>MENU</DropdownButton>
      {isVisible && (
        <DropdownMenuBody>
          {items.map((item) => (
            <DropdownMenuItem>{item}</DropdownMenuItem>
          ))}
        </DropdownMenuBody>
      )}
    </DropdownContainer>
  );
};

export default DropdownMenu;
