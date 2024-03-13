import { Checkbox, Label, Switch } from "./Switch.styles";

interface Props {
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  activeLabel?: string;
  inactiveLabel?: string;
}


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