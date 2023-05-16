import React from 'react'

const useForm = () => {
    const [value, setValue] = React.useState<string>('');
    const [error, setError] = React.useState<string>('');

    const validate = (value: string) => {
        if(value.length === 0) {
            setError('Preencha um valor');
            return false;
        } else if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
            setError('Preencha um E-mail válido');
            return false;
        }
    
    }


}



export default useForm