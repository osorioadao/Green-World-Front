import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css'
import logo from '../../assets/logosemfundo.png'
import { IoArrowBack } from "react-icons/io5";
import { SiEnterprisedb } from "react-icons/si";
import { FaBlog } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";

function MiniSidebar() {

  const navigate = useNavigate()

  function Inicio () {
    navigate("/")
  }
  

  return (
    <div className={styles.containerDashboard}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <IoArrowBack size={30} onClick={() => navigate((-1))}  />
      </div>

      <div className={styles.icons}>
        <FaHome size={30} onClick={Inicio} />
        <SiEnterprisedb size={30} />
        <FaBlog size={30} />
        <IoIosHelpCircleOutline size={30} />
      </div>
    </div>
  )
}

export default MiniSidebar