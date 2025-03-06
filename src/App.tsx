import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Empresas from './pages/Enterprises'
import Contactos from './pages/Contacts'
import Blog from './pages/Blog'
import Dashboard from "./pages/Dashboard";
import Relatar from './pages/Relatar'
import ErrorPage from './pages/ErrorPage'
import TypeRegister from './pages/Cadastros/TypeRegister'

 export default function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="empresas" element={<Empresas />} />
      <Route path="contactos" element={<Contactos />} />
      <Route path="blog" element={<Blog />} />
      <Route path="login" element={<Login />} />
      <Route path="relatar" element={<Relatar />} />
      <Route path="typeregister" element={<TypeRegister />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  )
}

