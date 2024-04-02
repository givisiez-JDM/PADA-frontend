import { HTMLProps } from "react";
import { ContainerCheckbox } from "./Checkbox.styles";

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
}

/**
 * Stylized Checkbox 
 * @param {string} label Value to show in label
 * @param {string} name Required to radio checkbox
 * @param {string} type Defaut checkbox
 * @param {string} value Value of checkbox
 * @example
 * <Checkbox name="frequency" type="radio" value={"7 dias"} label={"A cada 7 dias"} />
 */
const Checkbox = ({ id, value, label, type, ...props }: Props) => {
  const inputId = id ?? String(value)
  const inputType = type ?? "checkbox"

  return (
    <ContainerCheckbox >
      <input
        className="checkbox"
        id={inputId}
        value={value}
        type={inputType}
        {...props}
      />
      <label htmlFor={inputId}>{label}</label>
    </ContainerCheckbox>
  );
}

export default Checkbox;
