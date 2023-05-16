import React from 'react'
import TextInput from '../components/TextInput/TextInput'
import PasswordInput from '../components/PasswordInput/PasswordInput'
import Button from '../components/Button/Button'

function Cadastro() {

 function handleBlur(event:React.FormEvent<HTMLInputElement>) {
  
  
  
  console.log(event.currentTarget.value)
  }

  return (
    <div className='form-container'>
      <form>
          <TextInput type='text' name='nome' placeholder='Nome' onBlur={handleBlur}/>          
          <TextInput type='text' name='email' placeholder='E-mail' onBlur={handleBlur}/>          
          <PasswordInput type='password' name='password' placeholder='Senha' />          
          <PasswordInput type='password' name='confirmPassword' placeholder='Confirmar senha'/>          
          <Button title="Entrar"/>
          <p>Lembre da senha</p>
      </form>
    </div>
  )
}

export default Cadastro