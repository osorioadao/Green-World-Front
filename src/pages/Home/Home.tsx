import React from 'react'
import styles from '../Home/Home.module.css'
import bodyImage from '../../assets/home.webp'
import cardImage1 from '../../assets/mapa.jpg'
import cardImage2 from '../../assets/recolha.jpg'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const Home: React.FC = () => {  
   const navigate = useNavigate()
  return (

    <div className={styles.containerHome}>

    <Header />


     {/* <div className={styles.container_card}>

      <div className={styles.card}>
        <img className={styles.cardImage} src={cardImage1} alt="mapa" />
        <div className={styles.content}>
          <h3>Localização eficiente</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, at. Earum reprehenderit iste.</p>
        </div>
      </div>

      <div className={styles.card}>
        <img className={styles.cardImage} src={cardImage2} alt="recolha" />
        <div className={styles.content}>
          <h3>Promotor da saúde e bem-estar</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis obcaecati quam dicta nobis voluptatem.</p>
        </div>
      </div>
      
     </div> */}

     {/* <Footer></Footer> */}
    </div>
  )
}

export default Home