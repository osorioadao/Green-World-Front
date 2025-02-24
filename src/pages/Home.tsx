import { useNavigate } from 'react-router-dom'
import Header from '../components/Headers/Header'
import Footer from '../components/Footers/Footer'
import image from '../assets/old-new-ways-travel.jpg'
import image2 from '../assets/Paper map-pana.png'
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
          <div className='flex flex-col justify-center items-center gap-[10px] '>
            <h2 className='text-[40px] font-medium text-left p-5'>Luanda mais limpa começa com você!</h2>
            <div className='flex flex-col items-center' >
              <p className='text-wrap text-justify w-[75%]' >
              Relate amontoados de lixo nas ruas e ajude a manter sua comunidade limpa. Empresas de reciclagem e recolha de lixo estão prontas para agir!
              </p>
            </div>
            <div className='m-5'>
              <PrimaryButton onClick={() => navigate('/blog')} name={'Comece a Relatar'} addClassName='w-[13rem]' />
            </div>
          </div>
        </div>
        <div
          className='m-[5px] text-[40px]'
        >
          <h3 className='font-bold'>Como actuamos ?</h3>
        </div>
        <Card cards={cards} />
      </div>
      <Blog />

      <Contacts />

      <Footer />
    </div>
  )
}
