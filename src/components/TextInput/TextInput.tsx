import { Input } from "./TextInput.styles";

interface TextInputProps {
    placeholder?: string;
    type: string;
}


const TextInput: React.FC<TextInputProps> = ({placeholder, type}) => {
    return <Input type={type} placeholder={placeholder}/>
}

export default TextInput;