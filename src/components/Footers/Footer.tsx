import { Link,useNavigate } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import styles from './Styles/Footer.module.css'
import logo from '../../assets/growing.svg'

function Footer() {

    const navigate = useNavigate()

  return (
    <div className={styles.Foot}>

      <div className={styles.image}>
        <img className={styles.logo} src={logo} alt="Logo" />
        <button className={styles.button} onClick={() => {navigate('/Login')}}>Relatar Amontoados</button>

        <div className={styles.icons}>
        <a
        target="_blank" 
        href="https://www.instagram.com/albertinafaila/">
           <IoLogoInstagram size={40} color="green" />
           </a>

        <a href="#">
        <CiFacebook size={40} color="green" />
        </a>
        </div>

      </div>
      
      <div className={styles.List}>
        <h4 className={styles.text}>Mapa do Site</h4>
        <Link className={styles.link} to="/">Início</Link>
        <Link className={styles.link} to="/blog">Blog</Link>
        <Link className={styles.link} to="/enterprises">Empresas</Link>
        <Link className={styles.link} to="/contacts">Contactos</Link>
      </div>

      <div className={styles.Links}>
      <h4 className={styles.text}>Links Utéis</h4>
        <a 
          className={styles.link} 
          href="https://www.elisal.ao/" 
          target="_blank" 
          rel="noopener noreferrer">
          Sites Greens
        </a>

        <Link className={styles.link} to="/contacts">Contacte-nos</Link>
        <a className={styles.link} href="#">Suporte Técnico</a>
      </div>

    </div>
  )
}

export default Footer