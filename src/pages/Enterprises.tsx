import { useNavigate } from 'react-router-dom';
import image from '../assets/growing.svg';

export default function Enterprises() {

  const navigate = useNavigate()

  const Inicio = () => {
    navigate('/');
  };

  return <div className=''>
    <div className=''>
      <img className='' src={image} alt="Imagem ilustrativa" />
    </div>
    <div className=''>
      <h3>Página de Empresas</h3>
      <div className=''>
        <p>A página que está tentando acessar encontra-se em estado de desenvolvimento.</p>
        <p>Por favor, tente acessá-la mais tarde.</p>
      </div>
      <div className=''>
        <button className='' onClick={Inicio}>Voltar à Página Inicial</button>
      </div>
    </div>
  </div>;
};

