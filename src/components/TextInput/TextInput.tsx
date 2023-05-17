import { FC, InputHTMLAttributes } from 'react';
import { Input } from "./TextInput.styles";
import { FaUserCircle } from 'react-icons/fa';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type: string;
    name: string;
    error: string;
}


const TextInput: FC<TextInputProps> = ({placeholder, type, value, onBlur, onChange, error}) => {
    return (
    <>
        <Input type={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur}  value={value} />
        {error && <p>{error}</p>}
    </>
    )
}

export default TextInput;