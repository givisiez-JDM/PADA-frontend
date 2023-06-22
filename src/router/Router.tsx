import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'
import TipoLogin from '../pages/TipoLogin'
import TipoCadastro from '../pages/TipoCadastro'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="tipo-login" element={<TipoLogin />}/>
          <Route path="tipo-cadastro" element={<TipoCadastro />}/>
          <Route path="cadastro" element={<Cadastro />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default Router