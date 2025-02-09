import React from 'react';
import styles from './Blog.module.css';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import imageColeta from '../../assets/coleta-seletiva-para-gerenciamento-de-residuos-scaled-1.webp'
import imageCard1 from '../../assets/icone-de-feuille-jaune.png'
import imageCard2 from '../../assets/icone-de-feuille-bleue.png'
import imageCard3 from '../../assets/icone-de-feuille-grise.png'
import imageCard4 from '../../assets/icone-de-feuille-noire.png'
import imageCard5 from '../../assets/icone-de-feuille-orange.png'
import imageCard6 from '../../assets/icone-de-feuille-rouge.png'
import imageCard7 from '../../assets/icone-de-feuille-verte.png'
import DontLost from '../../components/DontLost';
import MiniFooter from '../../components/MiniFooter';

const Blog: React.FC = () => {


  return (
    <div className={styles.containerBlog}>
    <Header></Header>
    <Navbar></Navbar>

  <div className={styles.content}>
   <h1>O que é a Green World ?</h1>
   <p className={styles.paragraph}>A Green World é uma plataforma de geolocalização de amontoados de lixo.
    Nós trabalhamos com pessoas voltadas á recolha de resídusos sólidos. Afim de conseguirmos aos poucos um mundo mais saudável e sustentável.</p>
  </div>

  <img className={styles.imageColeta} src={imageColeta} alt="" />

  <div className={styles.content1}>
    <p className={styles.paragraph}> A Green World destaca-se com uma logo representando a colecta selectiva.
    A colecta selectiva A coleta seletiva é um sistema de separação e recolhimento de resíduos sólidos de acordo com a sua composição e origem. O objetivo é permitir o reaproveitamento dos materiais, como papel, plástico, vidro e metal, que são transformados em matéria-prima ou outros produtos. A coleta seletiva é importante para o meio ambiente e a sustentabilidade, pois: Minimiza o impacto negativo na natureza Reduz a quantidade de lixo descartado de forma inadequada Evita a contaminação de solos, rios, oceanos, florestas e atmosfera. Impede a disseminação de doenças, fungos e bactérias A coleta seletiva pode ser feita por empresas coletoras de lixo ou pela população. No caso da população, o processo é feito nas residências e nas ruas, com o descarte do lixo nos coletores de acordo com as cores.</p>
  </div>

  <div className={styles.cardFolhas}>
    <div className={styles.card1}>
      <img className={styles.imageCard} src={imageCard1} alt="imageCard1" />
      <h5>Símbolo da folha Amarela</h5>
      <p>A folha laranja, representa os resíduos perigosos. Resíduos perigosos são materiais que apresentam características que os tornam potencialmente nocivos para a saúde humana ou o meio ambiente. São produzidos em diversos setores, como indústria, saúde e agricultura. Como exemplo, temos as pilhas, baterias, lampadas flourecentes.</p>
    </div>

    <div className={styles.card2}>
      <img className={styles.imageCard} src={imageCard5} alt="imageCard1" />
      <h5>Símbolo da folha Amarela</h5>
      <p>A folha laranja, representa os resíduos perigosos. Resíduos perigosos são materiais que apresentam características que os tornam potencialmente nocivos para a saúde humana ou o meio ambiente. São produzidos em diversos setores, como indústria, saúde e agricultura. Como exemplo, temos as pilhas, baterias, lampadas flourecentes.</p>
    </div>

    <div className={styles.card3}>
      <img className={styles.imageCard} src={imageCard6} alt="imageCard1" />
      <h5>Símbolo da folha Amarela</h5>
      <p>A folha laranja, representa os resíduos perigosos. Resíduos perigosos são materiais que apresentam características que os tornam potencialmente nocivos para a saúde humana ou o meio ambiente. São produzidos em diversos setores, como indústria, saúde e agricultura. Como exemplo, temos as pilhas, baterias, lampadas flourecentes.</p>
    </div>

    <div className={styles.card4}>
      <img className={styles.imageCard} src={imageCard7} alt="imageCard1" />
      <h5>Símbolo da folha Amarela</h5>
      <p>A folha laranja, representa os resíduos perigosos. Resíduos perigosos são materiais que apresentam características que os tornam potencialmente nocivos para a saúde humana ou o meio ambiente. São produzidos em diversos setores, como indústria, saúde e agricultura. Como exemplo, temos as pilhas, baterias, lampadas flourecentes.</p>
    </div>

    <div className={styles.card5}>
      <img className={styles.imageCard} src={imageCard2} alt="imageCard1" />
      <h5>Símbolo da folha Amarela</h5>
      <p>A folha laranja, representa os resíduos perigosos. Resíduos perigosos são materiais que apresentam características que os tornam potencialmente nocivos para a saúde humana ou o meio ambiente. São produzidos em diversos setores, como indústria, saúde e agricultura. Como exemplo, temos as pilhas, baterias, lampadas flourecentes.</p>
    </div>

    <div className={styles.card6}>
      <img className={styles.imageCard} src={imageCard3} alt="imageCard1" />
      <h5>Símbolo da folha Amarela</h5>
      <p>A folha laranja, representa os resíduos perigosos. Resíduos perigosos são materiais que apresentam características que os tornam potencialmente nocivos para a saúde humana ou o meio ambiente. São produzidos em diversos setores, como indústria, saúde e agricultura. Como exemplo, temos as pilhas, baterias, lampadas flourecentes.</p>
    </div>

    <div className={styles.card7}>
      <img className={styles.imageCard} src={imageCard4} alt="imageCard1" />
      <h5>Símbolo da folha Amarela</h5>
      <p>A folha laranja, representa os resíduos perigosos. Resíduos perigosos são materiais que apresentam características que os tornam potencialmente nocivos para a saúde humana ou o meio ambiente. São produzidos em diversos setores, como indústria, saúde e agricultura. Como exemplo, temos as pilhas, baterias, lampadas flourecentes.</p>
    </div>
    
  </div>

  <DontLost></DontLost>
  <MiniFooter></MiniFooter>
  </div>
  
  );
};

export default Blog;


