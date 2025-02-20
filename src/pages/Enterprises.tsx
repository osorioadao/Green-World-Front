import { useNavigate } from 'react-router-dom';
import styles from './Styles/Enterprises.module.css';
import image from '../assets/growing.svg';

export default function Enterprises() {

  const navigate = useNavigate()

  const Inicio = () => {
    navigate('/');
  };

  return <div className={styles.containerEnterprises}>
    <div className={styles.imagem}>
      <img className={styles.image} src={image} alt="Imagem ilustrativa" />
    </div>
    <div className={styles.content}>
      <h3>Página de Empresas</h3>
      <div className={styles.p}>
        <p>A página que está tentando acessar encontra-se em estado de desenvolvimento.</p>
        <p>Por favor, tente acessá-la mais tarde.</p>
      </div>
      <div className={styles.btn}>
        <button className={styles.button} onClick={Inicio}>Voltar à Página Inicial</button>
      </div>
    </div>
  </div>;
};

