import React from 'react'
import styles from './Header.module.css'
import logo from '../assets/logosemfundo.png'
import flag from '../assets/flag.png'
import { FaRegMoon } from 'react-icons/fa'


function Header() {
  return (
    <div className={styles.container}>
      
     <div><img className={styles.logo} src={logo} alt="logo" /></div>
   
    <div className={styles.container_child}>
    <img className={styles.img_flag} src={flag} alt="flagUK" />
    <button>Relatar Amontoados</button> 
    <FaRegMoon className={styles.icon} size={25}></FaRegMoon>
    </div>

  </div>
  )
}


export default Header