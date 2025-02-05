import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../assets/logosemfundo.png';

const Footer: React.FC = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.image}>
        <img className={styles.image} src={logo} alt="Logo" />
      </div>
      
      <div className={styles.container_list}>
        <Link className={styles.link} to="/">Início</Link>
        <Link className={styles.link} to="/blog">Blog</Link>
        <Link className={styles.link} to="/enterprises">Empresas</Link>
        <Link className={styles.link} to="/contacts">Contactos</Link>
      </div>

      <div className={styles.links_uteis}>
        <a 
          className={styles.link} 
          href="https://www.elisal.ao/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Sites Greens
        </a>
        <Link className={styles.link} to="/contacts">Contacte-nos</Link>
        <a className={styles.link} href="#">Suporte Técnico</a>
      </div>
    </div>
  );
};

export default Footer;
