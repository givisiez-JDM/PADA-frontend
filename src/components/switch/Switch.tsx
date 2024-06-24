import { Checkbox, Label, Switch } from './Switch.styles';

interface Props {
  status: boolean
  setStatus: React.Dispatch<React.SetStateAction<boolean>>
  activeLabel?: string
  inactiveLabel?: string
  theme?: 'normal' | 'dark'
}
/**
 * Stylized Switch
 * @param {boolean} status react state boolean
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setStatus react dispatch to status
 * @param {string} activeLabel label to checked state
 * @param {string} inactiveLabel label to unchecked state
 * @param {string} theme highlight on background
 * @example
 * <Switch activeLabel="Ativo" inactiveLabel="Inativo" status={status} setStatus={setStatus} />
 */
const ToggleSwitch = ({
  status,
  setStatus,
  activeLabel,
  inactiveLabel,
  theme = 'normal',
}: Props) => {
  return (
    <Label>
      <span>{status ? activeLabel : inactiveLabel}</span>
      <Checkbox
        type="checkbox"
        checked={status}
        onChange={event => setStatus(event.target.checked)}
      />
      <Switch className={theme} />
    </Label>
  );
};

export default ToggleSwitch;
