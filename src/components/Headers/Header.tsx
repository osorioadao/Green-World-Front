import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Styles/Header.module.css';
import logo from '/greenworld.svg';

const Header = () => {
  
   
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const navigate = useNavigate();


  const navigateToLogin = () => {
    navigate('/Login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  };

  return (
    <header className={styles.containerHeader}>
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>

      <div className={styles.container_child}>
        {/* Menu Hamburguer */}
        <button className={styles.hamburgerIcon} onClick={toggleMobileMenu}>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
        </button>

        <nav className={`${styles.containerNavbar} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <Link className={styles.link} to="/">Início</Link>
          <Link className={styles.link} to="/blog">Blog</Link>
          <Link className={styles.link} to="/enterprises">Empresas</Link>
          <Link className={styles.link} to="/contacts">Contactos</Link>
          <button className={styles.button} onClick={navigateToLogin}>Relatar Amontoados</button>
        </nav>
      </div>

    </header>
  );
};

export default Header;
