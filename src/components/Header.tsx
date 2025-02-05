import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logosemfundo.png';
import flag from '../assets/flag.png';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

const Header: React.FC = () => {
  // Definir o estado do tema (pode ser 'light' ou 'dark')
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
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

  return (
    <div className={styles.containerHeader}>
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>

      <div className={styles.container_child}>
        <img className={styles.img_flag} src={flag} alt="flagUK" />
        <button className={styles.button} onClick={navigateToLogin}>Relatar Amontoados</button>
      
        <button className={styles.icons} onClick={toggleTheme}>
          {theme === 'light' ? (
            <FaRegMoon className={styles.icon} size={25} />
          ) : (
            <FaRegSun className={styles.icon} size={25} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;

