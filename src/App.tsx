import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import TipoLogin from './pages/TipoLogin'

function App() {

  return (    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="categoria-login" element={<TipoLogin />}/>
          <Route path="cadastro" element={<Cadastro />}/>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
