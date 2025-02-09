import React from 'react'
import styles from './DontLost.module.css'
import logo from '../assets/logosemfundo.png'

function DontLost() {
  return (
    <div className={styles.containerDontLost}>
    <div className={styles.Links}>

<img src={logo} alt="logo" />

<div className={styles.links}>

<p className={styles.par}>Não se perca</p>
<a href="/">Início</a>
<a href="/blog">Blog</a>
<a href="/empresas">Empresas</a>
<a href="/contacts">Contactos</a>

</div>

<div className= {styles.linksUteis}>

<p className={styles.par}>Links Utéis</p>
<div className={styles.link}>
<a href="">Contactos</a>
<a href="/termos">Política de Privacidade</a>

</div>
</div>
    </div>
    </div>
  )
}

export default DontLost;