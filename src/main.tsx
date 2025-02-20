import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Empresas from './pages/Enterprises'
import Contactos from './pages/Contacts'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Dashboard from "./pages/Dashboard";
import Relatar from './pages/Relatar'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/contacts',
    element: <Contactos />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/empresas',
    element: <Empresas />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/relatar',
    element: <Relatar />
  },
  {
    path: '/*',
    element: <ErrorPage />
  },
])

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
