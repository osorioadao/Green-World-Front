import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { SiEnterprisedb } from "react-icons/si";
import { GrBlog } from "react-icons/gr";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Sidebar: React.FC = () => {

  const navigate = useNavigate()

  // Estados para controle
  const [itemAtivo, setItemAtivo] = useState<string>('Dashboard');
  const [expandirMenu, setExpandirMenu] = useState<boolean>(true)

  // Definindo o link activo
  const selectLink = (route: string, item: string) => {
    navigate(route)
    setItemAtivo(item)
  }    

  const toggleMenu = () => {
    setExpandirMenu(!expandirMenu)
  }


  return (
  <div 
  className={`${styles.containerSidebar} ${
    expandirMenu ? styles.expandido : styles.recolhido
  }`}>
 
 <div className={styles.mainIcons}>
 <RxHamburgerMenu onClick={toggleMenu} size={30} className={styles.expandir} />
 <IoMdArrowBack size={30} className={styles.back} onClick={() => navigate(-1)}  />
 </div>


<nav className={styles.links}>

 <ul>
  <li
   onClick={() => selectLink('/', 'Dashboard')}
   className={itemAtivo === 'Dashboard' ? styles.ativo : ''}
   >
    <span className={styles.icon}>
    <MdOutlineSpaceDashboard size={30} />
    </span>
    {expandirMenu && <span className={styles.text_link}>Dashboard</span>}
  </li>

  <li 
  onClick={() => selectLink('/Blog', 'Blog')}
  className={itemAtivo === 'Blog' ? styles.ativo : ''}
  >
    <span className={styles.icon}>
    <GrBlog size={30} />
    </span>
    {expandirMenu && <span className={styles.text_link}>Blog</span>}
  </li>

  <li 
    onClick={() => selectLink('/empresas', 'Empresas')}
    className={itemAtivo === 'empresas' ? styles.ativo : ''}
    >
    <span className={styles.icon}>
    <SiEnterprisedb size={30} />
    </span>
    {expandirMenu && <span className={styles.text_link}>Empresas</span>}
  </li>

  <li className='item'>
    <span className={styles.icon}>
    <IoIosHelpCircleOutline size={30} />
    </span>
    {expandirMenu && <span className={styles.text_link}>Ajuda</span>}
  </li>

 </ul>
 
</nav>
</div>



    
  );
}


export default Sidebar;