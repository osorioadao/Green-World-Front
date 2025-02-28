import { useNavigate } from 'react-router-dom';
import image from '../assets/growing.png';

export default function Enterprises() {

  const navigate = useNavigate()

  const Inicio = () => {
    navigate('/');
  };

  return <div className='h-screen flex items-center justify-center p-5'>
    <div className=''>
      <img className='h-64 w-64' src={image} alt="Imagem ilustrativa" />
    </div>
    <div className='flex flex-col justify-center items-center gap-3'>
      <h2 className=' font-semibold text-4xl'>Página de Empresas</h2>
      <div className='text-center flex flex-col gap-2'>
        <p>A página que está tentando acessar encontra-se em estado de desenvolvimento.</p>
        <p>Por favor, tente acessá-la mais tarde.</p>
      </div>
      <div className='py-5'>
        <button className='font-semibold rounded-sm text-white bg-[#408932] h-10 w-52 transition delay-75 hover:bg-[#66ad54]' onClick={Inicio}>Voltar à Página Inicial</button>
      </div>
    </div>
  </div>;
};

