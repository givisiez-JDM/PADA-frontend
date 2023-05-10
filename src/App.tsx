import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TextInput from './components/TextInput/TextInput'
import { PasswordInput } from './components/PasswordInput/PasswordInput.styles'
import Home from './pages/Home'

function App() {

  return (    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
