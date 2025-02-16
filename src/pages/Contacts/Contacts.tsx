import React from 'react';
import styles from './Contacts.module.css';
import Header from '../../components/Header';
import logo from '../../assets/logosemfundo.png'
import image from '../../assets/Abre-PERFIL-BRASIL-17.jpg';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import DontLost from '../../components/DontLost';
import MiniFooter from '../../components/MiniFooter';

const Contacts: React.FC = () => {
  return (
    <div className={styles.containerContacts}>

      <Header />

      <h2 className={styles.subtitle}>Contacte-nos</h2>
      <img className={styles.image} src={image} alt="Alguém ao telefone" />
      <br /> <br /> <br />

      <div className={styles.cards}>

        <div className={styles.card1}>
          <FiPhone id={styles.icon1} color="green" />
          <h4>Telefone</h4>
          <p>(+244) 934156335</p>
        </div>

        <div className={styles.card2}>
          <MdOutlineEmail id={styles.icon2} color="green" />
          <h4>Email</h4>
          <p>GreenWorld70@gmail.com</p>
        </div>

      </div>

      <div className={styles.global}>

      <div className={styles.form}>

<div className={styles.text}>

<h6 className={styles.h6}>Entre em contacto conosco</h6>
   <p className={styles.p}>Caso haja alguma dúvida,não exite 
   estamos aqui para esclarece-lo.  Acesse também nossa 
   <a href="" target='_blank' className={styles.link}>Central de Ajuda.</a>
   </p>

</div>

<div className={styles.inputs}>
 <input 
 id={styles.nome}
 className={styles.nome}
 type="text"
 placeholder='Nome'
 required
 autoComplete='on'/>

  <input 
  id={styles.email}
  className={styles.email}
  type="email"
  placeholder='Email'
  required
  autoComplete='on'/>

 <textarea 
 name="mensagem"
 id={styles.mensagem}
 className={styles.mensagem}
 placeholder="Mensagem">
 </textarea>

</div>



  <div>
   <button className={styles.btn0}>Enviar</button>
  </div>

      </div>
    </div>   
       
        <DontLost></DontLost>
        <MiniFooter></MiniFooter>

    </div>
  );
}

export default Contacts;