import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
  // const items = [
  //   {
  //     value:"Início",
  //     link:"/"
  //   },
  //   {
  //     value:"Blog",
  //     link:"/blog"
  //   },
  //   {
  //     value:"Empresa",
  //     link:"/enterprises"
  //   },
  // ]
  
  return (
    <nav className={styles.container}>
      <Link to="/">Início</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/enterprises">Empresas</Link>
      <select name="options" id="options">
        <option value="Parcerias">Parcerias</option>
        <option value="Muito mais">Muito mais</option>
      </select>
      <Link to="/contacts">Contactos</Link>
    </nav>
  )
}

export default Navbar