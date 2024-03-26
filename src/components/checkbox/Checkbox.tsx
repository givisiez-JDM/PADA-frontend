import { ContainerCheckbox } from "./Checkbox.styles";

interface Props {
  value: string;
  name?: string;
  type: string;
}


/**
 * Stylized Checkbox 
 * @param {string} name To radio usage
 * @param {string} value Input value
 * @param {string} type Type of input [ radio, checkbox ]
 * @example
 * <Checkbox name="dosage" type="radio" value={"dosage"} />
 */
const Checkbox = ({ name, type, value }: Props) => {
  return (
    <ContainerCheckbox >
      <input
        id={value}
        name={name}
        className="checkbox"
        type={type}
        value={value}
      />
      <label htmlFor={value}>{value}</label>
    </ContainerCheckbox>
  );
}

export default Checkbox;
