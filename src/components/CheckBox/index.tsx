
import { ChangeEventHandler } from 'react';
import {  ContainerCheckbox } from './styles';


interface componenProps{
  label: string,
  checkedinput:boolean,
  handleChange:ChangeEventHandler<HTMLInputElement> 
}


export function CheckBox({label, handleChange,checkedinput}: componenProps) {

return(
<ContainerCheckbox>
  <div className="custom-checkbox" >
     <input id="checkbox1" className="checkbox"
      type="checkbox" 
      onChange={handleChange}
      checked={checkedinput}
      />
  <label htmlFor="checkbox1">{label}</label>
 </div>
</ ContainerCheckbox>
)
}

