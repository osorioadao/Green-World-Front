import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ErrorPage.module.css'
import image from '../assets/notfound.webp'

function ErrorPage() {

    const navigate = useNavigate()
    const Inicio = () => {
      navigate('/')
    }
  

  return (
    <div className={styles.containerError}>

       <div className={styles.image}>
            <img className={styles.img} src={image} alt="notfoundpage" />
        </div>

        <div className={styles.content}>
        <h3>Lamentamos, mas esta página não foi encontrada.</h3>
        <p>A página que está tentando aceder não existe.</p>
         <div className={styles.btn}>
         <button onClick={Inicio}>Voltar á pagina inicial</button>
         </div>
        </div>

    </div>
  )
}

export default ErrorPage