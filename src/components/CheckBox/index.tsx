
import * as Checkbox from '@radix-ui/react-checkbox';
import { Cross1Icon } from '@radix-ui/react-icons';
import { ContainerCheckbor } from './styles';



export function CheckBox({label = ''}) {

return(
<>
    <form>
    <ContainerCheckbor>
      <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
        <Checkbox.Indicator className="CheckboxIndicator">
          <Cross1Icon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="Label" htmlFor="c1">
        {label}
      </label>
    </ContainerCheckbor>
  </form>
    
</>
)
}