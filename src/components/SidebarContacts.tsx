import React from 'react';
import styles from './Styles/SidebarContacts.module.css';
import logo from '../../public/greenworld.svg';
import { SiEnterprisedb } from "react-icons/si";
import { FaBlog, FaHome } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";

function MiniSidebar() {
  return (
    <div className={styles.containerMiniSidebar}>
     <img src={logo} alt="logo" />
     <SiEnterprisedb />
     <FaBlog />
     <FaHome />
     <IoIosHelpCircleOutline />
    </div>
  )
}

export default MiniSidebar