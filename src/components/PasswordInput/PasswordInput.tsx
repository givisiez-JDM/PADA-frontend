import { FC, InputHTMLAttributes } from "react";
import { PasswordInput } from "./PasswordInput.styles";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type: string;
  name: string;
  error: string;
}


const TextInput: FC<PasswordInputProps> = ({placeholder, type, value, onBlur, onChange, error}) => {
    return (
    <>
      <PasswordInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <p className="inputError">{error}</p>}
    </>
  );
};

export default TextInput;
