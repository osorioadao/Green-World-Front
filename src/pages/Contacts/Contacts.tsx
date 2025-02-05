import React from 'react';
import styles from './Contacts.module.css';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import image from '../../assets/Abre-PERFIL-BRASIL-17.jpg';
import { MdCopyright } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';

const Contacts: React.FC = () => {
  return (
    <div className={styles.containerContacts}>
      <Header />
      <Navbar />
      <h2 className={styles.subtitle}>Contacte-nos</h2>
      <img className={styles.image} src={image} alt="Alguém ao telefone" />
      <br /> <br /> <br />
      <div className={styles.cards}>
        <div className={styles.card1}>
          <FiPhone color="green" size={70} />
          <h4>Telefone</h4>
          <p>(+244) 934156335</p>
          <p>(+244) 946121098</p>
        </div>

        <div className={styles.card2}>
          <MdOutlineEmail color="green" size={70} />
          <h4>Email</h4>
          <p>GreenWorld70@gmail.com</p>
        </div>
      </div>

      <br /> <br /> <br /> <br /> <br /> <br />

      <div className={styles.mini_footer}>
        <MdCopyright size={30} color="#fff" />
        <p className={styles.who}>Copyright 2025</p>
        <p className={styles.who}>|</p>
        <p className={styles.who}>Feito por Albertina Sauimbo</p>
      </div>
    </div>
  );
};

export default Contacts;