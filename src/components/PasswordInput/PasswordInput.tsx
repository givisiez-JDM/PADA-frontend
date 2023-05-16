import { PasswordInput } from "./PasswordInput.styles";
import { TbCircleKeyFilled } from 'react-icons/tb'

interface PasswordInputProps {
    placeholder?: string;
    type: string;
    name: string;
    
}


const TextInput: React.FC<PasswordInputProps> = ({placeholder, type}) => {
    return (
    <>
    <PasswordInput type={type} placeholder={placeholder}/>
    </>
    )
}

export default TextInput;