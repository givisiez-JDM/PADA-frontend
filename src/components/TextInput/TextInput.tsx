import { FC, InputHTMLAttributes } from 'react';
import { Input } from "./TextInput.styles";
import { FaUserCircle } from 'react-icons/fa';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type: string;
    name: string;
}


const TextInput: FC<TextInputProps> = ({placeholder, type, ...rest}) => {
    return (
    <>
        <Input type={type} placeholder={placeholder} {...rest}/>
    </>
    )
}

export default TextInput;