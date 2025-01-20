import React from 'react'
import styles from './ErrorPage.module.css'
import image from '../assets/notfound.webp'

function ErrorPage() {
  return (
    <div className={styles.container}>

       <div className={styles.cont}>
       <div className="image">
            <img className={styles.img} src={image} alt="notfoundpage" />
        </div>

        <div className={styles.content}>
        <h1>Lamentamos, mas esta página não foi encontrada.</h1>
        <p>A página que está tentando aceder não existe.</p>
        </div>
       </div>

    </div>
  )
}

export default ErrorPage