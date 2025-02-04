import React from 'react'
import styles from '../Home/Home.module.css'
import bodyImage from '../../assets/home.webp'
import cardImage1 from '../../assets/mapa.jpg'
import cardImage2 from '../../assets/recolha.jpg'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const Home: React.FC = () => {  
   const navigate = useNavigate()
  return (

    <div className={styles.containerHome}>
 <Header />
 <Navbar />
     
     <div className={styles.container_card}>
     <img className={styles.bodyimage} src={bodyImage} alt="bodyImage" />
     <div className={styles.text}>
     <strong>Localizamos com precisão os amontoados de lixo perto de si.</strong>
     </div>
     <div>
     <button className={styles.btn} onClick={() => navigate('/blog')}>Saiba mais</button>
     </div>
     </div>

     <div className={styles.container_card}>

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
      
     </div>

     <Footer></Footer>
    </div>
  )
}

export default Home