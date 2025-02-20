// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Styles/Blog.module.css';
import Header from '../components/Headers/Header';
import imageColeta from '../assets/mapa.png'
import DontLost from '../components/DontLost';
import MiniFooter from '../components/Footers/MiniFooter';

export default function Blog() {

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




