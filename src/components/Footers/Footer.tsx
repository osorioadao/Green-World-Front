import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import Logo from "../../assets/Logo";
import Skeleton from "../../components/Skeleton";
import FooterLinks from "../../components/FooterLinks";

export default function Footer() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula um carregamento (pode ser substituído por um fetch real)
    setTimeout(() => setIsLoading(false), 4000);
  }, []);

  const groupLinks1 = {
    title: 'Mapa do site',
    links: [
      { linkName: 'Inicio', link: '/' },
      { linkName: 'Notícias', link: '/news' },
      { linkName: 'Empresas', link: '/empresas' },
      { linkName: 'Contactos', link: '/contactos' },
    ],
  }

  const groupLinks2 = {
    title: 'Links úteis',
    links: [
      { linkName: 'Sites Greens', link: '/s' },
      { linkName: 'Contacte-nos', link: '/' },
    ],
  }
  return (
    <div className='flex flex-col items-center p-10 text-white bg-black/75 '>
      <div className='flex items-center gap-[50px] '>
        <div
          className='flex justify-center items-center flex-col gap-[8px]'
          style={{ transition: '.5s ease' }}
        >
        <div className="flex justify-center items-center w-32 h-[48px] p-2 rounded-[2px]" >
          <Logo className="w-[90px] h-[90px]" />
        </div>

          <span className="text-center">Siga-nos nas redes sociais</span>
          <div className="flex gap-4 mx-auto" >
            <a
              target="_blank"
              href="https://www.instagram.com/albertinafaila/">
              <IoLogoInstagram size={40} color="white" />
            </a>

            <a href="#">
              <CiLinkedin size={40} color="white" />
            </a>
          </div>
        </div>
        <FooterLinks data={[groupLinks1, groupLinks2]} />
      </div>
 

     {isLoading ? (
  <Skeleton width="100%" height="20px" />
) : (
      <div className="w-full border-t border-white/30 mt-6 pt-4 text-center">
      <p>Green World © 2025 - Direitos reservados</p>
    </div>
)}


    </div>
  )
}