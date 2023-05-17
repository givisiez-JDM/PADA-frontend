import { FC, InputHTMLAttributes } from 'react';
import { PasswordInput } from "./PasswordInput.styles";
import { TbCircleKeyFilled } from 'react-icons/tb'

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type: string;
    name: string;
    error: string;
    
}


const TextInput: React.FC<PasswordInputProps> = ({placeholder, type, value, onBlur, onChange, error}) => {
    return (
    <>
    <PasswordInput type={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur}  value={value}/>
    {error && <p>{error}</p>}
    </>
    )
}

export default TextInput;