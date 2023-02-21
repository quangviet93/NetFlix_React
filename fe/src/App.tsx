import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Home, ForgotPassword } from './pages'
import MainLayout from './layout/MainLayout'
import './index.scss'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="forgot-password" element={<ForgotPassword />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

