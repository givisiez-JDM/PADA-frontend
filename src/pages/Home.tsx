import React from 'react'
import TextInput from '../components/TextInput/TextInput'
import { PasswordInput } from '../components/PasswordInput/PasswordInput.styles'

function Home() {
  return (
    <div>
        <TextInput type='text' placeholder='Usuário'/>
        <PasswordInput type='password' placeholder='Senha'/>
    </div>
  )
}

export default Home