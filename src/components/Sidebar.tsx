import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { SiEnterprisedb } from "react-icons/si";
import { GrBlog } from "react-icons/gr";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Sidebar: React.FC = () => {

  const navigate = useNavigate()

  // Estados para controle
  const [itemAtivo, setItemAtivo] = useState<string>('Dashboard');
  const [expandirMenu, setExpandirMenu] = useState<boolean>(true)

  // Definindo o link activo
  const selectLink = (route: string, item: string) => {
    navigate(route)
    setItemAtivo(item)
  }    

  const toggleMenu = () => {
    setExpandirMenu(!expandirMenu)
  }


  return (
  <div 
  className={` ${
    expandirMenu ? '' : ''
  }`}>
 
 <div className=''>
 <RxHamburgerMenu onClick={toggleMenu} size={30} className='' />
 <IoMdArrowBack size={30} className='hover: -[#6ada0e] cursor-pointer' style={{transition: '.2 ease-in-out'}} onClick={() => navigate(-1)}  />
 </div>


<nav className=''>

 <ul>
  <li
   onClick={() => selectLink('/', 'Dashboard')}
   className={itemAtivo === 'Dashboard' ? '' : ''}
   >
    <span className=''>
    <MdOutlineSpaceDashboard size={30} />
    </span>
    {expandirMenu && <span className=''>Dashboard</span>}
  </li>

  <li 
  onClick={() => selectLink('/Blog', 'Blog')}
  className={itemAtivo === 'Blog' ? '' : ''}
  >
    <span className=''>
    <GrBlog size={30} />
    </span>
    {expandirMenu && <span className=''>Blog</span>}
  </li>

  <li 
    onClick={() => selectLink('/empresas', 'Empresas')}
    className={itemAtivo === 'empresas' ? '' : ''}
    >
    <span className=''>
    <SiEnterprisedb size={30} />
    </span>
    {expandirMenu && <span className=''>Empresas</span>}
  </li>

  <li className='item'>
    <span className=''>
    <IoIosHelpCircleOutline size={30} />
    </span>
    {expandirMenu && <span className=''>Ajuda</span>}
  </li>

 </ul>
 
</nav>
</div>



    
  );
}


export default Sidebar;