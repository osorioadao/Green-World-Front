import React, { useState,useEffect } from "react";
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

const [theme, setTheme] = useState<'light' | 'dark'>('light');

useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add('light'); 
    }
  }, []);

  // Função para alternar entre os temas
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.remove('light', 'dark'); 
    document.body.classList.add(newTheme); 
    localStorage.setItem('theme', newTheme); 
  };

//   <button className={styles.icons} onClick={toggleTheme}>
//           {theme === 'light' ? (
//             <FaRegMoon className={styles.icon} size={25} />
//           ) : (
//             <FaRegSun className={styles.icon} size={25} />
//           )}
//         </button>