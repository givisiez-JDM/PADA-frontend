import React from 'react'
import TextInput from '../components/TextInput/TextInput'
import PasswordInput from '../components/PasswordInput/PasswordInput'
import Button from '../components/Button/Button'

function Cadastro() {
  return (
    <div className='form-container'>
      <form>
          <TextInput type='text' placeholder='Nome'/>          
          <TextInput type='text' placeholder='E-mail'/>          
          <PasswordInput type='password' placeholder='Senha'/>          
          <PasswordInput type='password' placeholder='Confirmar senha'/>          
          <Button title="Entrar"/>
          <p>Lembre da senha</p>
      </form>
    </div>
  )
}

export default Cadastro