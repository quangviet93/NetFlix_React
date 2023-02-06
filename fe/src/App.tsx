import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Home, ForgotPassword } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="forgot-password" element={<ForgotPassword />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

