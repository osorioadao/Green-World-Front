import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Blog.module.css';
import Header from '../../components/Header';
import imageColeta from '../../assets/coleta-seletiva-para-gerenciamento-de-residuos-scaled-1.webp';
import imageCard1 from '../../assets/icone-de-feuille-jaune.png';
import imageCard2 from '../../assets/icone-de-feuille-bleue.png';
import imageCard3 from '../../assets/icone-de-feuille-grise.png';
import imageCard4 from '../../assets/icone-de-feuille-noire.png';
import imageCard5 from '../../assets/icone-de-feuille-orange.png';
import imageCard6 from '../../assets/icone-de-feuille-rouge.png';
import imageCard7 from '../../assets/icone-de-feuille-verte.png';
import DontLost from '../../components/DontLost';
import MiniFooter from '../../components/MiniFooter';

const Blog: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    { image: imageCard1, title: 'Campanha de Recolha de Lixo', text: 'Descrição do resíduo perigoso.' },
    { image: imageCard5, title: 'Símbolo da folha Laranja', text: 'Descrição do resíduo perigoso.' },
    { image: imageCard6, title: 'Símbolo da folha Vermelha', text: 'Descrição do resíduo perigoso.' },
    { image: imageCard7, title: 'Símbolo da folha Verde', text: 'Descrição do resíduo perigoso.' },
    { image: imageCard2, title: 'Símbolo da folha Azul', text: 'Descrição do resíduo perigoso.' },
    { image: imageCard3, title: 'Símbolo da folha Cinza', text: 'Descrição do resíduo perigoso.' },
    { image: imageCard4, title: 'Símbolo da folha Preta', text: 'Descrição do resíduo perigoso.' },
  ];

  return (
    <div className={styles.containerBlog}>

      <Header />

      <div className={styles.content}>
        <h1>O que é a Green World?</h1>
        <p className={styles.paragraph}>
          A Green World é uma plataforma de geolocalização de amontoados de lixo...
        </p>
      </div>

      <img className={styles.imageColeta} src={imageColeta} alt="" />
      <div className={styles.content1}>
        <p className={styles.paragraph}>
          A Green World destaca-se com uma logo representando a coleta seletiva.
        </p>
      </div>
      
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <img className={styles.imageCard} src={card.image} alt={card.title} />
              <h5>{card.title}</h5>
              <p className={styles.cardText}>{card.text}</p>
            </div>
          ))}
        </Slider>
      </div>
      <DontLost />
      <MiniFooter />
    </div>
  );
};

export default Blog;


