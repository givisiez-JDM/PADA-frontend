import React from 'react'
import Button from '../components/Button/Button'
import { NavLink } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';

function Home() {
  

  return (
    <div className='blue-container'>
      <NavLink to="/categoria-login"><Button title='Login' color='primary'><FaBeer /> Login</Button></NavLink>
      <Button title='Cadastre-se' color='secondary'>Cadastre-se</Button>
      <p>Esqueceu sua senha?</p>
    </div>
  )
}

export default Home