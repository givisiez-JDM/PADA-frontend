import { PasswordInput } from "./PasswordInput.styles";

interface PasswordInputProps {
    placeholder?: string;
    type: string;
    
}


const TextInput: React.FC<PasswordInputProps> = ({placeholder, type}) => {
    return <PasswordInput type={type} placeholder={placeholder}/>
}

export default TextInput;