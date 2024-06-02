import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/main/Main'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import Navbar from './components/navbar/Navbar'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
