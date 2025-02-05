import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Blog.module.css';
import image from '../../assets/going.png';

const Blog: React.FC = () => {
  const navigate = useNavigate();

  const Inicio = () => {
    navigate('/');
  };

  return (
    <div className={styles.containerBlog}>
      <div className={styles.imagem}>
        <img className={styles.image} src={image} alt="Imagem ilustrativa" />
      </div>
      <div className={styles.content}>
        <h3>Página de Blog</h3>
        <div className={styles.p}>
          <p>A página que está tentando acessar encontra-se em estado de desenvolvimento.</p>
          <p>Por favor, tente acessá-la mais tarde.</p>
        </div>
        <div className={styles.btn}>
          <button onClick={Inicio}>Voltar à Página Inicial</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
