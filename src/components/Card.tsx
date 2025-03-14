import { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/pexels-lara-jameson-8828387.jpg";
import image2 from "../assets/pontos.webp";
import image3 from "../assets/beneficio.webp";

const cards = [
  {
    title: "Monetize com a Green World",
    text: "Ganhe pontos a cada amontoado relatado, tendo a possibilidade de ganhar vários prémios, como saldo e até mesmo dinheiro.",
    image: image1,
  },
  {
    title: "Benefícios exclusivos para membros",
    text: "Participação em eventos ecológicos exclusivos. Descontos em serviços de empresas parceiras.",
    image: image2,
  },
  {
    title: "Ajude a tornar Luanda mais limpa",
    text: "Relate amontoados de lixo e veja as mudanças acontecerem!",
    image: image3,
  },
];

export default function CardCarousel() {
  const [index, setIndex] = useState(0);

  const nextCard = () => setIndex((prev) => (prev + 1) % cards.length);
  const prevCard = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="flex md:flex-row flex-col items-center justify-center min-h-screen py-24 gap-10 px-4 md:px-4 shadow-lg rounded-lg">
      {/* Texto */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-3xl font-bold text-green-800">Por que usar a Green World</h2>
        <p className="mt-4 text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, ut vitae? Delectus aperiam adipisci debitis
          unde, odio eius a non commodi tenetur vel aut quod doloribus excepturi optio quam neque.
        </p>
      </div>

      {/* Card Animado */}
      <div className="relative w-full max-w-md flex items-center justify-center">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6 text-center w-full"
        >
          <img className="h-40 w-full object-cover rounded-md" src={cards[index].image} alt="Green World" />
          <h3 className="font-medium text-xl mt-4">{cards[index].title}</h3>
          <p className="text-gray-600 mt-2">{cards[index].text}</p>

          {/* Botões de Navegação */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <button onClick={prevCard} className="px-4 py-2 bg-green-900 text-white rounded-md hover:bg-green-800">
              ◁
            </button>
            <button onClick={nextCard} className="px-4 py-2 bg-green-900 text-white rounded-md hover:bg-green-800">
              ▷
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}



