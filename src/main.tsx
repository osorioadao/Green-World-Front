import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Empresas from './pages/Empresas/Enterprises'
import Contactos from './pages/Contacts/Contacts.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'

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

createRoot(document.getElementById('root') as HTMLElement ).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
