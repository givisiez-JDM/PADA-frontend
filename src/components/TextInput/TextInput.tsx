import { Input } from "./TextInput.styles";
import { FaUserCircle } from 'react-icons/fa';

interface TextInputProps {
    placeholder?: string;
    type: string;
}


const TextInput: React.FC<TextInputProps> = ({placeholder, type}) => {
    return (
    <>
        <Input type={type} placeholder={placeholder}/>
        <i><FaUserCircle /></i>
    </>
    )
}

export default TextInput;