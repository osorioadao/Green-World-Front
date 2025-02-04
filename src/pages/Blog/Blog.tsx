import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Blog.module.css'
import image from '../../assets/going.png'

function Blog() {

       const navigate = useNavigate()
       const Inicio = () => {
         navigate('/')
       }

  return (

    <div className={styles.containerBlog}>
   
        <div className={styles.imagem}>
          <img className={styles.image} src={image} alt="" />
        </div>

          <div className={styles.content}>
      <h3>Página de Blog</h3>
           <div className={styles.p}>
           <p>A página que está tentando aceder,encontra-se em estado de Desenvolvimento.</p>
           <p>Por favor tente acedê-la mais tarde.</p>
           </div>
           <div className={styles.btn}>
            <button onClick={Inicio}>Voltar á Página Inicial</button>
           </div>
          </div>
    </div>
  )
}

export default Blog