import { useNavigate } from "react-router-dom";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers/Footer";
import image from "../assets/Address-bro.png";
import imageFixed from '../assets/pexels-tomfisk-3174349.jpg'
import Contacts from "./Contacts";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="h-screen">
      <Header />
      <div className="h-screen flex md:flex-row flex-col gap-2 p-2 h-[460px]">
        <div className="flex-1 m-auto">
          <h1 className="text-2xl font-medium text-center p-5">
            Luanda mais limpa começa com você!
          </h1>
          <p className="text-center">
            Relate amontoados de lixo nas ruas e ajude a manter sua comunidade
            limpa. Empresas de reciclagem e recolha de lixo estão prontas para
            agir!
          </p>
          <div className="flex justify-center my-4">
            <PrimaryButton
              name="Comece a Relatar"
              addClassName="w-[13rem]"
              onClick={() => navigate('/Login')}
            />
          </div>
        </div>
        <div className="pt-[12vh] flex flex-1 justify-center items-center">
          <img width={400} src={image} />
        </div>
      </div>

      <div>
        <Card />
      </div>

      {/* Seção da imagem fixa com texto */}
      <div className="relative w-full h-[60vh] bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(${imageFixed})` }}>
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
          <h2 className="text-white text-3xl font-semibold p-20">UM POR TODOS,E TODOS ACABANDO O LIXO!</h2>
        </div>
      </div>
       
      <Contacts />
      <Footer />
    </div>
  );
}



