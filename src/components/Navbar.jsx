import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Início</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/enterprises">Empresas</Link>
      <Link to="/contacts">Contactos</Link>
    </nav>
  )
}

export default Navbar