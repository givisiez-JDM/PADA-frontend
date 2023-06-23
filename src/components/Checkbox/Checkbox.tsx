import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
} from "./Checkbox.styles";

import { useState } from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      <StyledCheckbox checked={isChecked} />
    </CheckboxContainer>
  );
};

export default Checkbox;
