import './index.css'
import "@radix-ui/themes/styles.css";
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Empresas from './pages/Enterprises'
import Contactos from './pages/Contacts'
import Dashboard from "./pages/Dashboard"
import Feedback from './pages/Feedback'
import Relatar from './pages/Relatar'
import ErrorPage from './pages/ErrorPage'
import RegisterEnterprise from './pages/Cadastros/RegisterEnterprise'
import News from './pages/News'
import RegisterPersonal from './pages/Cadastros/RegisterPersonal'

 export default function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="empresas" element={<Empresas />} />
      <Route path="contactos" element={<Contactos />} />
      <Route path="news" element={<News />} />
      <Route path="login" element={<Login />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="relatar" element={<Relatar />} />
      <Route path="enterprise" element={<RegisterEnterprise />} />
      <Route path="personal" element={<RegisterPersonal />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  )
}

