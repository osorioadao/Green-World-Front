import { useNavigate } from 'react-router-dom'
import Header from '../components/Headers/Header'
import Footer from '../components/Footers/Footer'
import image from '../assets/old-new-ways-travel.jpg'
import image2 from '../assets/Paper map-cuate.png'
import Blog from './Blog'
import Contacts from './Contacts'
import PrimaryButton from '../components/PrimaryButton'
import Card from '../components/Card'

export default function Home() {

  const navigate = useNavigate()

  const cards = [
    {
      image: image,
      imageAlt: 'image',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci qui minus atque nihil! Eaque dolorum, suscipit voluptatibus',
      button: 'Ver mais',
    },
    {
      image: image,
      imageAlt: 'image',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci qui minus atque nihil! Eaque dolorum, suscipit voluptatibus',
      button: 'Ver mais',
    },
    {
      image: image,
      imageAlt: 'image',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci qui minus atque nihil! Eaque dolorum, suscipit voluptatibus',
      button: 'Ver mais',
    },
    {
      image: image,
      imageAlt: 'image',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci qui minus atque nihil! Eaque dolorum, suscipit voluptatibus',
      button: 'Ver mais',
    },
  ]

  return (

    <div className='flex flex-col'>

      <Header />

      <div className='flex flex-col pt-[20vh] justify-center items-center top-[180px]'>
        <div className='flex flex-col justify-center items-center gap-[10px] '>
          <div className='flex justify-center items-center'>
            <img className='w-[26rem]' style={{ animation: 'moves 2s ease-in-out infinite alternate', }} src={image2} alt="mapa" />
          </div>
          <style>
            {`
            @keyframes moves {
              0% {
              transform: translateY(0);
              }
              100% {
              transform: translateY(36px);
              }
            }
            `}
          </style>
          <div className='flex flex-col justify-center items-center gap-[10px] '>
            <h2 className='text-[40px] font-medium' >Localizamos com precisão os amontoados perto de si.</h2>
            <div className='flex flex-col items-center' >
              <p className='text-wrap text-center w-[75%]' >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci qui minus atque nihil! Eaque dolorum, suscipit voluptatibus
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci qui minus atque nihil! Eaque dolorum, suscipit voluptatibus
              </p>
            </div>
            <div className='m-5'>
              <PrimaryButton onClick={() => navigate('/blog')} name={'Saiba mais'} addClassName='w-[13rem]' />
            </div>
          </div>
        </div>
        <div
          className='m-[5px] text-[40px] '
        >
          <h3 className='font-bold' >Como actuamos ?</h3>
        </div>
        <Card cards={cards} />
      </div>
      <Blog />

      <Contacts />

      <Footer />
    </div>
  )
}
