import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logosemfundo.png';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

const Header: React.FC = () => {
  
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Definir o estado do tema (pode ser 'light' ou 'dark')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para o menu móvel
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme); // Adicionando a classe ao body
    } else {
      document.body.classList.add('light'); // Definindo o tema padrão como claro
    }
  }, []);

  // Função para alternar entre os temas
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.remove('light', 'dark'); // Removendo as classes existentes
    document.body.classList.add(newTheme); // Adicionando o novo tema
    localStorage.setItem('theme', newTheme); // Salvando o tema no localStorage
  };

  const navigateToLogin = () => {
    navigate('/Login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Alternar o estado do menu móvel
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

        <button className={styles.icons} onClick={toggleTheme}>
          {theme === 'light' ? (
            <FaRegMoon className={styles.icon} size={25} />
          ) : (
            <FaRegSun className={styles.icon} size={25} />
          )}
        </button>
        </nav>

        
      </div>
    </header>
  );
};

export default Header;
