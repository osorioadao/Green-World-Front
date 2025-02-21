import logo from '../../public/greenworld.svg';
import { SiEnterprisedb } from "react-icons/si";
import { FaBlog, FaHome } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";

function MiniSidebar() {
  return (
    <div className=''>
     <img src={logo} alt="logo" />
     <SiEnterprisedb />
     <FaBlog />
     <FaHome />
     <IoIosHelpCircleOutline />
    </div>
  )
}

export default MiniSidebar