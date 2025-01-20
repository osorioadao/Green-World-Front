import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Empresas from './pages/Empresas/Empresas.jsx'
import Contactos from './pages/Contacts/Contacts.jsx'
import ErrorPage from './components/ErrorPage.jsx'

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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
