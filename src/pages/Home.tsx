import React from 'react'
import TextInput from '../components/TextInput/TextInput'
import { PasswordInput } from '../components/PasswordInput/PasswordInput.styles'
import Button from '../components/Button/Button'

function Home() {
  return (
    <div className='form-container'>
      <form>
          <TextInput type='text' placeholder='Usuário'/>          
          <PasswordInput type='password' placeholder='Senha'/>          
          <Button title="Entrar"/>
          <p>Lembre da senha</p>
      </form>
    </div>
  )
}

export default Home