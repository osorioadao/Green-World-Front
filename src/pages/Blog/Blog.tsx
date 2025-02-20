import React from 'react';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Blog.module.css';
import Header from '../../components/Header';
import imageColeta from '../../assets/mapa.png'
import DontLost from '../../components/DontLost';
import MiniFooter from '../../components/MiniFooter';

const Blog: React.FC = () => {

  return (
    <div className={styles.Blog}>

      <Header />

  <div className={styles.Blog2}>
  <div className={styles.content}>
        <h1>O que é a Green World?</h1>
      </div>
      <img className={styles.imageColeta} src={imageColeta} alt="" />
      {/* <DontLost /> */}
      {/* <MiniFooter /> */}
  </div>
    </div>
  );
};

export default Blog;


