import React from 'react'
import { MdCopyright } from 'react-icons/md'
import styles from './MiniFooter.module.css'

function MiniFooter() {
  return (
    <div className={styles.containerMiniFooter}>
         <div className={styles.mini_footer}>
        <MdCopyright size={30} color="#fff" />
        <p className={styles.who}>Copyright 2025</p>
        <p className={styles.who}>|</p>
        <p className={styles.who}>Feito por Albertina Sauimbo</p>
      </div>
    </div>
  )
}

export default MiniFooter