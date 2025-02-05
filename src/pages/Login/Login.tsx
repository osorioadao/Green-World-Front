import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import logo from '../../assets/logosemfundo.png'

// Tipando o componente como um componente funcional
const Login: React.FC = () => {

  const navigate = useNavigate()

  const navigateToTypeRegister = () => {
    navigate('/TypeRegister')
  }

  const navigateToDashboard = () => {
    navigate('/Dashboard')
  }

  return (
    <div className={styles.containerLogin}>

      <form className={styles.containerForm}>

        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.text}>
          <h3>Green World Login</h3>
        </div>

        <hr />

        <div className={styles.inputs}>
          <label htmlFor="email">Seu e-mail</label>
          <input 
            type="email"
            autoComplete='on'
            required
            id="email"
          />
          <label htmlFor="senha">Sua senha</label>
          <input 
            type="password" 
            required 
            id="senha"
          />
        </div>

        <div className={styles.btn}>
          <button 
            className={styles.buttonEntrar} 
            type="button" 
            onClick={navigateToDashboard}>
            Entrar
          </button>
        </div>

      </form>

      <div className={styles.mini_footer}>
        <p>Ainda não tem uma conta?</p>
        <div className={styles.btn0}>
          <button 
            className={styles.buttonCadastrar} 
            type="button" 
            onClick={navigateToTypeRegister}>
            Cadastrar-se
          </button>
        </div>
      </div>

    </div>
  )
}

export default Login
