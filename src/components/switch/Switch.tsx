import { Checkbox, Label, Switch } from './Switch.styles';

interface Props {
  status: boolean
  setStatus: React.Dispatch<React.SetStateAction<boolean>>
  activeLabel?: string
  inactiveLabel?: string
}
/**
 * Stylized Switch
 * @param {boolean} status react state boolean
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setStatus react dispatch to status
 * @param {string} activeLabel label to checked state
 * @param {string} inactiveLabel label to unchecked state
 * @example
 * <Switch activeLabel="Ativo" inactiveLabel="Inativo" status={status} setStatus={setStatus} />
 */
const ToggleSwitch = ({ status, setStatus, activeLabel, inactiveLabel }: Props) => {
  return (
    <Label>
      <span>{status ? activeLabel : inactiveLabel}</span>
      <Checkbox
        type="checkbox"
        checked={status}
        onChange={event => setStatus(event.target.checked)}
      />
      <Switch />
    </Label>
  );
};

export default ToggleSwitch;
