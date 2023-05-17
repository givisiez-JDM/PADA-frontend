import React from 'react'
import useForm from '../Hooks/useForm'
import TextInput from '../components/TextInput/TextInput'
import { PasswordInput } from '../components/PasswordInput/PasswordInput.styles'
import Button from '../components/Button/Button'

function Home() {

  const name = useForm('nome')

  return (
    <div className='form-container'>
      <h1>Projeto Alergia</h1>
      <form>
          <TextInput type='text' name='usuario' placeholder='Usuário' {...name}/>          
          <PasswordInput type='password' placeholder='Senha'/>          
          <Button title="Entrar"/>
          <p><input type='checkbox'/>  Lembre da senha</p>
      </form>
    </div>
  )
}

export default Home