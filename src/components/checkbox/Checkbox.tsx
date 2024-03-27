import { HTMLProps } from "react";
import { ContainerCheckbox } from "./Checkbox.styles";

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
}

/**
 * Stylized Checkbox 
 * @param {string} label Value to show in label
 * @example
 * <Checkbox name="frequency" type="radio" value={"7 dias"} label={"A cada 7 dias"} />
 */
const Checkbox = ({ id, label, ...props }: Props) => {
  return (
    <ContainerCheckbox >
      <input
        id={id}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </ContainerCheckbox>
  );
}

export default Checkbox;
