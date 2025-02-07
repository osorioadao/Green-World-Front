import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

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
    <nav className={styles.containerNavbar}>
      <Link className={styles.link} to="/">Início</Link>
      <Link className={styles.link}  to="/blog">Blog</Link>
      <Link className={styles.link}  to="/enterprises">Empresas</Link>
      <select name="options" id="options">
        <option value="Parcerias">Parcerias</option>
        <option value="Muito mais">Muito mais</option>
      </select>
      <Link className={styles.link}  to="/contacts">Contactos</Link>
    </nav>
  );
};

export default Navbar;