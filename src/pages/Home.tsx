import styles from './Styles/Home.module.css'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Headers/Header'
import Footer from '../components/Footers/Footer'
import image from '../assets/old-new-ways-travel.jpg'
import image2 from '../assets/Paper map-cuate.png'
import Blog from './Blog'
import Contacts from './Contacts'

export default function Home () {  

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

      <div className={styles.par}><h3>Como actuamos ?</h3></div>
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
      <Blog />

      <Contacts />

     <Footer /> 
    </main>
  )
}
