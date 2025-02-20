import React from 'react'
import styles from '../Home/Home.module.css'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import image from '../../assets/old-new-ways-travel.jpg'
import image2 from '../../assets/Paper map-cuate.png'

export const Home: React.FC = () => {  

   const navigate = useNavigate()

  return (

    <main className={styles.Home}>

    <Header />

      <div className={styles.content}>
      <div className={styles.content_one}>
        
        <div className={styles.text}>
          <h2>Localizamos com precisão os amontoados perto de si.</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci qui minus atque nihil! Eaque dolorum, suscipit voluptatibus</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci.</p>
            <div className={styles.btn}>
              <button className={styles.button} onClick={() => navigate('/blog')}>Saiba mais</button>
            </div>
            </div>

            <div className={styles.image}>
              <img className={styles.img} src={image2} alt="mapa" />
            </div>
     </div> 

      <div className={styles.par}><h3>Como actuamos</h3></div>
      <div className={styles.Cards}>

       <div className={styles.box_card1}>
        <div>
        <img className={styles.imageCard} src={image} alt="" />
        </div>

         <div className={styles.textCard}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero blanditiis obcaecati impedit pariatur quam praesentium nihil, error cumque delectus, quasi ipsam reiciendis.</p></div>

        <div className="btn">
          <button type='button'>Ver mais</button>
        </div>

        </div>

        <div className={styles.box_card2}>
        <div>
        <img className={styles.imageCard} src={image} alt="" />
        </div>

         <div className={styles.textCard}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero blanditiis obcaecati impedit pariatur quam praesentium nihil, error cumque delectus, quasi ipsam reiciendis.</p></div>

        <div className="btn">
          <button type='button'>Ver mais</button>
        </div>

        </div>

        <div className={styles.box_card3}>
        <div>
        <img className={styles.imageCard} src={image} alt="" />
        </div>

         <div className={styles.textCard}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero blanditiis obcaecati impedit pariatur quam praesentium nihil, error cumque delectus, quasi ipsam reiciendis.</p></div>

        <div className="btn">
          <button type='button'>Ver mais</button>
        </div>

        </div>

        <div className={styles.box_card4}>
        <div>
        <img className={styles.imageCard} src={image} alt="" />
        </div>

         <div className={styles.textCard}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero blanditiis obcaecati impedit pariatur quam praesentium nihil, error cumque delectus, quasi ipsam reiciendis.</p></div>

        <div className="btn">
          <button type='button'>Ver mais</button>
        </div>

        </div>

      </div>
      

      </div>

     <Footer /> 
    </main>
  )
}

export default Home