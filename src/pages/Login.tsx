import React from 'react'
import useForm from '../Hooks/useForm'
import TextInput from '../components/TextInput/TextInput'
import { PasswordInput } from '../components/PasswordInput/PasswordInput.styles'
import Button from '../components/Button/Button'

function Login() {

  const name = useForm('nome')

  return (
    <>
    <div className='white-container'>
      <form>
          <TextInput type='text' name='usuario' placeholder='Usuário' {...name}/>          
          <PasswordInput type='password' placeholder='Senha'/>          
          <p><input type='checkbox'/>  Lembre da senha</p>
          <Button title='Entrar' color='primary'>Entrar</Button>
      </form>
      
    </div>
    <p>Esqueceu a senha?</p>
    </>
  )
}

export default Login