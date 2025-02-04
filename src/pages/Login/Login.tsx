import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import logo from '../../assets/logosemfundo.png'


function Login() {

  const navigate = useNavigate()

  function navigateToTypeRegister() {
    navigate('/TypeRegister')
  }

  function navigateToDashboard() {
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
          required />
          <label htmlFor="senha">Sua senha</label>
          <input type="password" required />
        </div>

         <div className={styles.btn}>
         <button className={styles.buttonEntrar} onClick={navigateToDashboard}>Entrar</button>
         </div>

       </form>

       <div className={styles.mini_footer}>
        <p>Ainda não tem uma conta?</p>
         <div className={styles.btn0}>
         <button className={styles.buttonCadastrar} onClick={navigateToTypeRegister}>Cadastrar-se</button>
         </div>
       </div>

    </div>
  )

}

export default Login