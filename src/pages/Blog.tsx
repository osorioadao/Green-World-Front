import Header from '../components/Headers/Header';
import imageColeta from '../assets/mapa.png'

export default function Blog() {

  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center gap-[10px] '>
        <div className='text-title font-bold text-center'>
          <h1>O que é a Green World?</h1>
        </div>
        <img className='w-[20rem]' src={imageColeta} alt="" />
      </div>
    </div>
  );
};




