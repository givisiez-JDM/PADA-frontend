/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from 'react'

const useValidatePassword = () => {
    
    const [errorMessage, setErrorMessage] = useState<any | null>(null);

    
    const validatePassword = (pass1: string, pass2: string): void => {
        if (pass1 !== pass2) {
        setErrorMessage('Senha incorreta')
        }
    }
        
  return {
    validatePassword,
    errorMessage
  }
}

export default useValidatePassword