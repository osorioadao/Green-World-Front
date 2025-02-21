import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton';
import Logo from '../../assets/Logo';

export default function Header() {


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();


  const navigateToLogin = () => {
    navigate('/Login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  };

  return (
    <header className='flex fixed px-[5vw] w-full z-index-1 justify-between items-center bg-black/10'>
      <div>
        <Logo width={130} />
      </div>

      <div className='flex justify-between p-[8px] items-center gap-[210px] '>
        {/* Menu Hamburguer */}
        <div className='column gap-[4px] cursor-pointer' onClick={toggleMobileMenu}>
          <span className='w-[25px] h-[3px] bg-black'></span>
          <span className='w-[25px] h-[3px] bg-black'></span>
          <span className='w-[25px] h-[3px] bg-black'></span>
        </div>

        <nav className={`flex justify-center items-center gap-[28px] ${isMobileMenuOpen ? 'flex' : ''}`}>
          <Link className='text-black hover:text-primary text-[16px] font-medium' to="/">Início</Link>
          <Link className='text-black hover:text-primary text-[16px] font-medium' to="/blog">Blog</Link>
          <Link className='text-black hover:text-primary text-[16px] font-medium' to="/enterprises">Empresas</Link>
          <Link className='text-black hover:text-primary text-[16px] font-medium' to="/contacts">Contactos</Link>
          
          <PrimaryButton onClick={navigateToLogin} name={'Relatar Amontoados'} addClassName='w-full' />
        </nav>
      </div>

    </header>
  );
};


