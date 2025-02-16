import React from 'react'
import styles from '../TypeRegister/TypeRegister.module.css'
import MiniSidebar from '../../../components/SidebarContacts'
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logosemfundo.png'

const TypeRegister: React.FC = () => {
  const navigate = useNavigate()

  function goBack() {
    navigate('/')
  }

  return (
    <div className={styles.containerType}>
   
      <div className={styles.back}>
        <IoArrowBack size={30} onClick={() => navigate((-1))}  />
      </div>

      <h1>Quem é você ?</h1>

      <p>Pessoa Singular</p> <input type='checkbox' name="singular" id="singular" />
      <p>Pessoa Singular</p> <input type='checkbox' name="singular" id="singular" />
      <p>Pessoa Singular</p> <input type='checkbox' name="singular" id="singular" />

      <MiniSidebar></MiniSidebar>
    </div>
  )
}

export default TypeRegister
