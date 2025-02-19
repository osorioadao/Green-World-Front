    import React from 'react'
    import styles from './DontLost.module.css'
    import logo from '../../public/greenworld.svg'

    function DontLost() {
      return (
        <div className={styles.containerDontLost}>
        <div className={styles.Links}>

    <img src={logo} alt="logo" />

    <div className={styles.links}>

    <p className={styles.par}>Não se perca</p>
    <a className={styles.link0} href="/">Início</a>
    <a className={styles.link0} href="/blog">Blog</a>
    <a className={styles.link0} href="/empresas">Empresas</a>
    <a className={styles.link0} href="/contacts">Contactos</a>

    </div>

    <div className= {styles.linksUteis}>

    <p className={styles.par}>Links Utéis</p>
    <div className={styles.link}>
    <a className={styles.link0} href="">Contactos</a>
    <a className={styles.link0} href="/termos">Política de Privacidade</a>

    </div>
    </div>
        </div>
        </div>
      )
    }

    export default DontLost;