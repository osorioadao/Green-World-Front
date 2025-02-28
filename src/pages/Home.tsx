import { useNavigate } from "react-router-dom";
import Header from "../components/Headers/Header";
//import Footer from "../components/Footers/Footer";
import image from "../assets/Address-bro.png";
import imageDirector from '../assets/Navigation-cuate.png'
//import Contacts from "./Contacts";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";

export default function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      image: imageDirector,
      imageAlt: "image",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci qui minus atque nihil! Eaque dolorum, suscipit voluptatibus",
      button: "Ver mais",
    },
    {
      image: imageDirector,
      imageAlt: "image",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci qui minus atque nihil! Eaque dolorum, suscipit voluptatibus",
      button: "Ver mais",
    },
    {
      image: imageDirector,
      imageAlt: "image",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci qui minus atque nihil! Eaque dolorum, suscipit voluptatibus",
      button: "Ver mais",
    },
  ];

  return (
    <div className="flex flex-wrap flex-col">
      <Header />
      <div className="pt-[14vh] flex md:flex-row flex-col gap-2 p-2 h-[460px]">
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
              onClick={() => navigate("/blog")}
              name={"Comece a Relatar"}
              addClassName="w-[13rem]"
            />
          </div>
        </div>
        <div className="pt-[12vh] flex flex-1 justify-center items-center">
          <img width={400} src={image} />
        </div>
      </div>

      <div className="justify-center flex ">
      <Card cards={cards}/>
      </div>
    </div>
  );
}


