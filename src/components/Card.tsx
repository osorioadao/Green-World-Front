import image from '../assets/pexels-lara-jameson-8828387.jpg'

export default function Card(){
  return (
    <div className="h-screen md:flex-row flex flex-col justify-center items-center gap-[3rem]">
      <div className="">
        <img className='h-80 w-80 rounded-sm' src={image} alt="" />
      </div>
      <div className="h-80 w-80 p-10 justify-center flex flex-col gap-6">
        <h3 className="font-medium text-2xl">O que ganho ao fazer parte da Green World?</h3>
        <p>Ganhe pontos a cada amontoado relatado,tendo a possibilidade de ganhar vários prémios,como saldo e até mesmo algum Money. <span className='bg-[#E0A458]'>✔️</span></p>
        <p>Envolva-se no desenvolvimento sustentável de Luanda. <span className='bg-[#E0A458]'>✔️</span></p>
      </div>
    </div>
  )
}
