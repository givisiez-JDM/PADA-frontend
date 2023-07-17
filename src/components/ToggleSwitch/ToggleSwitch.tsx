import { useState } from "react";
import { StyledLabel } from "./ToggleSwitch.styles";

export default function ToggleSwitch() {
  const [switchState, setSwitchState] = useState(true);
  function handleOnChange() {
    setSwitchState(!switchState);
  }
  return (
    <StyledLabel htmlFor="checkbox" checked={switchState}>
      <input
        id="checkbox"
        type="checkbox"
        checked={switchState}
        onChange={handleOnChange}
      />
    </StyledLabel>
  );
}
