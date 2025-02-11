import React from 'react'
import styles from '../TypeRegister/TypeRegister.module.css'
import MiniSidebar from '../../../components/MiniSidebar'
import logo from '../../../assets/logosemfundo.png'

const TypeRegister: React.FC = () => {
  return (
    <div className={styles.containerType}>
      <h1>Quem é você ?</h1>

      <p>Pessoa Singular</p> <input type='checkbox' name="singular" id="singular" />
      <p>Pessoa Singular</p> <input type='checkbox' name="singular" id="singular" />
      <p>Pessoa Singular</p> <input type='checkbox' name="singular" id="singular" />

      <MiniSidebar></MiniSidebar>
    </div>
  )
}

export default TypeRegister
