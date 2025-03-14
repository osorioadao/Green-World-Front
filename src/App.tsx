import './index.css'
import "@radix-ui/themes/styles.css";
import { Routes, Route } from 'react-router-dom'
import Home from './pages'
import Login from './pages/Login'
import Empresas from './pages/user-enterprises/Enterprises'
import Dashboard from "./pages/Dashboard"
import Feedback from './components/Feedback'
import Relatar from './pages/user-normal/Relatar'
import NotFound from './pages/not-found'
import RegisterEnterprise from './pages/Register/RegisterEnterprise'
import News from './pages/News'
import RegisterPersonal from './pages/Register/RegisterPersonal'

 export default function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="empresas" element={<Empresas />} />
      <Route path="news" element={<News />} />
      <Route path="login" element={<Login />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="relatar" element={<Relatar />} />
      <Route path="enterprise" element={<RegisterEnterprise />} />
      <Route path="personal" element={<RegisterPersonal />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

