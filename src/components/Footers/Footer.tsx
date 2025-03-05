import { useNavigate } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import Logo from "../../assets/Logo";
import PrimaryButton from "../../components/PrimaryButton";
import FooterLinks from "../../components/FooterLinks";

export default function Footer() {

  const navigate = useNavigate()
  const groupLinks1 = {
    title: 'Mapa do site',
    links: [
      { linkName: 'Inicio', link: '/s' },
      { linkName: 'Blog', link: '/' },
      { linkName: 'Empresas', link: '/' },
      { linkName: 'Contactos', link: '/' },
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
    <div className='flex items-center justify-between w-full p-10 text-white bg-black/75 '>
      <div className='flex items-center gap-[100px] '>
        <div
          className='flex justify-center items-center flex-col gap-[10px]'
          style={{ transition: '.5s ease' }}
        >
        <div className="flex justify-center items-center w-32 h-[48px] p-2 rounded-[2px]" >
          <Logo className="w-[90px] h-[90px]" />
        </div>

          <span>Siga-nos nas redes sociais</span>
          <div className="flex gap-4 mx-auto" >
            <a
              target="_blank"
              href="https://www.instagram.com/albertinafaila/">
              <IoLogoInstagram size={40} color="white" />
            </a>

            <a href="#">
              <CiFacebook size={40} color="white" />
            </a>
          </div>
        </div>
        <FooterLinks data={[groupLinks1, groupLinks2]} />
      </div>
    </div>
  )
}