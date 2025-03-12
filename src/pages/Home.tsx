import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers/Footer";
import image from "../assets/Address-bro.png";
import video from '../assets/video/coletaSelectiva.mp4';
import image2 from '../assets/coleta.jpg';
import video2 from '../assets/video/mundoverde.mp4';
import image4 from '../assets/carta.jpg';
import imageFixed from '../assets/pexels-tomfisk-3174349.jpg';
import Contacts from "./Contacts";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";


export default function Home() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  interface Types {
    title: string,
    item: string,
    description: string
  }

  // Lista de mídia
  const midiaItens = [
    { type: "image", src: image2, title: "Imagem 1", description: "Descrição da imagem 1", time: "Publicado a 06/03/2025" },
    { type: "video", src: video, title: "Vídeo 1", description: "Descrição do vídeo 1", time: "Publicado á 30/10/2024" },
    { type: "image", src: image4, title: "Greve nos serviços de Recolha de Lixo", description: "Os trabalhadores da empresa de recolha de lixo e saneamento de Luanda tornaram a entrar em greve durante esta quadra natalícia e por tempo indeterminado para reclamar o pagamento dos salários em atraso.", time: "Publicado a: 26/12/2019 - 18:49" },
    { type: "video", src: video2, title: "Vídeo 2", description: "Descrição do vídeo 2", time: "Publicado á 09/12/2020" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
       
    </div>
  );
}




